import { StyleSheet, View, Dimensions } from 'react-native'
import React from 'react'
import Colors from '../../constants/colors'

const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>
}

export default Card
const deviceWidth = Dimensions.get('window').width
const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    marginTop: deviceWidth < 380 ? 18 : 36,
    padding: 16,
    backgroundColor: Colors.primary800,
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
  },
})
