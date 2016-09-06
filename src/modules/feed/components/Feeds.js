import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Feeds extends Component {
  render(){
    return(
      <View style={styles.container}>
        <Text style={{marginTop:100}}> post공간!</Text>
      </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
})

export default Feeds
