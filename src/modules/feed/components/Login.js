import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
// import Submit from './Submit'

const Login = () => (
  <View style={styles.container}>
    <Text style={styles.title}> for Login </Text>
  </View>
)

const styles = StyleSheet.create({
  title: {
    marginBottom: 20,
    fontSize: 22,
    textAlign: 'center'
  },
  container: {
    paddingTop: 60
  }
})

export default Login
