import React, { Component } from 'react';
import { View, Text} from 'react-native';

class User extends Component{
  constructor(props){
    super(props)

  }
  // componentDidMount(){
  //   this.props.actions.changeNav('network')
  //   this.props.close()
  // }
  render(){
    return(
      <View>
        <Text>for user</Text>
      </View>
    )
  }
}

export default User
