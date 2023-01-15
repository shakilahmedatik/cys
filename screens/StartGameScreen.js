import { View, TextInput, StyleSheet, Alert, Text } from 'react-native'
import React, { useState } from 'react'
import PrimaryButton from '../components/ui/PrimaryButton'
import Colors from '../constants/colors'
import Card from '../components/ui/Card'
import InstructionText from '../components/ui/InstructionText'

const StartGameScreen = ({ onPickNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState('')

  const numberInputHandler = enteredText => setEnteredNumber(enteredText)

  const confirmInputHandler = () => {
    const userInput = parseInt(enteredNumber)
    if (isNaN(userInput) || userInput <= 0 || userInput > 99) {
      Alert.alert(
        'Invalid Number!',
        'Please enter a valid number between 1 to 99.',
        [{ text: 'Okay!', style: 'destructive', onPress: resetInputHandler }]
      )
      return
    }
    onPickNumber(userInput)
  }

  const resetInputHandler = () => setEnteredNumber('')

  return (
    <Card>
      <InstructionText style={styles.instructionText}>
        Enter a Number
      </InstructionText>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType='number-pad'
        onChangeText={numberInputHandler}
        autoCorrect={false}
        value={enteredNumber}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </Card>
  )
}

export default StartGameScreen

const styles = StyleSheet.create({
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
})
