import React from 'react'
import { Text, TouchableHighlight, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const Button = ({icon, onPress}) => {
  return (
    <TouchableHighlight
     underlayColor= 'transparent'
     onPress={onPress} >
     <Icon name={icon} size={23} color="#8899a5" />
   </TouchableHighlight>
  )
}

export default Button
