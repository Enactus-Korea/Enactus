import React, {PropTypes} from 'react'
import { Text, TouchableHighlight, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const Button = ({props, icon, onPress}) => {
  return (
    <TouchableHighlight
      underlayColor= 'transparent'
      onPress={onPress} >
      <Icon name={icon} size={23} color="#8899a5" />
    </TouchableHighlight>
  )
}
Button.PropTypes = {
  children: PropTypes.string.isRequired,
}

export default Button
