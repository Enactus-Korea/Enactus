import React, { Component, PropTypes} from 'react'
import {View, Image, TouchableHighlight, } from 'react-native'
import PanelHead from './PanelHead'
import PanelBody from './PanelBody'
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles'


class Panel extends Component {
  render() {
    return (
      <View style={styles.sideMenuContainer}>
        <PanelHead closeDrawer={this.props.closeDrawer} />
        <PanelBody
          {...this.props}
          closeDrawer={this.props.closeDrawer}
        />

      </View>
    )
  }
}

export default Panel
