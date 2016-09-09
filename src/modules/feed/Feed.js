import React, { PropTypes, Component } from 'react'
import { View, Text, BackAndroid, NavigationExperimental,TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import { Home, About, Feeds,Intro, Network, Archive, Login, Config, Unknown } from './components'
import * as actions from './actions'
import styles from './styles'
import Icon from 'react-native-vector-icons/Ionicons';
const { Header: NavigationHeader, CardStack: NavigationCardStack } = NavigationExperimental
const NavigationHeaderBackButton = require('NavigationHeaderBackButton');

class Feed extends Component {
  static contextTypes = {
    drawer: React.PropTypes.object.isRequired,
  }
  constructor(props){
    super(props)
    this._renderScene = this._renderScene.bind(this)
    this._handleBackAction = this._handleBackAction.bind(this)
  }
  componentDidMount(){
    BackAndroid.addEventListener('hardwareBackPress', this._handleBackAction)
  }
  componentWillUnmount(){
    BackAndroid.removeEventListener('hardwareBackPress', this._handleBackAction)
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
          onPress={this.context.drawer.open}>
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
  _renderScene (props) {
    const { route } = props.scene
    switch (route.key) {
      case 'home' : return (
        <View style={{ marginTop: NavigationHeader.HEIGHT }}>
          <Feeds _handleNavigate={this._handleNavigate.bind(this)} />
        </View>
      )
      case 'about' : return (
        <View style={{ marginTop: NavigationHeader.HEIGHT }}>
          <About _goBack={this._handleBackAction.bind(this)} />
        </View>
      )
      case 'intro' : return (
        <View style={{ marginTop: NavigationHeader.HEIGHT }}>
          <Intro />
        </View>
      )
      case 'network' : return (
        <View style={{ marginTop: NavigationHeader.HEIGHT }}>
          <Network />
        </View>
      )
    }
  }
  _handleBackAction () {
    if (this.props.navigation.index === 0) {
      return false
    }
    this.props.popRoute()
    return true
  }
  _handleNavigate (action) {
    switch (action && action.type) {
      case 'push':
        this.props.pushRoute(action.route)
        return true
      case 'back':
        case 'pop':
          return this._handleBackAction()
        default:
          return false
      case 'changePanel':
        this.props.changePanel(action.index)
        return true
    }
  }
  _handlePanel(i) {
    const { changePanel } = this.props
    changePanel(i)
  }
  render () {
    return (
      <NavigationCardStack
        navigationState={this.props.navigation}
        onNavigate={this._handleNavigate.bind(this)}
        renderScene={this._renderScene}
        renderOverlay={this._renderHeader.bind(this)} />
      )
   }
}

Feed.displayName = 'Feed'
Feed.propTypes = {
  pushRoute: PropTypes.func.isRequired,
  popRoute: PropTypes.func.isRequired,
  changePanel: PropTypes.func.isRequired,
}
export default connect(
  (state) => ({
    navigation: state.feed,
    panels: state.feed
  }),
  (dispatch) => ({
    pushRoute: (route) => dispatch(actions.push(route)),
    popRoute: () => dispatch(actions.pop()),
    changePanel: (index) => dispatch(actions.changePanel(index))
  })
)(Feed)
