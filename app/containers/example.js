import React, { Component } from 'react';
// import { connect } from 'react-redux'
import { View, Text, StatusBar, TouchableOpacity, Image, ScrollView, StyleSheet, WebView, Button,  Platform, Modal } from 'react-native';
import {FeedContainer, FeedDetail, Bamboo} from '../components/Feed'
import { StackNavigator, DrawerNavigator, TabNavigator} from 'react-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CustomDrawer from '../components/CustomDrawer'
import {PostView} from '../components/Post'
import { Network, NetworkDetail } from '../components/Network'
import { Search } from '../components/SearchTab'
import {Register, Login, RegisterSecond} from '../components/Join'
import WebViews from '../components/WebViews'
import Contact from '../components/Contact'
import { ProfileStack } from '../components/Profile'


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


const NotificationView = () => (
  <View style={styles.container}>
    <Text>알림</Text>
  </View>
)

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
  Detail: {
    screen: FeedDetail,
    // path:'/feed/:id',
  }
});

const NetworkStack = StackNavigator({
  Network: {
		screen: Network,
    navigationOptions: {
      header: ({navigate}) =>({
        title: '네트워크',
        ...HeaderOptios(navigate)
      }),
    }
	},
  NetworkDetail : {
    screen: NetworkDetail,
    navigationOptions: {
      header: ({navigate}) =>({
        title: '상세보기',
        ...HeaderColor
      }),
    }
  }
}, { initialRouteName: 'Network'});

const BambooStack = StackNavigator({
  Bamboo: {
		screen: Bamboo,
    navigationOptions: {
      header: ({navigate}) =>({
        title: '대나무숲',
        ...HeaderOptios(navigate)
      }),
    }
	},
  Detail : {
    screen: FeedDetail,
    navigationOptions: {
      header: ({navigate}) =>({
        title: '상세보기',
        ...HeaderColor
      }),
    }
  }
}, { initialRouteName: 'Bamboo'})

const Tab = {
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
    path: 'chat',
    navigationOptions : {
     tabBar: {
       label: '글쓰기',
       icon: ({tintColor, focused}) => {
         return(
         <MaterialIcons
           name={focused ?'add-circle':'add-circle-outline'}
           size={24}
           style={{ color: tintColor }}
         />
       )},
       visible: false
       // 탭이 보이지 않도록 하는 것,,,
     },
   }
  },
  Notification: {
    screen: NotificationView,
    path: 'notification',
    navigationOptions: {
      tabBar: {
        label: '알림',
        icon: ({tintColor, focused}) => (
          <MaterialIcons
            name={focused ?'notifications':'notifications-none'}
            size={24}
            style={{ color: tintColor }}
          />
        )
      },
    }
  },
	ProfileStack: {
    screen: ProfileStack,
    // path: 'profile',
    navigationOptions: {
      tabBar: {
        label: '마이페이지',
        icon: ({tintColor, focused}) => (
          <Image
            style={focused ? styles.tab_focused_user_img : styles.tab_user_img}
            source={require('../assets/defaultUser.jpg')}/>
        )
      },
    }
  },
}




const Stack = {
  Contact: {
		screen: Contact,
    navigationOptions: {
      header: ({navigate}) =>({
        title: '문의하기',
        ...HeaderOptios(navigate)
      }),
    }
	},
};

const TabRoutes = TabNavigator(Tab, {
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



const RegisterStack = {
  Register: {
		screen: Register,
	},
  RegisterSecond: {
		screen: RegisterSecond,
	},
}

const DrawerRoutes = {
	FeedViewStack: {
		name: 'FeedViewStack',
		screen: TabRoutes
	},
	AboutStack: {
		name: 'AboutStack',
		screen: ({navigation}) => <WebViews {...navigation} forUrl={'http://blog.naver.com/enactusblog/220208208280'}/>
	},
	NetworkStack: {
		name: 'NetworkStack',
		screen: NetworkStack,
    // screen: StackNavigator(Stack, { initialRouteName: 'Network'}),
	},
  BambooStack: { //여기 이름이 router이기 때문에 이름이 중복되면 계속 stack이 쌓여서 이상해짐
    name: 'BambooStack',
    screen: BambooStack,
  },
  ArchiveStack: {
    name: 'ArchiveStack',
    screen: ({navigation}) => <WebViews {...navigation} forUrl={'http://enactuskorea.org/goarchive'}/>
  },
  ContactStack: {
    name: 'ContactStack',
    screen: StackNavigator(Stack, { initialRouteName: 'Contact' }),
  },
  Login: {
    path: '/login',
    screen: Login,
  },
  RegisterStack: {
    screen: StackNavigator(RegisterStack, { initialRouteName: 'Register' }),
  },
  Facebook: {
    name: 'Facebook',
    screen: ({navigation}) => <WebViews {...navigation} forUrl={'https://www.facebook.com/enactuskoreapage'}/>
  },
  Youtube: {
    name: 'Youtube',
    screen: ({navigation}) => <WebViews {...navigation} forUrl={'https://www.youtube.com/user/EnactusKorea'}/>
  },
  Flickr: {
    name: 'Flickr',
    screen: ({navigation}) => <WebViews {...navigation} forUrl={'https://www.flickr.com/photos/enactuskorea'}/>
  },
};


const RootNavigator = StackNavigator({
		Drawer: {
			name: 'Drawer',
			screen: DrawerNavigator(
				DrawerRoutes,
        {
          contentComponent: (props) => (<CustomDrawer navigation={props.navigation} routes={DrawerRoutes}/>)
        }
			),
		},
		...Stack,
	},
		{
			headerMode: 'none',
		}
	);

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
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


export default RootNavigator
