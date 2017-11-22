import React, { PureComponent } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import styles from './styles'


export default class RegisterActionSheet extends PureComponent {
  render(){
    return(
      <TouchableOpacity
        activeOpacity={1}
        style={styles.type_input}
        onPress={this.props.handlePress}>
        {this.props.children}
      </TouchableOpacity>
    )
  }
}
