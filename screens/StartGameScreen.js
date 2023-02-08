import {
  View,
  TextInput,
  StyleSheet,
  Alert,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native'
import React, { useState } from 'react'
import PrimaryButton from '../components/ui/PrimaryButton'
import Colors from '../constants/colors'
import Card from '../components/ui/Card'
import InstructionText from '../components/ui/InstructionText'
import Title from '../components/ui/Title'

const StartGameScreen = ({ onPickNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState('')
  const { width, height } = useWindowDimensions()
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
  const marginTopDistance = height < 380 ? 30 : 100
  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior='position'>
        <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
          <Title>Guess My Number</Title>
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
                <PrimaryButton onPress={confirmInputHandler}>
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  )
}

export default StartGameScreen

const styles = StyleSheet.create({
  screen: { flex: 1 },
  rootContainer: {
    flex: 1,
    alignItems: 'center',
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontFamily: 'open-sans-bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
})
