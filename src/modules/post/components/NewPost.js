import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
// import Submit from './Submit'

const Post = () => (
  <View style={styles.container}>
    <Text style={styles.title}> 새글 페이지 </Text>
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

export default Post
