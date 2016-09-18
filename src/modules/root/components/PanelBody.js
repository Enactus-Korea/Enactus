import React, { Component, PropTypes} from 'react'
import {View, Image, TouchableHighlight,Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles'

class PanelBody extends Component{
  render(){
    return(
      <TouchableHighlight underlayColor="#888"
        onPress={() => {
          this.props.closeDrawer()
        }}
        key={this.props.key}>
        <View style={styles.btn}>
          <Icon style={styles.btnIcon} name={this.props.name} size={20}></Icon>
          <Text style={styles.btnText}>{ this.props.title }</Text>
        </View>
      </TouchableHighlight>
    )
  }
}
// this.props.changePanel(i)
// this.props.renderPanelContent(i)

export default PanelBody
