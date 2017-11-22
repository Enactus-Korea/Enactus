import React, { PureComponent } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styles from './styles.js'

export default class RegisterButton extends PureComponent {
  render(){
    console.log("RegisterButton")
    return (
      <TouchableOpacity
        style={styles[this.props.buttonStyle]}
        onPress={this.props.handlePress}>
        {this.props.children}
      </TouchableOpacity>
    )
  }
}
