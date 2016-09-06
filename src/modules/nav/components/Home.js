import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
// import Button from './Button'

const route = {
  type: 'push',
  route: {
    key: 'about',
    title: 'About'
  }
}

const Home = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Home</Text>

  </View>
)
// <Button onPress={() => _handleNavigate(route)} label='Go To About' />

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
