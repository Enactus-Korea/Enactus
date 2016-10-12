'use strict';
import React, { Component,  PropTypes } from 'react';
import {Text, Image,TouchableHighlight, View} from 'react-native'
import styles from './styles'

export default class Control extends Component {
  constructor(props){
    super(props)
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
