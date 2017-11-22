import React, {PureComponent} from 'react'
import {connect} from 'react-redux';
import { Platform, StyleSheet, Text, TouchableOpacity, View, Image, Alert } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Dimensions from 'Dimensions';

let routes = [
  {label: '피드', name: 'chrome-reader-mode', active:'chrome-reader-mode', routeName: 'Feed'},
  {label: '검색', name: 'search', active:'search', routeName: 'Search'},
  {label: '글쓰기', name: 'add-circle', active:'add-circle-outline',routeName: 'Post'},
  {label: '알림', name: 'notifications', active:'notifications-none', routeName: 'Notification'},
  {label: '마이페이지', name: 'person', active:'person-outline',routeName: 'ProfileStack'}
]

class FocusedTabItem extends PureComponent {
  render(){

    let { route, user } = this.props
    return(
      <View style={styles.tab}>
        <MaterialIcons
          name={route.name}
          size={24}
          style={{color: '#30333C'}} />
        <Text style={styles.tabFont}>{route.label}</Text>
      </View>
    )
  }
}


class UnfocusedTabItem extends PureComponent {
  state = {
    notificationCount: 2,
  }
  render(){
    let { route, user , handleNavigation } = this.props
    return(
      <TouchableOpacity
        onPress={() => handleNavigation(route.routeName)}
        style={styles.tab}
        key={route.routeName}
      >
       {(route.routeName === "Notification" && this.state.notificationCount > 0) && <View style={styles.notiBadgeCont}>
         <View style={styles.notiBadge}></View>
         <Text style={styles.notiBadgeText}>{this.state.notificationCount}</Text>
       </View>}
       <MaterialIcons
         name={route.active}
         size={24}
         style={{color: '#dbdbdb'}} />
        <Text style={styles.tabFont}>{route.label}</Text>
      </TouchableOpacity>
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
    // FIXME 유저 마이페이지 user={this.state.user.userImg}
    return(
      <View style={styles.tabContainer}>
        {routes.map((route, i) =>
          focused === i
            ? <FocusedTabItem key={i} route={route} />
            : <UnfocusedTabItem key={i} route={route} handleNavigation={this.handleNavigation} notificationCount={0}/>
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  tabContainer: {
    flex: 1,
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
  },
  notiBadgeCont : {
    position: 'absolute',
    top: 3,
    right: 20,
    zIndex: 1000
  },
  notiBadge:{
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#c41e3a',
    position: 'absolute',
    top: 0,
    right: 0,
  },
  notiBadgeText: {
    width: 16,
    height: 16,
    lineHeight: 16,
    fontSize: 10,
    backgroundColor: 'transparent',
    fontWeight: '700',
    textAlign: 'center',
    color: '#fff',
    position: 'absolute',
    top: 0,
    right: 0,
  }
});

const mapStateToProps = ({permissions}) => ({
  user: permissions.user
})

export default connect(mapStateToProps, null)(CustomTabBar)
