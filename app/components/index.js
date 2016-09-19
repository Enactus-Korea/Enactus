'use strict';

import React, { Component } from 'react';
import { View, Navigator, TouchableOpacity, StyleSheet, Text } from 'react-native';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/actions';
import { connect } from 'react-redux';
import Nav from "./global_widgets/nav"
import Drawer from 'react-native-drawer'
import ControlPanel from './controlPanel'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Tabbar from 'react-native-tabbar'

import Home from './home';
import Intro from './intro';
import Network from './network';
import Search from './search';
import Notification from './notification';


// import Convo from './each_convo';
// import Inbox from './inbox';
// import Invite from './invite';
// import Profile from './profile';
// import Settings from './settings';
// import Search from './search';
// import Trips from './trips';
// import Wish from './wish';
// import EachCity from './each_city';

var drawerRef = {
  close: () => console.log("close"),
  open: () => console.log("open"),

}


connect(state => ({
 state: state.seven
}));

class Root extends Component {
  constructor(props) {
    super(props);
    this.tabarRef = null
    this.state = {
      tab: 'item1'
    }
  }

  componentDidMount(){
    drawerRef = this.refs.drawer;
  }
  closeControlPanel(){
    drawerRef.close()
  }
  openControlPanel(){
    drawerRef.open()
  }
  onTabSelect(tab) {
    this.setState({ tab })
  }
  renderTabs() {
    return (
      <View style={{ flex: 1, flexDirection: 'row', borderTopWidth: 1, borderTopColor: 'green' }}>
        <TouchableOpacity style={styles.tabItem} onPress={() => this.onTabSelect('item1')}>
          <View>
            <Text>Item 1</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}  onPress={() => this.onTabSelect('item2')}>
          <View>
            <Text>Item 2</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}  onPress={() => this.onTabSelect('item3')}>
          <View>
            <Text>Item 3</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
  renderContent() {
    const { tab } = this.state
    let content
    switch(tab) {
      case 'item1':
        content = <Text>This is the content 1</Text>
        break
      case 'item2':
        content = <Text>This is the content 2</Text>
        break
      case 'item3':
        content = <Text>This is the content 3</Text>
        break
    }

    return content
  }

  renderScene(route, navigator) {
    var {state,actions} = this.props;
    var routeId = route.id;

    if (routeId === 'home') {
      return (
        <View>
          <Nav {...this.props} pop = {() => this.refs.NAV} name={this.props} onPress = {() => this.openControlPanel()}  />
          <Home
          {...this.props}
          userData ={route.userData}
          close = {() => this.closeControlPanel()}
          navigator={navigator}
          renderContent={this.renderContent()} />
          <Tabbar show={true}
                disable={false}
                ref={(ref) => this.tabarRef = ref}
                style={{ backgroundColor: 'red' }}>
            {this.renderTabs()}
          </Tabbar>
        </View>
      );
    }
      if (routeId === 'intro') {
      return (
        <View>
          <Nav {...this.props} pop = {() => this.refs.NAV} name={this.props} onPress = {() => this.openControlPanel()}  />
          <Intro
          {...this.props}
          data ={route.data}
          close = {() => this.closeControlPanel()}
          navigator={navigator} />
        </View>
        );
    }
    if (routeId === 'network') {
      return (
        <View>
          <Nav {...this.props} pop = {() => this.refs.NAV} name={this.props} onPress = {() => this.openControlPanel()}  />
          <Network
              {...this.props}
              data ={route.data}
              close = {() => this.closeControlPanel()}
              navigator={navigator} />
        </View>

      );
    }
    if (routeId === 'search') {
      return (

          <Search
              {...this.props}
              data ={route.data}
              close = {() => this.closeControlPanel()}
              navigator={navigator} />

      );
    }
    if (routeId === 'notification') {
      return (
        <Notification
            {...this.props}
            data ={route.data}
            close = {() => this.closeControlPanel()}
            navigator={navigator} />

      );
    }
    // if (routeId === 'inbox') {
    //   return (
    //       <Inbox
    //           {...this.props}
    //           data ={route.data}
    //           close = {() => this.closeControlPanel()}
    //           navigator={navigator} />
    //   );
    // }
    // if (routeId === 'convo') {
    //   return (
    //       <Convo
    //           {...this.props}
    //           data ={route.data}
    //           close = {() => this.closeControlPanel()}
    //           navigator={navigator} />
    //   );
    // }
    // if (routeId === 'wish') {
    //   return (
    //     <Wish
    //     {...this.props}
    //     data ={route.data}
    //     close = {() => this.closeControlPanel()}
    //     navigator={navigator} />
    //     );
    // }
    //
    // if (routeId === 'settings') {
    //   return (
    //     <Settings {...this.props}
    //     close = {() => this.closeControlPanel()}
    //     navigator={navigator} />
    //     );
    // }
    // if (routeId === 'trips') {
    //   return (
    //     <Trips {...this.props}
    //     close = {() => this.closeControlPanel()}
    //     navigator={navigator} />
    //     );
    // }
    // if (routeId === 'search') {
    //   return (
    //     <Search {...this.props}
    //     close = {() => this.closeControlPanel()}
    //     navigator={navigator} />
    //     );
    // }
  }


  render() {
    const { state, actions } = this.props;
    console.log(this.props)
    return (

      <View style ={{flex:1}}>
       <Drawer
        ref = "drawer"
        tapToClose={true}
        type="overlay"
        tapToClose={true}
        openDrawerOffset={0.2}
        panCloseMask={0.2}
        content={<ControlPanel {...this.props} onPress = {() => this.closeControlPanel()}/>}
        >
       <Navigator
       style={{flex: 1}}
       ref={'NAV'}
       initialRoute={{id: 'home', name: 'home'}}
       renderScene={this.renderScene.bind(this)}/>
     </Drawer>
     </View>
     );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  scrollViewContainer: {
    height: 1000,
  },
  scrollView: {
    backgroundColor: 'yellow'
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default connect(state => ({
  state: state.airbnb
}),
(dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
})
)(Root);
