import React from 'react'
import { Text, View, Button, ART } from 'react-native';
import { createNavigator, createNavigationContainer, TabRouter, StackNavigator, TabNavigator, addNavigationHelpers } from 'react-navigation';
import { FeedStack, FeedDetail, FeedSlideDetail } from '../components/Feed'
import { Search } from '../components/SearchTab'
import { PostView } from '../components/Post'
import { ProfileStack, Profile, ProfileSetting, History, ProjectDetail, SelfIntro, ProjectSetting, ActivitySetting } from '../components/Profile'
import { NetworkDetail } from '../components/Network'
import { Notification } from '../components/Notification'
import CustomTabBar from './CustomTabBar'


const CustomTabView = ({
  router,
  navigation,
}) => {
  const { routes, index } = navigation.state;
  const ActiveScreen = router.getComponentForState(navigation.state);
  return (
    <View style={{ flex: 1 }}>
      <ActiveScreen
        navigation={addNavigationHelpers({
          ...navigation,
          state: routes[index],
          visible: true,
        })}
      />
      <CustomTabBar navigation={navigation} />
    </View>
  );
};


const Routes = {
  Feed: { screen: FeedStack },
  Search: {screen: Search },
  Post: { screen: PostView },
  Notification: {
    screen: Notification,
    navigationOptions: ({navigation}) => ({
      headerTitle: '알림',
      ...HeaderColor
    })
  },
	ProfileStack: { screen: ProfileStack }
}
const CustomTabRoutes = TabRouter(Routes, { initialRouteName: 'Feed' })
const CustomTabs = createNavigationContainer(createNavigator(CustomTabRoutes)(CustomTabView));

/*
 Profile: {
 screen: MyProfileScreen, ---> View name
 path: '/people/:name',
 navigationOptions: ({ navigation }) => {  ----> header Options and props navigation
   title: `${navigation.state.params.name}'s Profile!`
   },
 }

*/

// Main NAV 설정 부분

const HeaderColor = { headerStyle: { backgroundColor: '#30333C' }, headerTintColor: 'white' }
const CustomTabsStack = StackNavigator({
  Root: { screen: CustomTabs },
  Detail: { screen: FeedDetail },
  SlideDetail: {
    screen: FeedSlideDetail,
    navigationOptions: ({navigation}) => ({
      headerTitle: '공지사항',
      ...HeaderColor
    })
  },
  SearchFeedDetail: { screen: FeedDetail },
  CommentUserDetail : {
    screen: NetworkDetail,
    navigationOptions: ({navigation}) => ({
      headerTitle: `${navigation.state.params.name} 프로필`,
      headerLeft: <Button title='뒤로' color='#fff' onPress={() => navigation.goBack()} />,
      ...HeaderColor
    })
  },
  SearchUserDetail : {
    screen: NetworkDetail,
    navigationOptions: ({navigation}) => ({
      headerTitle: `${navigation.state.params.name} 프로필`,
      headerLeft: <Button title='뒤로' color='#fff' onPress={() => navigation.goBack()} />,
      ...HeaderColor
    })
  },
  Setting: {
    screen: ProfileSetting,
    navigationOptions: ({navigation}) => ({
      headerTitle: '프로필 설정하기',
      ...HeaderColor
    })
  },
  SelfIntro_Setting:{ screen: SelfIntro },
  History_Setting:{ screen: History },
  Project_Setting:{
    screen: ProjectSetting,
    navigationOptions: ({navigation}) => ({
      headerTitle: '프로젝트 상세보기',
      ...HeaderColor
    })
   },
  Activity_Setting:{
    screen: ActivitySetting,
    navigationOptions: ({navigation}) => ({
      headerTitle: '프로젝트 상세보기',
      ...HeaderColor
    })
   },
  Project_Detail: {
    screen: ProjectDetail,
    navigationOptions: ({navigation}) => ({
      headerTitle: '프로젝트 상세보기',
      ...HeaderColor
    })
  }
},{ initialRouteName: 'Root', headerMode:'screen' });


export default CustomTabsStack
