import React from 'react'
import {
  Button,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal
} from 'react-native';
import Dimensions from 'Dimensions';
import {
  createNavigator,
  createNavigationContainer,
  TabRouter,
  StackNavigator,
  TabNavigator,
  addNavigationHelpers
} from 'react-navigation';
import { FeedStack, FeedDetail } from '../components/Feed'
import { Search } from '../components/SearchTab'
import { PostView } from '../components/Post'
import { ProfileStack, Profile, ProfileSetting, Project, ProjectDetail, SelfIntro } from '../components/Profile'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const NotificationView = () => (
  <View style={styles.container}>
    <Text>알림</Text>
  </View>
)

const CustomTabBar = ({
  navigation
}) => {
  let routes = [
    {label: '피드', name: 'chrome-reader-mode', active:'chrome-reader-mode', routeName: 'Feed'},
    {label: '검색', name: 'search', active:'search', routeName: 'Search'},
    {label: '글쓰기', name: 'add-circle', active:'add-circle-outline',routeName: 'Post'},
    {label: '알림', name: 'notifications', active:'notifications-none',routeName: 'Notification'},
    {label: '마이페이지', name: 'chrome-reader-mode', active:'chrome-reader-mode',routeName: 'ProfileStack'}
  ],
      focused = navigation.state.index;

  return (
    <View style={styles.tabContainer}>
      {routes.map((route, i) => (
          <TouchableOpacity
            onPress={() => navigation.navigate(route.routeName)}
            style={styles.tab}
            key={route.routeName}
          >
           <MaterialIcons
             name={focused === i ? route.name : route.active}
             size={24}
             style={focused === i ? {color: '#30333C'} : {color: '#dbdbdb'}} />
            <Text style={styles.tabFont}>{route.label}</Text>
          </TouchableOpacity>
        ))}
    </View>
  );
}

const CustomTabView = ({
  router,
  navigation,
}) => {
  const { routes, index } = navigation.state;
  const ActiveScreen = router.getComponentForState(navigation.state);
  return (
    <View style={styles.container}>
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


const HeaderColor = { style: { backgroundColor: '#30333C' }, tintColor: 'white' }
const CustomTabsStack = StackNavigator({
  Root: {
    screen: CustomTabs,
  },
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
  // Profile: {
  //   screen: MyProfileScreen,
  //   path: '/people/:name',
  //   navigationOptions: ({ navigation }) => {
  //     title: `${navigation.state.params.name}'s Profile!`
  //   },
  // },
});

const styles = StyleSheet.create({
  container: {
    // marginTop: Platform.OS === 'ios' ? 20 : 0,
    flex: 1,
  },
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
  }
});

export default CustomTabsStack





// const TabRoutes = TabNavigator(Tab, {
//   initialRouteName: 'Feed',
//   swipeEnabled: true,
//   // animationEnabled: true,
//   ...TabNavigator.Presets.iOSBottomTabs,
//   tabBarOptions: {
//     activeTintColor: Platform.OS === 'ios' ? '#30333C' : '#fff',
//     labelStyle:{
//       marginBottom: 5
//     },
//   },
// })

//
// const Tab = {
//   Feed: {
//     screen: FeedStack,
//     path: '/',
//     navigationOptions: {
//       tabBar: {
//         label: '피드',
//         icon: ({tintColor, focused}) => (
//           <MaterialIcons
//             name='chrome-reader-mode'
//             size={24}
//             style={{ color: tintColor }}
//           />
//         )
//       },
//     }
//   },
//   People: {
//     screen: Search,
//     navigationOptions: {
//       tabBar: {
//         label: '검색',
//         icon: ({tintColor, focused}) => (
//           <MaterialIcons
//             name='search'
//             size={24}
//             style={{ color: tintColor }}
//           />
//         )
//       },
//     }
//   },
//   Post: {
//     screen: PostView,
//     path: 'chat',
//     navigationOptions : {
//      tabBar: {
//        label: '글쓰기',
//        icon: ({tintColor, focused}) => {
//          return(
//          <MaterialIcons
//            name={focused ?'add-circle':'add-circle-outline'}
//            size={24}
//            style={{ color: tintColor }}
//          />
//        )},
//        visible: false
//        // 탭이 보이지 않도록 하는 것,,,
//      },
//    }
//   },
//   Notification: {
//     screen: NotificationView,
//     path: 'notification',
//     navigationOptions: {
//       tabBar: {
//         label: '알림',
//         icon: ({tintColor, focused}) => (
//           <MaterialIcons
//             name={focused ?'notifications':'notifications-none'}
//             size={24}
//             style={{ color: tintColor }}
//           />
//         )
//       },
//     }
//   },
// 	ProfileStack: {
//     screen: ProfileStack,
//     // path: 'profile',
//     navigationOptions: {
//       tabBar: {
//         label: '마이페이지',
//         icon: ({tintColor, focused}) => (
//           <Image
//             style={focused ? styles.tab_focused_user_img : styles.tab_user_img}
//             source={require('../assets/defaultUser.jpg')}/>
//         )
//       },
//     }
//   },
// }
