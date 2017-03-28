import React, {Component} from 'react'
import {WebView, Linking} from 'react-native'


class WebViews extends Component {
  render(){
    return(
      <WebView
        onShouldStartLoadWithRequest={()=>{
          Linking.openURL(this.props.forUrl)
          return false;
        }}
      />
    )
  }
  componentDidMount(){
    this.props.goBack()
  }
}

export default WebViews
