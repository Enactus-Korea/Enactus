import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Button from './Button'
import Feeds from './Feeds'

// const route = {
//   type: 'push',
//   route: {
//     key: 'about', title: 'About', showBackButton: true
//   }
// }

const Home = ({_handleNavigate}) => (
    <Feeds handleNavigate={() => _handleNavigate(route)}/>

    // <Button onPress={() => _handleNavigate(route)} label='Go To About' />

)

// const styles = StyleSheet.create({
//   title: {
//     marginBottom: 20,
//     fontSize: 22,
//     textAlign: 'center'
//   },
//   container: {
//
//   }
// })

export default Home
