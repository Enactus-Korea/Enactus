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
import {FeedContainer, FeedDetail } from '../components/Feed'
import { Search } from '../components/SearchTab'
import {PostView} from '../components/Post'
import { ProfileStack } from '../components/Profile'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const HeaderColor = {
  style: {
    backgroundColor: '#30333C'
  },
  tintColor: 'white'
}


const HeaderOptios = (navigate) => {
  return({
    left: <MaterialIcons
            name="menu"
            size={30}
            onPress={() => navigate('DrawerOpen')}
            style={{
              color: 'white',
              marginLeft: Platform.OS === 'ios' ? 10 : 0,
             }}
          />,
    ...HeaderColor
  })
}

export const FeedStack = StackNavigator({
  Feed: {
    screen: FeedContainer,
    path: '/feed',
    navigationOptions: {
      title: '피드',
      header: ({navigate, tintColor}) =>({
        title: '뉴스피드',
        ...HeaderOptios(navigate)
      }),
    }
  }, //StackNavigator을 사용해야지 가능함
});


const NotificationView = () => (
  <View style={styles.container}>
    <Text>알림</Text>
  </View>
)

const CustomTabBar = ({
  navigation,
}) => {
  const { routes } = navigation.state;
  console.log("CustomTabBar",routes );
  return (
    <View style={styles.tabContainer}>
      {routes.map(route => (
          <TouchableOpacity
            onPress={() => navigation.navigate(route.routeName)}
            style={styles.tab}
            key={route.routeName}
          >
            <Text>{route.routeName}</Text>
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
  Feed: {
    screen: FeedStack,
    path: '/',
    navigationOptions: {
      tabBar: {
        label: '피드',
        icon: ({tintColor, focused}) => (
          <MaterialIcons
            name='chrome-reader-mode'
            size={24}
            style={{ color: tintColor }}
          />
        )
      },
    }
  },
  People: {
    screen: Search,
    navigationOptions: {
      tabBar: {
        label: '검색',
        icon: ({tintColor, focused}) => (
          <MaterialIcons
            name='search'
            size={24}
            style={{ color: tintColor }}
          />
        )
      },
    }
  },
  Post: {
    screen: PostView,
  //   path: 'chat',
  //   navigationOptions : {
  //    tabBar: {
  //      label: '글쓰기',
  //      icon: ({tintColor, focused}) => {
  //        return(
  //        <MaterialIcons
  //          name={focused ?'add-circle':'add-circle-outline'}
  //          size={24}
  //          style={{ color: tintColor }}
  //        />
  //      )},
  //      visible: false
  //      // 탭이 보이지 않도록 하는 것,,,
  //    },
  //  }
  },
  Notification: {
    screen: NotificationView,
    // path: 'notification',
    // navigationOptions: {
    //   tabBar: {
    //     label: '알림',
    //     icon: ({tintColor, focused}) => (
    //       <MaterialIcons
    //         name={focused ?'notifications':'notifications-none'}
    //         size={24}
    //         style={{ color: tintColor }}
    //       />
    //     )
    //   },
    // }
  },
	ProfileStack: {
    screen: ProfileStack,
    // path: 'profile',
    // navigationOptions: {
    //   tabBar: {
    //     label: '마이페이지',
    //     icon: ({tintColor, focused}) => (
    //       <Image
    //         style={focused ? styles.tab_focused_user_img : styles.tab_user_img}
    //         source={require('../assets/defaultUser.jpg')}/>
    //     )
    //   },
    // }
  },
}



const TabRoutes = TabRouter(Routes, {
  initialRouteName: 'Feed',
  swipeEnabled: true,
  // animationEnabled: true,
  ...TabNavigator.Presets.iOSBottomTabs,
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? '#30333C' : '#fff',
    labelStyle:{
      marginBottom: 5
    },
  },
})

const CustomTabs = createNavigationContainer(createNavigator(TabRoutes)(CustomTabView));


const CustomTabsStack = StackNavigator({
  Root: {
    screen: CustomTabs,
  },
  Detail: {
    screen: FeedDetail,
    navigationOptions: {
        title: '상세보기',
      },
    // path:'/feed/:id',
  }
  // NotifSettings: {
  //   screen: MyNotificationsSettingsScreen,
  //   navigationOptions: {
  //     title: 'Notification Settings',
  //   },
  // },
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
    marginTop: Platform.OS === 'ios' ? 20 : 0,
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
    // margin: 4,
    // borderWidth: 1,
    // borderColor: '#ddd',
    // borderRadius: 4,
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
