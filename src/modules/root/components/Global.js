import { View, NavigationExperimental } from 'react-native';
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import Tabs from '../../tab/Tab';
import * as actions from '../actions'
import {Intro} from '../../panel/components'

const {
  CardStack: NavigationCardStack
} = NavigationExperimental;

class Global extends Component {
  constructor(props) {
		super(props);
		this._renderOverlay = this._renderOverlay.bind(this);
		this._renderScene = this._renderScene.bind(this);
	}
  // _replacePanel (i) {
  //   const { replacePanel } = this.props
  //   replacePanel(i)
  // }
  // _renderPanelContent (key) {
  //   switch (key) {
  //     case 'post':
  //       return <Post />
  //     case 'feed':
  //       return <Feed />
  //     case 'profile':
  //       return <User />
  //   }
  // }
  render() {
		return (
      <NavigationCardStack
        onNavigate={ () => {} }
        navigationState={this.props.navigation}
        renderOverlay={this._renderOverlay}
        renderScene={this._renderScene}
      />
		);
	}
  _renderScene(props) {
    switch (props.scene.route.key){
      case 'Tabs':
        return(
        <View style={{flex: 1}}>
					<Tabs />
				</View>
      )
      case 'intro':
        return(
        <View style={{flex: 1}}>
					<Intro />
				</View>
      )
    }
  }
  _renderOverlay(props) {
    return null;
  }
}

Global.displayName = 'Global'
Global.propTypes = {
  pushRoute: PropTypes.func.isRequired,
  popRoute: PropTypes.func.isRequired,
  replacePanel: PropTypes.func.isRequired
}
export default connect(
  (state) => ({
    navigation: state.root
    //constant와 연결
  }),
  (dispatch) => ({
    pushRoute: (route) => dispatch(actions.push(route)),
    popRoute: () => dispatch(actions.pop()),
    replacePanel: (index) => dispatch(actions.replacePanel(index))
  })
)(Global)
