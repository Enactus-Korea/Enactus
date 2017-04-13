import React from 'react'
import {Platform, Button} from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Profile from './Profile'
import ProfileSetting from './ProfileSetting'
import Project from './Project'
import ProjectDetail from './ProjectDetail'
import SelfIntro from './SelfIntro'
import { StackNavigator } from 'react-navigation';
import { isModifiedIntro } from './actions'
// import { connect } from 'react-redux'

const HeaderColor = {
  style: {
    backgroundColor: '#30333C'
  },
  tintColor: 'white'
}

export default ProfileStack = StackNavigator({
  Profile: {
    screen: Profile,
    // path: '/feed',
    navigationOptions: {
      title: '프로필',
      header: ({navigate, tintColor}) =>({
        title: '프로필',
          left: <MaterialIcons
                  name="menu"
                  size={30}
                  onPress={() => navigate('DrawerOpen')}
                  style={{
                    color: 'white',
                    marginLeft: Platform.OS === 'ios' ? 10 : 0,
                   }}
                />,
          right: <MaterialIcons
                  name="settings"
                  size={20}
                  onPress={() => navigate('Setting')}
                  style={{
                    color: 'white',
                    marginRight: Platform.OS === 'ios' ? 10 : 0,
                   }}
                />,
          ...HeaderColor

      }),
    }
  }, //StackNavigator을 사용해야지 가능함
  Setting: {
    screen: ProfileSetting,
    navigationOptions: {
      header:{
        title: '프로필 설정하기',
        ...HeaderColor
      }
    }
    // path:'/feed/:id',
  },
  SelfIntro_Setting:{
    screen: SelfIntro,
  },
  Project_Setting:{
    screen: Project
  },
  Project_Detail: {
    screen: ProjectDetail,
    navigationOptions: {
      header:{
        title: '프로젝트 상세보기',
        ...HeaderColor
      }
    }
  }
});
