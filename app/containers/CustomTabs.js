import React from 'react'
import { Text, View, Button, ART } from 'react-native';
import { createNavigator, createNavigationContainer, TabRouter, StackNavigator, TabNavigator, addNavigationHelpers } from 'react-navigation';
import { FeedStack, FeedDetail } from '../components/Feed'
import { Search } from '../components/SearchTab'
import { PostView } from '../components/Post'
import { ProfileStack, Profile, ProfileSetting, History, ProjectDetail, SelfIntro, ProjectSetting, ActivitySetting } from '../components/Profile'
import { NetworkDetail } from '../components/Network'
import { Notification } from '../components/Notification'
import CustomTabBar from './CustomTabBar'



// const { Surface, Group, Shape } = ART

const NotificationView = () => {
  // const y = d3.scaleLinear().domain([0,100]).range([0,640])
  // <Surface width={500} height={500}>
  //   <Group x={100} y={0}>
  //     <Shape
  //       d="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80"
  //       stroke="#000"
  //       strokeWidth={1} />
  //   </Group>
  //   <Group x={0} y={100}>
  //     <Shape
  //       d="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80"
  //       stroke="#000"
  //       strokeWidth={1} />
  //   </Group>
  // </Surface>
  return(
  <View style={{ flex: 1 }}>
    <View>

    </View>
  </View>
)}

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

const HeaderColor = { headerStyle: { backgroundColor: '#30333C' }, headerTintColor: 'white' }
const CustomTabsStack = StackNavigator({
  Root: { screen: CustomTabs },
  Detail: { screen: FeedDetail },
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
