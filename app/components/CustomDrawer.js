import React, {Component} from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, Platform, Alert } from 'react-native'
import { connect } from 'react-redux'
import * as actions from './Join/actions'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import styles from './CustomDrawerStyle'



const SocialLists = [
  { icon: "facebook-with-circle", route:'Facebook'},
  { icon: "youtube-with-circle", route:'Youtube'},
  { icon: "flickr-with-circle", route:'Flickr'},
]


class CustomDrawer extends Component{
  isLogOut = () => {
    console.log("로그아웃")
    Alert.alert('로그아웃', '로그아웃 하시겠습니까?', [{text: '확인', onPress: () => this.props.isUserLogOut()}])
  }
  render(){
    const {navigation, routes, token, user} = this.props;
    const DrawerLists = [
      { route: 'FirstViewStack', name: '뉴스피드', icon:'ios-paper-outline' },
      { route: 'AboutStack', name: '인액터스 소개', icon:'ios-information-circle-outline' },
      { route: 'ThirdViewStack', name: '네트워크', icon:'ios-contacts' },
      { route: 'BambooStack', name: '대나무숲', icon:'ios-glasses-outline' },
      { route: 'ArchiveStack', name: '아카이브', icon:'ios-albums-outline' },
      { route: 'ContactStack', name: '문의하기', icon:'ios-help-circle-outline' },
      token
      ? { route: 'LogOut', name: '로그아웃', icon:'md-log-out'}
      : { route: 'Login', name: '로그인', icon:'md-log-in'}
    ]
    return(
        <View style={styles.drawer_Cont}>
          <View style={styles.drawer_Header}>
            <Text style={styles.drawer_Header_Font}>인액터스 커뮤니티</Text>
          </View>
          {user
            ? <View style={styles.drawer_User}>
                <Image style={styles.image} source={user.ingUrl ? '' : require('../assets/defaultUser.jpg')}/>
                <View style={{justifyContent: 'center',flexDirection: 'column', marginLeft: 15}}>
                  <Text style={{ color: '#515356', fontSize: 18, fontWeight: 'bold', paddingTop: 5, paddingBottom:5 }}>{user.name}</Text>
                  <Text style={{ color: '#A1A7AD', fontSize: 13}}>{user.univ} 인액터스</Text>
                </View>
              </View>
            : <View style={styles.drawer_User}>
                <Image style={styles.logo_image} source={require('../assets/logo-black.png')}/>
              </View>
           }

          <View style={styles.drawer_Menu}>
          {DrawerLists.map((list,i)=> (
            <TouchableOpacity
              style={styles.drawer_Lists}
              key={i} onPress={list.route === 'LogOut' ? this.isLogOut : () =>navigation.navigate(list.route)}>
              <View style={{flexDirection: 'row'}}>
                <Ionicons
                  name={list.icon}
                  size={24}
                  style={{marginRight: 10}}
                />
                <Text style={{paddingTop:5}}>{list.name}</Text>
              </View>

            </TouchableOpacity>
          ))}
          </View>
          <View style={styles.social_media}>
            <Text style={styles.social_media_text}>인액터스 소셜미디어</Text>
            <View style={styles.social_media_icons}>
              {SocialLists.map((s,i) => (
                <Entypo
                  key={i}
                  name={s.icon}
                  size={30}
                  style={styles.social_media_icon}
                  onPress={() => navigation.navigate(s.route)}
                 />
              ))}
            </View>
          </View>
        </View>
      )
  }
}

function mapStateToProps(state){
  return {
    token: state.permissions.token,
    user: state.permissions.user
  }
}

export default connect(mapStateToProps,actions)(CustomDrawer)

// export default CustomDrawer
