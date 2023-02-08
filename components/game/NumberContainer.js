import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import Colors from '../../constants/colors'

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  )
}

export default NumberContainer
const deviceWidth = Dimensions.get('window').width
const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderRadius: 8,
    padding: deviceWidth < 380 ? 12 : 24,
    borderColor: Colors.accent500,
    margin: deviceWidth < 380 ? 12 : 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    color: Colors.accent500,
    fontSize: deviceWidth < 380 ? 26 : 36,
    fontFamily: 'open-sans-bold',
  },
})
