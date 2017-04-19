import React from 'react'
import { Text, View } from 'react-native';
import { createNavigator, createNavigationContainer, TabRouter, StackNavigator, TabNavigator, addNavigationHelpers } from 'react-navigation';
import { FeedStack, FeedDetail } from '../components/Feed'
import { Search } from '../components/SearchTab'
import { PostView } from '../components/Post'
import { ProfileStack, Profile, ProfileSetting, Project, ProjectDetail, SelfIntro } from '../components/Profile'
import CustomTabBar from './CustomTabBar'


const NotificationView = () => (
  <View style={{ flex: 1 }}>
    <Text>알림</Text>
  </View>
)

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
  Search: { screen: Search },
  Post: { screen: PostView },
  Notification: { screen: NotificationView },
	ProfileStack: { screen: ProfileStack }
}
const TabRoutes = TabRouter(Routes, { initialRouteName: 'Feed' })
const CustomTabs = createNavigationContainer(createNavigator(TabRoutes)(CustomTabView));



/*
 Profile: {
 screen: MyProfileScreen, ---> View name
 path: '/people/:name',
 navigationOptions: ({ navigation }) => {  ----> header Options and props navigation
   title: `${navigation.state.params.name}'s Profile!`
   },
 }

*/

const HeaderColor = { style: { backgroundColor: '#30333C' }, tintColor: 'white' }
const CustomTabsStack = StackNavigator({
  Root: { screen: CustomTabs },
  Detail: {
    screen: FeedDetail,
    navigationOptions: {
      title: '상세보기',
    },
  },
  Setting: {
    screen: ProfileSetting,
    navigationOptions: {
      header:{
        title: '프로필 설정하기',
        ...HeaderColor
      }
    }
  },
  SelfIntro_Setting:{ screen: SelfIntro },
  Project_Setting:{ screen: Project },
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


export default CustomTabsStack
