import React, { Component, PropTypes} from 'react'
import {View, Image, TouchableHighlight, } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles'
import Panel from './Panel'
class Control extends Component {
  static propTypes = {
    closeDrawer: PropTypes.func.isRequired
  };
  render() {
    let {closeDrawer} = this.props
    return (
      <View style={styles.sideMenuContainer}>
        <View style={styles.control}>
          <View style={styles.imageCon}>
            <Image
              source={require('../../../Assets/logo.png')}
              style={styles.logoimage}/>
          </View>
          <TouchableHighlight underlayColor= 'transparent' style={styles.close} onPress={closeDrawer}>
            <Icon name='ios-close' size={30} color="white" />
          </TouchableHighlight>
        </View>
        <Panel />
      </View>
    )
  }
}
// Control.propTypes = {
//   renderPanelContent: PropTypes.func.isRequired,
//   changePanel: PropTypes.func.isRequired,
//   // renderPanelContent: PropTypes.func.isRequired
// }
export default Control
