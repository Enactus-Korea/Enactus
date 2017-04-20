import React, {Component} from 'react'
import {WebView, Linking, View} from 'react-native'


class WebViews extends Component {
  handleOpenLink = (url) => {
    Linking.canOpenURL(url).then(supported => {
      if (!supported) {
        console.log('Can\'t handle url: ' + url);
      } else {
        return Linking.openURL(url);
      }
    }).catch(err => console.error('An error occurred', err))
  }
  render(){
    return(
      <View>
        {this.handleOpenLink(this.props.forUrl)}
      </View>
    )
  }
  componentDidMount(){
    this.props.goBack()
  }
}

export default WebViews
