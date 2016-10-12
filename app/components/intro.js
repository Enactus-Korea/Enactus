import React, { Component } from 'react';
import { View, Text, WebView} from 'react-native';

class Intro extends Component{
  constructor(props){
    super(props)
    this.state = {
      scalesPageToFit: true,
    }
  }
  componentDidMount(){
    // this.props.actions.changeNav('intro')
    this.props.close()
  }
  render(){
    return(
      <WebView
          style={{
            backgroundColor: 'white',
            height: 1000,
          }}
          source={{uri: 'https://m.facebook.com/enactuskoreapage'}}
          scalesPageToFit={this.state.scalesPageToFit}
        />
    )
  }
}

export default Intro
