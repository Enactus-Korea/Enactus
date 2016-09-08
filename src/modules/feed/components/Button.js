import React from 'react'
import { Text, TouchableHighlight, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

// export default ({label, onPress}) => (
//   <TouchableHighlight
//     underlayColor='#35b5ff'
//     onPress={onPress} style={styles.button}>
//     <Text style={styles.label}>{label}</Text>
//   </TouchableHighlight>
// )
const Button = ({icon, onPress}) => {
  return (
    <TouchableHighlight
     underlayColor= 'transparent'
     onPress={onPress} >
     <Icon name={icon} size={23} color="#8899a5" />
   </TouchableHighlight>
  )
}
// <Text>{children}</Text>
// <Text style={styles.label}>{label}</Text>


// const Button = (props) => {
//   const { children, onClick } = props
//
//   return (
//     <TouchableOpacity onPress={onClick} style={styles.button}>
//       <Text>{children}</Text>
//     </TouchableOpacity>
//   )
// }


export default Button
