'use strict';

import React, { Component } from 'react'
import { View, ScrollView, Navigator, TouchableOpacity, StyleSheet, Text, TouchableHighlight, Modal, Image } from 'react-native';
import { bindActionCreators } from 'redux'
import * as actions from '../actions/actions'
import { connect } from 'react-redux'
import Nav from "./global_widgets/nav"
import Drawer from 'react-native-drawer'
import ControlPanel from './controlPanel'
import Icon from 'react-native-vector-icons/Ionicons'
import Tabbar from 'react-native-tabbar'
import DeviceInfo from 'react-native-device-info'
import Dimensions from 'Dimensions';
import Home from './home';
import Network from './network';
import {Search} from './search';
import Notification from './notification';
import {Post, PostCamera } from './post'
import User from './user'
import {Login, Register} from './register'
import {Feed, Unknown }from './feed'
import Detail from './detail/index'
import SafariView from 'react-native-safari-view'
const {width, height} = Dimensions.get('window')

var drawerRef = {
  close: () => console.log("close"),
  open: () => console.log("open"),
}

class Root extends Component {
  constructor(props) {
    super(props);
    this.tabarRef = null
    this.state = {
      tab: 'feed',
      modalVisible: false
    }
  }

  async getUser() {
    try {
      if(this.props.state.userDatas.userEmail.length > 0) {
        let response = await fetch('http://localhost:9000/user/login',{
          method: 'POST',
          headers:
            {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
          body: JSON.stringify({
            userEmail: this.props.state.userDatas.useremail,
            password: this.state.password
          })
        })
        let user = await response.json().user;
        if(user != null) {
          return this.props.actions.getUserInfo(user);
        }
      }
    } catch(errors) {
      let formErrors = JSON.parse(errors);
      console.log(formErrors)
    }
  }

  componentWillMount() {
    this.getUser();
  }

  componentDidMount(){
    drawerRef = this.refs.drawer;
    this.dismissSubscription = () => {
      console.log("SafariView onDismiss");
      this.props.state.navigator.replace({id:'home'})
    };
    SafariView.addEventListener("onDismiss", this.dismissSubscription);
  }

  closeControlPanel (){
    drawerRef.close()
  }

  openControlPanel(){
    drawerRef.open()
  }

  onTabSelect(tab) {
    this.setState({ tab })
  }

  setModalVisible(visible) {
    // post.js에서 param이 넘어올 때, bind(this)에 담겨서 넘어온다.
    this.setState({modalVisible: visible});
  }

  renderModal() {
    return(
      <Modal
        animationType={"slide"}
        transparent={false}
        visible={this.state.modalVisible}
        onRequestClose={() => {alert("Modal has been closed.")}}
        >
        <Post
          {...this.props}
          setModalVisible={this.setModalVisible.bind(this)}/>
      </Modal>
    )
  }

  renderTabs() {
    return (
      <View style={{ flex: 1, flexDirection: 'row', borderTopWidth: 1, borderTopColor: '#E9EAED' }}>
        <TouchableOpacity style={styles.tabItem} onPress={() => this.setModalVisible(true)}>
          <Icon name ='ios-create-outline' size={20} color="#333"/>
          <Text>글쓰기</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={() => this.onTabSelect('search')}>
          <Icon name ='ios-search-outline' size={20} color="#333"/>
          <Text>검색</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}  onPress={() => this.onTabSelect('feed')}>
          <Icon name ='ios-paper-outline' size={20} color="#333"/>
          <Text>피드</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={() => this.onTabSelect('notification')} >
          <Icon name ='ios-notifications-outline' size={20} color="#333"/>
          <Text>알림</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}  onPress={() => this.onTabSelect('user')}>
          <Image style={styles.tabUser} source={require('../assets/user.png')}/>
        </TouchableOpacity>
      </View>
    )
  }
  _pressIntro() {
    SafariView.isAvailable()
      .then(SafariView.show({
        url: "http://blog.naver.com/enactusblog/220208208280"
      }))
      .catch(error => {
        // Fallback WebView code for iOS 8 and earlier
      });
  }
  _pressArchive() {
    SafariView.isAvailable()
      .then(SafariView.show({
        url: "http://enactuskorea.org/goarchive"
      }))
      .catch(error => {
        // Fallback WebView code for iOS 8 and earlier
      });
  }
  renderScene(route, navigator) {
    var {state,actions} = this.props;
    var routeId = route.id;

    if (routeId === 'home') {
      return (
        <View>
        <ScrollView style={{width: width, height:height-40}}>
          <Home
          {...this.props}
          name={this.props}
          pop = {() => this.refs.NAV}
          userData ={route.userData}
          close = {() => this.closeControlPanel()}
          navigator={navigator}
          renderContent={this.renderContent()} />
        </ScrollView>
        <Tabbar
          show={true}
          disable={false}
          ref={(ref) => this.tabarRef = ref}
          style={{ backgroundColor: 'white', height:40, width:width }}>
          {this.renderTabs()}
        </Tabbar>
        </View>
      );
    }
    if (routeId === 'intro') {
    return (
        this._pressIntro()
      );
    }
    if (routeId === 'archive') {
    return (
        this._pressArchive()
      );
    }
    if (routeId === 'network') {
      return (
        <ScrollView>
          <Nav {...this.props} pop = {() => this.refs.NAV} name={this.props} onPress = {() => this.openControlPanel()}  />
          <Network
            {...this.props}
            data ={route.data}
            close = {() => this.closeControlPanel()}
            navigator={navigator} />
        </ScrollView>
      );
    }
    if (routeId === 'launchcamera') {
      return (
        <PostCamera
          {...this.props}
          close = {() => this.closeControlPanel()}
          navigator={navigator} />
      );
    }
    // if (routeId === 'notification') {
    //   return (
    //     <Notification
    //       {...this.props}
    //       data ={route.data}
    //       close = {() => this.closeControlPanel()}
    //       navigator={navigator} />
    //   );
    // }
    if (routeId === 'login') {
      return (
        <Login
          {...this.props}
          close = {() => this.closeControlPanel()}
          navigator={navigator}
        />
      );
    }
    if (routeId === 'register') {
      return (
        <Register
          {...this.props}
          navigator={navigator} />
      );
    }
    if (routeId === 'unknown') {
      return (
        <ScrollView>
        <Nav {...this.props} pop = {() => this.refs.NAV} name={this.props} onPress = {() => this.openControlPanel()}  />
          <Unknown
            {...this.props}
            close = {() => this.closeControlPanel()}
            navigator={navigator}
          />
        </ScrollView>
      );
    }
    if (routeId === 'detail') {
      return (
        <View>
          <Nav {...this.props} pop = {() => this.refs.NAV} name={this.props} onPress = {() => this.openControlPanel()}  />
          <Detail
            {...this.props}
            data ={route.data}
            close = {() => this.closeControlPanel()}
            navigator={navigator} />
        </View>
      );
    }

  }

  renderContent() {
    const { state, actions } = this.props;
    const { tab } = this.state;
    if ( tab === 'feed') {
      return (
        <View>
          <Nav {...this.props} pop = {() => this.refs.NAV} name={this.props} onPress = {() => this.openControlPanel()}  />
          <Feed
            {...this.props}
            close = {() => this.closeControlPanel()}
            navigator={navigator}/>
        </View>
      )
    } else if ( tab === 'post') {
      return (
        <Post {...this.props} />
      )
    } else if ( tab === 'user') {
      return (
        <User />
      )
    } else if ( tab === 'search') {
      return (
        <Search />
      )
    } else if ( tab === 'notification') {
      return (
        <Notification />
      )
    }
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
          content={<ControlPanel {...this.props} onPress = {() => this.closeControlPanel()}/>}>
           <Navigator
           style={{flex: 1}}
           ref={'NAV'}
           initialRoute={{id: 'home', name: 'home'}}
           renderScene={this.renderScene.bind(this)}
           configureScene={(route, routeStack) =>
             Navigator.SceneConfigs.HorizontalSwipeJump}/>
           {this.renderModal()}
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
    height:1000
  },
  tabItem: {
    width: Dimensions.get('window').width/5,
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  tabUser:{
    width: 35,
    height: 35,
    borderRadius: 18,
    borderWidth: 0.2,
    borderColor: 'lightgray',
  },
})

export default connect(state => ({
  state: state.airbnb
}),
(dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
})
)(Root);
