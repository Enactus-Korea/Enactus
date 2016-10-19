import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles'


class CommentComp extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <View style={styles.feedTopContainer}>
        <Image
            source={require('../../assets/user.png')}
            style={styles.userImage}
            />
        <View style={styles.feedInfoContainer}>
          <View style={{flexDirection: "row"}}>
            <Text style={styles.feedUser}>{this.props.c_username}</Text>
            <Text style={styles.feedUserUniv}>{this.props.c_useruniv}</Text>
          </View>
          <Text>{this.props.c_usercmt}</Text>
        </View>
      </View>

    )
  }
}
export default CommentComp
