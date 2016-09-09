import React, { Component, PropTypes} from 'react'
// import { connect } from 'react-redux'
import {View, Image, TouchableHighlight, Text } from 'react-native'
// import * as actions from './actions'
import styles from './styles'
import Icon from 'react-native-vector-icons/Ionicons';
// import Feed from '../feed/Feed'
// import {Intro, Network, Archive, Login, Config, Unknown} from './components'



class Panel extends Component {
  static propTypes = {
    closeDrawer: PropTypes.func.isRequired
  };
  // _changePanel (i) {
  //   const { changePanel } = this.props
  //   changePanel(i)
  // }
  renderPanels() {
    let {closeDrawer} = this.props
    const panels = this.props.panels.panels.map((panel, i) => {
      return(
        <TouchableHighlight underlayColor="#888"
          onPress={() => {
            closeDrawer()

           }}
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
}
// {this.renderPanels()}


// Panel.propTypes = {
//   renderPanelContent: PropTypes.func.isRequired,
//   changePanel: PropTypes.func.isRequired,
//   // renderPanelContent: PropTypes.func.isRequired
// }

export default Panel
