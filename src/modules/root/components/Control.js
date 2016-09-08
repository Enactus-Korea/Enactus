import React, { Component, PropTypes} from 'react'
import {View, Image, TouchableHighlight, } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles'
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
      </View>
    )
  }
}
// <ScrollView style={styles.container}>
//   <Text style={styles.controlText}>Control Panel</Text>
//   <TouchableOpacity style={styles.button} onPress={closeDrawer}>
//     <Text>Close Drawer</Text>
//   </TouchableOpacity>
// </ScrollView>
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: 'black',
//   },
//   controlText: {
//     color: 'white',
//   },
//   button: {
//     backgroundColor: 'white',
//     borderWidth: 1,
//     borderColor: 'black',
//     padding: 10,
//   }
// })

export default Control
