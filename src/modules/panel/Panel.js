import React, { Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import {View, Image, TouchableHighlight, Text } from 'react-native'
import * as actions from './actions'
import styles from './styles'
import Icon from 'react-native-vector-icons/Ionicons';
import Feed from '../feed/Feed'
import {Intro, Network, Archive, Login, Config, Unknown} from './components'



class Panel extends Component {
  static propTypes = {
    closeDrawer: PropTypes.func.isRequired
  };
  // _changePanel (i) {
  //   const { changePanel } = this.props
  //   changePanel(i)
  // }
  // _renderPanelContent (key) {
  //   switch (key) {
  //     case 'news':    return <Feed />
  //     case 'intro':   return <Intro />
  //     case 'network': return <Network />
  //     case 'unknown': return <Unknown />
  //     case 'archive': return <Archive />
  //     case 'config':  return <Config />
  //     case 'login':   return <Login />
  //   }
  // }
  // renderPanels() {
  //   let {closeDrawer} = this.props
  //   const panels = this.props.panels.panels.map((panel, i) => {
  //     return(
  //       <TouchableHighlight underlayColor="#888"
  //         onPress={() => {
  //           // closeDrawer()
  //           this._changePanel(i) }}
  //         key={ panel.key }>
  //         <View style={styles.btn}>
  //           <Icon style={styles.btnIcon} name={panel.name} size={20}></Icon>
  //           <Text style={styles.btnText}>{ panel.title }</Text>
  //         </View>
  //       </TouchableHighlight>
  //     )
  //   })
  //   return (
  //     <View>
  //       {panels}
  //     </View>
  //   )
  // }
  render(){
    let {closeDrawer} = this.props
    return(
      <View style={styles.sideMenuContainer}>
        <View style={styles.control}>
          <View style={styles.imageCon}>
            <Image
              source={require('../../Assets/logo.png')}
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
// {this.renderPanels()}

Panel.displayName = 'Panel'
Panel.propTypes = {
  changePanel: PropTypes.func.isRequired
}
export default connect(
  (state) => ({
    panels: state.panel
  }),
  (dispatch) => ({
    changePanel: (index) => dispatch(actions.changePanel(index))
  })
)(Panel)
