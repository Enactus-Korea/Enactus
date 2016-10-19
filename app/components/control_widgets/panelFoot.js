'use strict';
import React, { Component,  PropTypes } from 'react';
import {Text, Image,TouchableHighlight, View} from 'react-native'
import styles from './styles'
import SafariView from "react-native-safari-view";

export default class Control extends Component {
  constructor(props){
    super(props)
  }
  _pressfacebook(){
    SafariView.isAvailable()
      .then(SafariView.show({
        url: "http://facebook.com/enactuskoreapage"
      }))
      .catch(error => {
        // Fallback WebView code for iOS 8 and earlier
      });
  }
  _pressyoutube(){
    SafariView.isAvailable()
      .then(SafariView.show({
        url: "http://youtube.com/enactuskorea"
      }))
      .catch(error => {
        // Fallback WebView code for iOS 8 and earlier
      });
  }
  _pressflickr(){
    SafariView.isAvailable()
      .then(SafariView.show({
        url: "http://flickr.com/enactuskorea"
      }))
      .catch(error => {
        // Fallback WebView code for iOS 8 and earlier
      });
  }
  render(){
    return(
      <View style={styles.channelCon}>
        <View style={styles.snsText}>
          <Text style={{fontSize: 16}}>Enactus Channel</Text>
        </View>
        <View style={styles.snsContainer} >
          <TouchableHighlight onPress={this._pressfacebook}>
            <Image source={require('../../assets/facebook.png')} style={styles.snsIcon}/>
          </TouchableHighlight>
          <TouchableHighlight onPress={this._pressyoutube}>
            <Image source={require('../../assets/youtube.png')} style={styles.snsIcon} />
          </TouchableHighlight>
          <TouchableHighlight onPress={this._pressflickr}>
            <Image source={require('../../assets/flickr.png')} style={styles.snsIcon}/>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}
