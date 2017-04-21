import React, { Component } from 'react';
// import { connect } from 'react-redux'
import { View, Text, StatusBar, TouchableOpacity, Image, ScrollView, StyleSheet, WebView, Button,  Platform, Modal } from 'react-native';
import {FeedContainer, FeedDetail, Bamboo} from '../components/Feed'
import { StackNavigator, DrawerNavigator, TabNavigator} from 'react-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CustomDrawer from '../components/CustomDrawer'
import { Network, NetworkDetail } from '../components/Network'
import {Register, Login, RegisterSecond} from '../components/Join'
import WebViews from '../components/WebViews'
import Contact from '../components/Contact'

import CustomTabs from './CustomTabs'


const HeaderColor = {
  headerStyle: {
    backgroundColor: '#30333C'
  },
  headerTintColor: 'white'
}


const HeaderOptios = (navigation) => ({
    headerLeft: <MaterialIcons
            name="menu"
            size={30}
            onPress={() => navigation.navigate('DrawerOpen')}
            style={{
              color: 'white',
              marginLeft: Platform.OS === 'ios' ? 10 : 0,
             }}
          />,
    ...HeaderColor
})

const NetworkStack = StackNavigator({
  Network: {
		screen: Network,
    navigationOptions: ({navigation}) => ({
      headerTitle: '네트워크',
      ...HeaderOptios(navigation)
    })
	},
  NetworkDetail : {
    screen: NetworkDetail,
    navigationOptions: ({navigation}) => ({
      headerTitle: `${navigation.state.params.name} 프로필`,
      headerLeft: <Button title='뒤로' color='#fff' onPress={() => navigation.goBack()} />,
      ...HeaderColor
    })
  }
}, { initialRouteName: 'Network'});

const BambooStack = StackNavigator({
  Bamboo: {
		screen: Bamboo,
    navigationOptions: ({navigation}) => ({
      headerTitle: '대나무숲',
      ...HeaderOptios(navigation)
    })
	},
  BambooDetail : {
    screen: FeedDetail,
    navigationOptions: ({navigation}) => ({
      headerTitle: '상세보기',
      headerLeft: <Button title='뒤로' color='#fff' onPress={() => navigation.goBack()} />,
      ...HeaderColor
    })
  }
}, { initialRouteName: 'Bamboo'})





const Stack = {
  Contact: {
		screen: Contact,
    navigationOptions: ({navigation}) => ({
      headerTitle: '문의하기',
      ...HeaderOptios(navigation)
    })
	},
};




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
		// name: 'FeedViewStack',
		screen: CustomTabs
	},
	AboutStack: {
		// name: 'AboutStack',
		screen: ({navigation}) => <WebViews {...navigation} forUrl={'http://blog.naver.com/enactusblog/220208208280'}/>
	},
	NetworkStack: {
		// name: 'NetworkStack',
		screen: NetworkStack,
	},
  BambooStack: { //여기 이름이 router이기 때문에 이름이 중복되면 계속 stack이 쌓여서 이상해짐
    // name: 'BambooStack',
    screen: BambooStack,
  },
  ArchiveStack: {
    // name: 'ArchiveStack',
    screen: ({navigation}) => <WebViews {...navigation} forUrl={'http://enactuskorea.org/goarchive'}/>
  },
  ContactStack: {
    // name: 'ContactStack',
    screen: StackNavigator(Stack, { initialRouteName: 'Contact' }),
  },
  Login: {
    // path: '/login',
    screen: Login,
  },
  RegisterStack: {
    screen: StackNavigator(RegisterStack, { initialRouteName: 'Register' }),
  },
  Facebook: {
    // name: 'Facebook',
    screen: ({navigation}) => <WebViews {...navigation} forUrl={'https://www.facebook.com/enactuskoreapage'}/>
  },
  Youtube: {
    // name: 'Youtube',
    screen: ({navigation}) => <WebViews {...navigation} forUrl={'https://www.youtube.com/user/EnactusKorea'}/>
  },
  Flickr: {
    // name: 'Flickr',
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
});


export default RootNavigator
