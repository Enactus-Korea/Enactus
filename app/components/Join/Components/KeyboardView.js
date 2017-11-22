import React, { PureComponent } from 'react'
import { KeyboardAvoidingView } from 'react-native'

export default class KeyboardView extends PureComponent {
   render() {
    return (
      <KeyboardAvoidingView
        behavior="padding"
        style={this.props.viewStyle}
        keyboardVerticalOffset={-65}
      >
        {this.props.children}
      </KeyboardAvoidingView>
    )
  }
}
