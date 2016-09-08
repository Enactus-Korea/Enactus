import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import Button from './Button'

const About = () => (

    <Text style={styles.title}>Detail</Text>

)
// <Button onPress={_goBack} label='Go Back' />
const styles = StyleSheet.create({
  title: {
    marginBottom: 20,
    fontSize: 22,
    textAlign: 'center'
  },
})

export default About
