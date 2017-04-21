import React, {PureComponent} from 'react'
import {connect} from 'react-redux';
import { Platform, StyleSheet, Text, TouchableOpacity, View, Image, Alert } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Dimensions from 'Dimensions';

let routes = [
  {label: '피드', name: 'chrome-reader-mode', active:'chrome-reader-mode', routeName: 'Feed'},
  {label: '검색', name: 'search', active:'search', routeName: 'Search'},
  {label: '글쓰기', name: 'add-circle', active:'add-circle-outline',routeName: 'Post'},
  {label: '알림', name: 'notifications', active:'notifications-none',routeName: 'Notification'},
  {label: '마이페이지', active:'chrome-reader-mode',routeName: 'ProfileStack'}
]

class FocusedTabItem extends PureComponent{
  renderIcon = (route) => (
    <MaterialIcons
      name={route.name}
      size={24}
      style={{color: '#30333C'}} />
  )
  renderImage = (user) => (
    <Image
       style={styles.tab_focused_user_img}
       source={ user ? { uri: user } :require('../assets/defaultUser.jpg')}/>
  )
  render(){
    let { route, user } = this.props
    return(
      <View style={styles.tab}>
        {route.routeName === 'ProfileStack'
          ? this.renderImage(user)
          : this.renderIcon(route)
        }
        <Text style={styles.tabFont}>{this.props.route.label}</Text>
      </View>
    )
  }
}

class CustomTabBar extends PureComponent{
  state = {
    user: this.props.user
  }
  componentWillReceiveProps(newProps){
    this.setState({user: newProps.user})
  }
  handleNavigation = (route) => {
    let { navigation } = this.props, { user } = this.state;
    if(!((route === 'Feed') || (route ==='Search'))){
      if(!user.hasOwnProperty("email")){
        Alert.alert(
          '인액터스 회원 인증 필요',
          '로그인이 필요합니다.',
          [{text: '로그인 하기', onPress: () => navigation.navigate('Login')},{text:'확인', onPress: () => navigation.navigate('Feed')}]
        )
      } else { navigation.navigate(route)}
    } else { navigation.navigate(route)}
  }
  render(){
    let { navigation } = this.props, focused = navigation.state.index;
    return(
      <View style={styles.tabContainer}>
        {routes.map((route, i) => {
          if(route.routeName === 'ProfileStack'){
            if(focused === i) return <FocusedTabItem key={i} route={route} user={this.state.user.userImg} />
            return (
              <TouchableOpacity
                onPress={() => this.handleNavigation(route.routeName)}
                style={styles.tab}
                key={route.routeName}
              >
                <Image
                   style={styles.tab_user_img}
                   source={this.state.user.userImg ?{ uri: this.state.user.userImg } :require('../assets/defaultUser.jpg')}/>
                <Text style={styles.tabFont}>{route.label}</Text>
              </TouchableOpacity>
            )
          } else{
            if(focused === i) return<FocusedTabItem key={i} route={route} user={this.state.user.userImg} />
            return(
              <TouchableOpacity
                onPress={() => this.handleNavigation(route.routeName)}
                style={styles.tab}
                key={route.routeName}
              >
               <MaterialIcons
                 name={route.active}
                 size={24}
                 style={{color: '#dbdbdb'}} />
                <Text style={styles.tabFont}>{route.label}</Text>
              </TouchableOpacity>
            )
          }})}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  tabContainer: {
    flexDirection: 'row',
    height: 48,
    bottom: 0,
    left:0,
    width: Dimensions.get('window').width,
    position: "absolute",
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#dbdbdb",
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width/5,
  },
  tabFont:{
    fontSize: 10,
    marginTop: 3
  },
  tab_user_img:{
    width: 26,
    height: 26,
    borderRadius: 13,
    borderWidth: 0.5,
    borderColor: 'white',
  },
  tab_focused_user_img:{
    width: 26,
    height: 26,
    borderRadius: 13,
    borderWidth: 0.5,
    borderColor:'#FEC13A',
  }
});

const mapStateToProps = ({permissions}) => ({
  user: permissions.user
})

export default connect(mapStateToProps, null)(CustomTabBar)
