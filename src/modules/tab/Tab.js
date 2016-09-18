import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, ScrollView, TouchableOpacity, TabBarIOS } from 'react-native'
// import Tabbar from 'react-native-tabbar'
import * as actions from './actions'
import styles from './styles'
// import { nav } from './modules'
import Feed from '../feed/Feed'
import Post from '../post/Post'
import User from '../user/User'
import Icon from 'react-native-vector-icons/Ionicons';


class Tab extends Component {
  _changeTab (i) {
    const { replaceTab } = this.props
    replaceTab(i)
  }
  _renderTabContent (key) {
    switch (key) {
      case 'post':
        return <Post />
      case 'feed':
        return <Feed />
      case 'profile':
        return <User />
    }
  }
  render() {
    debugger
    const tabs = this.props.tabs.tabs.map((tab, i) => {
      return(
        <Icon.TabBarItem key={tab.key}
						iconName={tab.iconName}
						selectedIconName={tab.selectedIconName}
						title={tab.title}
            onPress={ () =>
              this._changeTab(i) }
						selected={this.props.tabs.index === i}>
						{ this._renderTabContent(tab.key) }
				</Icon.TabBarItem>
      )
    })
    return (
      <TabBarIOS tintColor="#E8B11D">
        {tabs}
      </TabBarIOS>
    )
  }
}

Tab.displayName = 'Tab'

Tab.propTypes = {
  changeTab: PropTypes.func.isRequired,
  replaceTab: PropTypes.func.isRequired
}
export default connect(
  (state) => ({
    tabs: state.tab
  }),
  (dispatch) => ({
    changeTab: (index) => dispatch(actions.changeTab(index)),
    replaceTab: (index) => dispatch(actions.replaceTab(index))
  })
)(Tab)
