import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Button from './Button'

const route = {
  type: 'push',
  route: {
    key: 'about', title: 'About', showBackButton: true
  }
}

const Home = ({_handleNavigate}) => (
  <View style={styles.container}>
    <Button onPress={() => _handleNavigate(route)} label='Go To About' />
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

export default Home
