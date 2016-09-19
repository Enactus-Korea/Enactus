import React, { Component } from 'react';
import { View, Text} from 'react-native';

class Intro extends Component{
  constructor(props){
    super(props)
  }
  componentDidMount(){
    this.props.actions.changeNav('intro')
    this.props.close()
  }
  render(){
    return(
      <View>
        <Text>나는 인트로다잉ㅇㅇㅇ</Text>
      </View>
    )
  }
}

export default Intro
