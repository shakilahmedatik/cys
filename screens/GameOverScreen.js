import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Title from '../components/ui/Title'

const GameOverScreen = () => {
  return (
    <View style={styles.screen}>
      <Title>GameOverScreen</Title>
    </View>
  )
}

export default GameOverScreen
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: 'tomato',
  },
})
