import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Nav from "./global_widgets/nav"

class Home extends Component{
  constructor(props){
    super(props)
  }
  componentDidMount(){
  // this.props.actions.changeNav('home')
  this.props.actions.setNav(this.props.navigator);
  this.props.close();
  }
  render(){
    return(
      <ScrollView>
        {this.props.renderContent}
      </ScrollView>
    )
  }
}

export default Home
