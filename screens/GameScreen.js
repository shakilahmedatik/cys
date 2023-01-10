import { View, Text, StyleSheet, Alert } from 'react-native'
import React, { useState } from 'react'
import Title from '../components/ui/Title'
import NumberContainer from '../components/game/NumberContainer'
import PrimaryButton from '../components/ui/PrimaryButton'

const generateRandomBetween = (min, max, exclude) => {
  const randomNumber = Math.floor(Math.random() * (max - min) + min)
  if (randomNumber === exclude) {
    return generateRandomBetween(min, max, exclude)
  } else {
    return randomNumber
  }
}

const GameScreen = ({ userNumber }) => {
  let minBoundary = 1
  let maxBoundary = 100
  const initialGuess = generateRandomBetween(
    minBoundary,
    maxBoundary,
    userNumber
  )
  console.log(initialGuess)
  const [currentGuess, setCurrentGuess] = useState(initialGuess)
  const nextGuessHandler = direction => {
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'greater' && currentGuess > userNumber)
    ) {
      Alert.alert("Don't Lie!", 'You know that this is wrong...', [
        { text: 'Sorry!', style: 'cancel' },
      ])
      return
    }
    if (direction === 'lower') {
      maxBoundary = currentGuess
    } else {
      minBoundary = currentGuess - 1
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    )
    setCurrentGuess(newRndNumber)
  }
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or Lower?</Text>
        <View>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
            -
          </PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
            +
          </PrimaryButton>
        </View>
      </View>
    </View>
  )
}

export default GameScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
})
