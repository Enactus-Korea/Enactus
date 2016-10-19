import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles'


class CommentComp extends Component{
  render(){
    return(
      <View>
      <View style={styles.feedTopContainer}>
        <Image
            source={require('../../assets/user.png')}
            style={styles.userImage}
            />
        <View style={styles.feedInfoContainer}>
          <Text style={styles.feedUser}>{this.props.c_username}</Text>
          <Text style={styles.feedUserUniv}>{this.props.c_useruniv}</Text>
        </View>
      </View>
      <Text>{this.props.c_usercmt}</Text>
      </View>
    )
  }
}
export default CommentComp
