import React from 'react'
import { Text, TouchableHighlight, StyleSheet } from 'react-native'

// export default ({label, onPress}) => (
//   <TouchableHighlight
//     underlayColor='#35b5ff'
//     onPress={onPress} style={styles.button}>
//     <Text style={styles.label}>{label}</Text>
//   </TouchableHighlight>
// )
const Button = ({label, onPress}) => {
  return (
    <TouchableHighlight
      underlayColor='#35b5ff'
      onPress={onPress} style={styles.button}>
      <Text style={styles.label}>{label}</Text>
    </TouchableHighlight>
  )
}



// const Button = (props) => {
//   const { children, onClick } = props
//
//   return (
//     <TouchableOpacity onPress={onClick} style={styles.button}>
//       <Text>{children}</Text>
//     </TouchableOpacity>
//   )
// }


const styles = StyleSheet.create({
  button: {
    height: 70,
    backgroundColor: '#22a3ed',
    justifyContent: 'center',
    alignItems: 'center'
  },
  label: {
    color: 'white'
  }
})

export default Button
