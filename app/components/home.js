import React, { Component } from 'react';
import { View, Text} from 'react-native';
import Nav from "./global_widgets/nav"

class Home extends Component{
  constructor(props){
    super(props)
  }
  componentDidMount(){
  this.props.actions.changeNav('home')
  this.props.actions.setNav(this.props.navigator);
  this.props.close();
  }
  render(){
    return(
      <View>
        <Text>호호</Text>
      </View>
    )
  }
}

export default Home
