import React, { Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import {View, Image, TouchableHighlight, Text } from 'react-native'
import * as actions from '../actions'
import styles from './panel.styles'
import Icon from 'react-native-vector-icons/Ionicons';
import PanelButton from './PanelButton'
// import Feed from '../feed/Feed'
// import {Intro, Network, Archive, Login, Config, Unknown} from './components'


class Panel extends Component {
  static propTypes = {
    closeDrawer: PropTypes.func.isRequired,
  };
  _changePanel (i) {
    const { changePanel } = this.props
    changePanel(i)
  }
  renderPanels() {
    let {closeDrawer} = this.props
    const panels = this.props.panels.panels.map((panel, i) => {
      return(
        <PanelButton
          onPress={() => {
            closeDrawer()
            this._changePanel(i)
            }}
          panel={panel}
          />
      )
    })
    return (
      <View>
        {panels}
      </View>
    )
  }
  render(){
    let {closeDrawer} = this.props
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


Panel.displayName = 'Panel'
Panel.propTypes = {
  changePanel: PropTypes.func.isRequired,
  handleNavigate: PropTypes.func.isRequired
}
export default connect(
  (state) => ({
    panels: state.feed
  }),
  (dispatch) => ({
    changePanel: (index) => dispatch(actions.changePanel(index))
  })
)(Panel)
