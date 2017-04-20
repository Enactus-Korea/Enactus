import React from 'react'
import {Platform, Button} from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Profile from './Profile'
// import ProfileSetting from './ProfileSetting'
// import Project from './Project'
// import ProjectDetail from './ProjectDetail'
// import SelfIntro from './SelfIntro'
import { StackNavigator } from 'react-navigation';
import { isModifiedIntro } from './actions'
// import { connect } from 'react-redux'


export default ProfileStack = StackNavigator({
  Profile: {
    screen: Profile,
    // path: '/feed',
    navigationOptions: ({navigation}) => ({
      headerTitle: '프로필',
      headerLeft: <MaterialIcons
                    name="menu"
                    size={30}
                    onPress={() => navigation.navigate('DrawerOpen')}
                    style={{
                      color: 'white',
                      marginLeft: Platform.OS === 'ios' ? 10 : 0,
                     }}
                  />,
      headerRight: <MaterialIcons
                      name="settings"
                      size={20}
                      onPress={() => navigation.navigate('Setting')}
                      style={{
                        color: 'white',
                        marginRight: Platform.OS === 'ios' ? 10 : 0,
                       }}
                    />,
      headerStyle:{
        backgroundColor: '#30333C'
      },
      headerTintColor: 'white'
    })
  }, //StackNavigator을 사용해야지 가능함

});
