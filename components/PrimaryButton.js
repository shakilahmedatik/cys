import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

const PrimaryButton = ({ children }) => {
  const pressHandler = () => {
    console.log('Btn Pressed')
  }
  return (
    <Pressable onPress={pressHandler}>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  )
}

export default PrimaryButton

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#72063c',
    borderRadius: 28,
    paddingVertical: 8,
    paddingHorizontal: 16,
    margin: 4,
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
})
