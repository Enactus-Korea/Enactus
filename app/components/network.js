import React, { Component } from 'react';
import { View, Text} from 'react-native';

class Network extends Component{
  constructor(props){
    super(props)

  }
  componentDidMount(){
    this.props.actions.changeNav('network')
    this.props.close()
  }
  render(){
    return(
      <View>
        <Text>나는 네트워크다잉ㅇㅇㅇ</Text>
      </View>
    )
  }
}

export default Network
