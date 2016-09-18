import React, { Component, PropTypes} from 'react'
import {View, Image, TouchableHighlight, } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles'

class PanelHead extends Component {
  render() {
    return (
      <View style={styles.control}>
        <View style={styles.imageCon}>
          <Image
            source={require('../../../Assets/logo.png')}
            style={styles.logoimage}/>
        </View>
        <TouchableHighlight underlayColor= 'transparent' style={styles.close} onPress={this.props.closeDrawer}>
          <Icon name='ios-close' size={30} color="white" />
        </TouchableHighlight>
      </View>
    )
  }
}

export default PanelHead
