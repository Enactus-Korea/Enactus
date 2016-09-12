import { View, Text, BackAndroid, NavigationExperimental, TouchableHighlight, Image } from 'react-native';
import React, { Component, PropTypes } from 'react'
import { Global } from './components'
import { Feeds, About, Intro, Network } from '../feed/components'
import Drawer from 'react-native-drawer'
import { connect } from 'react-redux'
import * as actions from '../feed/actions'
import styles from '../feed/styles'
import Panel from '../feed/components/Panel'
import Icon from 'react-native-vector-icons/Ionicons';
const { Header: NavigationHeader, CardStack: NavigationCardStack } = NavigationExperimental
const NavigationHeaderBackButton = require('NavigationHeaderBackButton');
// import Control from './components/Control'


class Root extends Component {
  constructor(props) {
    super(props);
    this._renderScene = this._renderScene.bind(this);
    this._handleBackAction = this._handleBackAction.bind(this)
  }
  state={
		drawerOpen: false,
		drawerDisabled: false,
	};
	closeDrawer = () => {
		this._drawer.close()
	};
	openDrawer = () => {
		this._drawer.open()
	};
  test = () =>  {
    console.log("testestesteste");

  };
  _handleNavigate (action) {
    debugger;
    console.log("Root");
    switch (action && action.type) {
      case 'push':
        this.props.pushRoute(action.route)
        return true
      // case 'change':
      //   this.props.pushRoute(action.route)
      //   return true
      case 'back':
        case 'pop':
          return this._handleBackAction()
        default:
          return false
    }
  }
  _handleBackAction () {
    if (this.props.navigation.index === 0) {
      return false
    }
    this.props.popRoute()
    return true
  }
  _renderScene (props) {
    const { route } = props.scene
    if (route.key === 'home') {
     return (
       <View style={{ marginTop: NavigationHeader.HEIGHT }}>
        <Feeds _handleNavigate={this._handleNavigate.bind(this)}/>
       </View>
     )
    }
    if (route.key === 'about') {
     return (
       <View style={{ marginTop: NavigationHeader.HEIGHT }}>
        <About  _goBack={this._handleBackAction.bind(this)}/>
       </View>
     )
    }
    if (route.key === 'intro') {
     return (
       <View style={{ marginTop: NavigationHeader.HEIGHT }}>
        <Intro />
       </View>
     )
   }
   if (route.key === 'network') {
    return (
      <View style={{ marginTop: NavigationHeader.HEIGHT }}>
       <Network />
      </View>
    )
  }
  }
  _renderHeader(props) {
    const showHeader = props.scene.route.title
    if (showHeader) {
			return (
				<NavigationHeader
				{...props}
				style={styles.navHeader}
				renderTitleComponent={this._renderTitleComponent.bind(this)}
				renderLeftComponent={this._renderLeftComponent.bind(this)}
				renderRightComponent={this._renderRightComponent.bind(this)}
				/>
			);
		}
    return null;
  }
  _renderTitleComponent(props) {
		return (
			<NavigationHeader.Title
        textStyle={{ color: 'white'}}>
				{props.scene.route.title}
			</NavigationHeader.Title>
		);
	}
  _renderLeftComponent(props) {
    if (props.scene.route.showBackButton) {
			return (
				<NavigationHeaderBackButton
          onPress={this._handleBackAction.bind(this)} />
			);
		}
    const menuShow = props.scene.route.title
		if (menuShow) {
			return (
				<TouchableHighlight
          underlayColor= 'transparent'
          onPress={this.openDrawer}>
					<Icon style={styles.menu} name="ios-menu" size={23} color="white" />
				</TouchableHighlight>
			);
		}
		return null;
  }
  _renderRightComponent(props) {
    const rightShow = props.scene.route.key === 'home'
    if (rightShow) {
			return (
				<View style={{flexDirection:"row"}}>
					<TouchableHighlight
            style={styles.buttonContainer}>
						<Icon style={styles.button} name="ios-notifications" size={23} color="white" />
					</TouchableHighlight>
          <TouchableHighlight
						style={styles.buttonContainer}>
						<Icon style={styles.button} name="ios-search" size={23} color="white" />
					</TouchableHighlight>
				</View>
			);
		}
  }
  render(){
    return (
      <Drawer
        ref={(ref) => this._drawer = ref}
        type="overlay"
        content={
          <Panel closeDrawer={this.closeDrawer} handleNavigate={this._handleNavigate.bind(this)} test={this.test} />
        }
        styles={{main: {shadowColor: '#000000', shadowOpacity: 0.3, shadowRadius: 15}}}
        onOpen={() => {
          console.log('onopen')
          this.setState({drawerOpen: true})
        }}
        onClose={() => {
          console.log('onclose')
          this.setState({drawerOpen: false})
        }}
        tweenDuration={100}
        panThreshold={0.08}
        disabled={this.state.drawerDisabled}
        openDrawerOffset={0.2}
        negotiatePan
        >
        <NavigationCardStack
          navigationState={this.props.navigation}
          onNavigate={this._handleNavigate.bind(this)}
          renderScene={this._renderScene}
          renderOverlay={this._renderHeader.bind(this)} />
      </Drawer>
    )
  }
}
// panOpenMask={0.2} => 추가하면 손으로 열기 가능..ㅎㅎㅎ
// export default Root
Root.displayName = 'Root'
Root.propTypes = {
  // changePanel: PropTypes.func.isRequired,
  pushRoute: PropTypes.func.isRequired,
  popRoute: PropTypes.func.isRequired
}
export default connect(
  (state) => ({
    // panels: state.panel,
    navigation: state.nav
  }),
  (dispatch) => ({
    // changePanel: (index) => dispatch(actions.changePanel(index)),
    pushRoute: (route) => dispatch(actions.push(route)),
    popRoute: () => dispatch(actions.pop())
  })
)(Root)
