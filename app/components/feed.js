import React, { Component } from 'react';
import { View, Text} from 'react-native';

class Feed extends Component{
  constructor(props){
    super(props)

  }
  componentDidMount(){
    this.props.actions.changeNav('feed')
    this.props.close()
  }
  render(){
    return(
      <View>
        <Text>for post</Text>
      </View>
    )
  }
}

export default Feed
