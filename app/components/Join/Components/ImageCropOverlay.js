import React, { PureComponent } from 'react';
import {
  View
} from 'react-native'


export default class ImageCropOverlay extends PureComponent {
  render(){
    let position = {
      left : {
        left: 0
      },
      right : {
        right: 0
      },
      top : {
        top: 0
      },
      bottom : {
        bottom: 0
      }
    }
    return (
      <View style={[
        {
          opacity: 0.7,
          backgroundColor: '#000',
          position: 'absolute',
          width: this.props.width,
          height: this.props.height,
        },
        position[this.props.position]
      ]}/>
    )
  }
}
