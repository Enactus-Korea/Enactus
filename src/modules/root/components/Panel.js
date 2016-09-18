import React, { Component, PropTypes} from 'react'
import {View, Image, TouchableHighlight, } from 'react-native'
import PanelHead from './PanelHead'
import PanelBody from './PanelBody'
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles'
const bodyList = [
  { key: 'news', name:'md-paper', title: '뉴스피드' },
  { key: 'intro', name:"md-share", title: '인액터스 소개' },
  { key: 'network',name:'md-git-network',  title: '네트워크' },
]

class Panel extends Component {
  constructor(props){
    super(props)
    console.log(this.props)
  }

  render() {
    debugger
    const panels = this.props.panels.routes.slice(1).map((panel, i) => {
      return(
        <PanelBody
          {...this.props}
          replacePanel={this.props.replacePanel}
          renderPanelContent={this.props.renderPanelContent}
          name={panel.name}
          key={panel.key}
        >
          {panel.title}
        </PanelBody>
      )
    })
    return (
      <View style={styles.sideMenuContainer}>
        <PanelHead closeDrawer={this.props.closeDrawer} />
        {panels}
      </View>
    )
  }
}

// {this.isrenderBody()}

export default Panel
