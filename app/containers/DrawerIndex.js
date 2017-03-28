import React, { Component } from 'react';
import { View, Text, StatusBar, TouchableOpacity, ScrollView, StyleSheet, Button, Platform } from 'react-native';
import FeedContainer from '../components/Feed/FeedContainer'
import { StackNavigator, DrawerNavigator, TabNavigator } from 'react-navigation';


const MyNavScreen = ({ navigation, banner }) => (
  <ScrollView style={styles.container}>
    <Text>{banner}</Text>
    <Button
      onPress={() => navigation.navigate('DrawerOpen')}
      title="Open drawer"
    />
    <Button
      onPress={() => navigation.goBack(null)}
      title="Go back"
    />
  </ScrollView>
);


const InboxScreen = ({ navigation }) => (
  <MyNavScreen
    banner={'Inbox Screen'}
    navigation={navigation}
		label={'Inbox'}
  />
);
InboxScreen.navigationOptions = {
	title:"인액터스 소개",
  drawer: {
    label: '인액터스 소개',
  },
};



const DraftsScreen = ({ navigation }) => (
  <MyNavScreen
    banner={'Drafts Screen'}
    navigation={navigation}
  />
);
DraftsScreen.navigationOptions = {
  drawer: {
    label: '네트워크',
  },
};

const Bamboo = ({ navigation }) => (
  <MyNavScreen
    banner={'대나무숲'}
    navigation={navigation}
  />
);
Bamboo.navigationOptions = {
  drawer: {
    label: '대나무숲',
  },
};

const Archive = ({ navigation }) => (
  <MyNavScreen
    banner={'아카이브'}
    navigation={navigation}
  />
);
Archive.navigationOptions = {
  drawer: {
    label: '아카이브',
  },
};
const Contact = ({ navigation }) => (
  <MyNavScreen
    banner={'문의하기'}
    navigation={navigation}
  />
);
Contact.navigationOptions = {
  drawer: {
    label: '문의하기',
  },
};
const Settings = ({ navigation }) => (
  <MyNavScreen
    banner={'환경설정'}
    navigation={navigation}
  />
);
Settings.navigationOptions = {
  drawer: {
    label: '환경설정',
  },
};


/*--------------Tab Comp-----------------*/
const MyTabNavScreen = ({ navigation, banner }) => (
  <ScrollView style={styles.container}>
    <Text>{banner}</Text>
    <Button
      onPress={() => navigation.navigate('Settings')}
      title="Go to settings tab"
    />
    <Button
      onPress={() => navigation.goBack(null)}
      title="Go back"
    />
  </ScrollView>
);
const MyHomeScreen = ({ navigation }) => (
  <MyTabNavScreen
    banner="뉴스피드 들어오는 자리"
    navigation={navigation}
  />
);


const HomeStack = StackNavigator({
  Home: { screen: MyHomeScreen } //StackNavigator을 사용해야지 가능함
});


export const FeedStack =  StackNavigator({
  Feed: {
    screen: FeedContainer,
    path: '/feed',
    navigationOptions: {
      title: '뉴스피드',
    }
  } //StackNavigator을 사용해야지 가능함
});

// #30333C


const MyPeopleScreen = ({ navigation }) => (
  <MyNavScreen
    banner="People Tab"
    navigation={navigation}
  />
);

MyPeopleScreen.navigationOptions = {
	title: '희안하네',
  tabBar: {
    label: '검색'
  },
};

const PeopleStack = StackNavigator({
  People: { screen: MyPeopleScreen }
});

const MyChatScreen = ({ navigation }) => (
  <MyNavScreen
    banner="Chat Tab"
    navigation={navigation}
  />
);

MyChatScreen.navigationOptions = {
  tabBar: {
    label: '글쓰기'
  },
};

const Notification = ({ navigation }) => (
  <MyNavScreen
    banner="Settings Tab"
    navigation={navigation}
  />
);

const NotiStack = StackNavigator({
  Notification: { screen: Notification }
});

const Profile = ({ navigation }) => (
  <MyNavScreen
    banner="마이페이지"
    navigation={navigation}
  />
);

const ProfileStack = StackNavigator({
  Profile: {
    screen: Profile,
    navigationOptions: {
      title: () => '마이페이지'
    }
  }
});

const TabIndex = TabNavigator({
  Feed: {
    screen: FeedStack,
    path: '/',

  },
  People: {
    screen: PeopleStack,
    path: 'cart',
  },
  Chat: {
    screen: MyChatScreen,
    path: 'chat',
  },
  Notification: {
    screen: NotiStack,
    path: 'notification',
    navigationOptions: {
      tabBar: {
        label: '알림'
      },
    }
  },
	Profile: {
    screen: ProfileStack,
    path: 'profile',
    navigationOptions: {
      tabBar: {
        label: '마이페이지'
      },
    }
  },
}, {
  tabBarOptions: {
    swipeEnabled: true,
    activeTintColor: Platform.OS === 'ios' ? '#e91e63' : '#fff',
  },
});





const DrawerIndex = DrawerNavigator({
	Feed: {
		path:'/feed',
		screen: TabIndex,
	},
  Inbox: {
    path: '/',
    screen: InboxScreen,
  },
  Drafts: {
    path: '/sent',
    screen: DraftsScreen,
  },
	Bamboo: {
    path: '/bamboo',
    screen: Bamboo,
  },
	Archive: {
    path: '/archive',
    screen: Archive,
  },
	Contact: {
    path: '/contact',
    screen: Contact,
  },
	Settings: {
    path: '/settings',
    screen: Settings,
  },

}, {
  initialRouteName: 'Feed',
  contentOptions: {
    activeTintColor: '#e91e63',
  },
});

const AppDrawer = StackNavigator({
	App: { screen: DrawerIndex }
},{
		headerMode: 'none'
});

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
  },
});


export default AppDrawer;
