import React, { Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import {View, Image, TouchableHighlight, Text } from 'react-native'
import * as actions from '../../panel/actions'
import styles from '../../panel/styles'
import Icon from 'react-native-vector-icons/Ionicons';
import Feed from '../Feed'
import {Intro, Network, Archive, Login, Config, Unknown} from '../../panel/components'

// const route = {
//   type: 'push',
//   route: [
//     {key: 'network', title: '인액터스 네트워크'},
//     {key: 'intro', title: '인액터스 소개', showBackButton: true}
//   ]
// }

class Panel extends Component {
  static propTypes = {
    closeDrawer: PropTypes.func.isRequired,
    test: PropTypes.func.isRequired,
    pushRoute: PropTypes.func.isRequired,
    popRoute: PropTypes.func.isRequired,
    changePanel: PropTypes.func.isRequired
  };
  constructor(props) {
    super(props);
    //this._renderScene = this._renderScene.bind(this);
  }
  _changePanel (i) {
    const { changePanel } = this.props
    changePanel(i)
  }
  renderPanels() {
    let {closeDrawer, test, handleNavigate} = this.props
    const panels = this.props.panels.panels.map((panel, i) => {
      return(
        <TouchableHighlight underlayColor="#888"
          onPress={() => {
            test();
            closeDrawer();
            debugger;
            handleNavigate(panel.type) }}
          key={ panel.key }>
          <View style={styles.btn}>
            <Icon style={styles.btnIcon} name={panel.name} size={20}></Icon>
            <Text style={styles.btnText}>{ panel.title }</Text>
          </View>
        </TouchableHighlight>
      )
    })
    return (
      <View>
        {panels}
      </View>
    )
  }
  render(){
    let {closeDrawer, test, handleNavigate } = this.props
    return(
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
         {this.renderPanels()}
      </View>
    )
  }
}
// {this.renderPanels()}

Panel.displayName = 'Panel'
Panel.propTypes = {
  changePanel: PropTypes.func.isRequired,
  pushRoute: PropTypes.func.isRequired,
  popRoute: PropTypes.func.isRequired
}
export default connect(
  (state) => ({
    panels: state.panel,
    navigation: state.nav
  }),
  (dispatch) => ({
    changePanel: (index) => dispatch(actions.changePanel(index)),
    pushRoute: (route) => dispatch(actions.push(route)),
    popRoute: () => dispatch(actions.pop())
  })
)(Panel)
