import React, { Component } from 'react';
import { connect } from 'react-redux'
import { View, Text, StatusBar, TouchableOpacity, ScrollView, StyleSheet, Button, TabBarIOS, NavigationExperimental, Platform } from 'react-native';
// import First from './First'
// import Second from './Second'
// import Third from './Third'
import Modal from './Modal'
// import { navigatePop } from '../actions'
// import Components from '../components/index';

import { StackNavigator, TabNavigator } from 'react-navigation';

// const {
// 	Transitioner: NavigationTransitioner,
// 	Card: NavigationCard,
// 	Header: NavigationHeader
// } = NavigationExperimental

// class Index extends Component {
//   state = {
//       selectedTab: 'redTab',
//       notifCount: 0,
//       presses: 0,
//   };
//   _renderContent = (color: string, pageText: string, num?: number) => {
//     return (
//       <View style={[styles.tabContent, {backgroundColor: color}]}>
//         <Text style={styles.tabText}>{pageText}</Text>
//         <Text style={styles.tabText}>{num} re-renders of the {pageText}</Text>
//       </View>
//     );
//   };
//   _renderScene({scene}) {
//     const { route } = scene
//
//     switch(route.key) {
//     case 'First':
//       return <First />
//     case 'Second':
//       return <Second />
//     case 'Third':
//       return <Third />
//     case 'Modal':
//       return <Modal />
//     }
//   }
//   render() {
//     let { navigationState, backAction } = this.props
//     return (
//       <TabBarIOS
//         unselectedTintColor="yellow"
//         tintColor="white"
//         unselectedItemTintColor="red"
//         barTintColor="darkslateblue">
//         <TabBarIOS.Item
//          title="1 Tab"
//          selected={this.state.selectedTab === 'blueTab'}
//          onPress={() => {
//            this.setState({
//              selectedTab: 'blueTab'
//            });
//          }}>
//          {this._renderContent('#414A8C', 'Blue Tab')}
//        </TabBarIOS.Item>
//        <TabBarIOS.Item
//           systemIcon="history"
//           badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
//           //새글 올라올 때마다 뱃지해주면 되겠다.
//           badgeColor="black"
//           selected={this.state.selectedTab === 'redTab'}
//           onPress={() => {
//             this.setState({
//               selectedTab: 'redTab',
//               notifCount: this.state.notifCount + 1,
//             });
//           }}>
//
//           {this._renderContent('#783E33', 'Red Tab', this.state.notifCount)}
//         </TabBarIOS.Item>
//         <TabBarIOS.Item
//           // icon={require('./flux.png')}
//           // selectedIcon={require('./relay.png')}
//           renderAsOriginal
//           title="More"
//           selected={this.state.selectedTab === 'greenTab'}
//           onPress={() => {
//             this.setState({
//               selectedTab: 'greenTab',
//               presses: this.state.presses + 1
//             });
//           }}>
//           {this._renderContent('#21551C', 'Green Tab', this.state.presses)}
//         </TabBarIOS.Item>
//       </TabBarIOS>
//     )
//   }
// }

class ChatScreen extends Component {
	static navigationOptions = {
		header: {
			right: <Button title='info'/>
		},
		title: ({state}) => `Chat with ${state.params.user}`
	}
	render() {
		const {params} = this.props.navigation.state;
		return(
			<View>
				<Text>대화하쟝쟝쟝 {params.user}</Text>
				<Text>{params.years}</Text>
				<Text>{params.sex}</Text>
			</View>
		)
	}
}
class HomeScreen extends Component {
  static navigationOptions = {
    title: 'cathylee',
  };
  render() {
		const { navigate } = this.props.navigation;
    return (
			<View>
				<Text>Hello, Navigation!</Text>
				<Button
					onPress={() => navigate('Chat', {
						user:'cathy',
						years: '27',
						sex: 'female'
					})}
					title="Chat"
				/>
			</View>

		);
  }
}

// const Index = StackNavigator({
//   Home: { screen: HomeScreen },
// 	Chat: { screen: ChatScreen },
// });

// class RecentChat extends Component {
// 	render(){
// 		return <Text>List of chat</Text>
// 	}
// }
//
// class AllContact extends Component {
// 	render(){
// 		return (
// 			<View>
// 				<Text>all Contact</Text>
// 				<Button
// 					onPress={() => this.props.navigation.navigate('Chat', {user:'cathy'})}
// 					title="chat with cathy"
// 				/>
// 			</View>
//
// 		)
// 	}
// }

const MyNavScreen = ({ navigation, banner }) => (
  <ScrollView style={styles.container}>
    <Text>{banner}</Text>
    <Button
      onPress={() => navigation.navigate('Home')}
      title="Go to home tab"
    />
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
  <MyNavScreen
    banner="Home Tab"
    navigation={navigation}
  />
);

MyHomeScreen.navigationOptions = {
  tabBar: {
    label: 'Home',
    // icon: ({ tintColor, focused }) => (
    //   <Ionicons
    //     name={focused ? 'ios-home' : 'ios-home-outline'}
    //     size={26}
    //     style={{ color: tintColor }}
    //   />
    // ),
  },
};

const MyPeopleScreen = ({ navigation }) => (
  <MyNavScreen
    banner="People Tab"
    navigation={navigation}
  />
);

MyPeopleScreen.navigationOptions = {
  tabBar: {
    label: 'People',
    // icon: ({ tintColor, focused }) => (
    //   <Ionicons
    //     name={focused ? 'ios-people' : 'ios-people-outline'}
    //     size={26}
    //     style={{ color: tintColor }}
    //   />
    // ),
  },
};



const MyChatScreen = ({ navigation }) => (
  <MyNavScreen
    banner="Chat Tab"
    navigation={navigation}
  />
);

MyChatScreen.navigationOptions = {
  tabBar: {
    label: 'Chat'
    // icon: ({ tintColor, focused }) => (
    //   <Ionicons
    //     name={focused ? 'ios-chatboxes' : 'ios-chatboxes-outline'}
    //     size={26}
    //     style={{ color: tintColor }}
    //   />
    // ),
  },
};

const MySettingsScreen = ({ navigation }) => (
  <MyNavScreen
    banner="Settings Tab"
    navigation={navigation}
  />
);

MySettingsScreen.navigationOptions = {
  tabBar: {
    label: 'Settings'
    // icon: ({ tintColor, focused }) => (
    //   <Ionicons
    //     name={focused ? 'ios-settings' : 'ios-settings-outline'}
    //     size={26}
    //     style={{ color: tintColor }}
    //   />
    // ),
  },
};


const Index = TabNavigator({
  Home: {
    screen: MyHomeScreen,
    path: '',
  },
  People: {
    screen: MyPeopleScreen,
    path: 'cart',
  },
  Chat: {
    screen: MyChatScreen,
    path: 'chat',
  },
  Settings: {
    screen: MySettingsScreen,
    path: 'settings',
  },
}, {
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? '#e91e63' : '#fff',
  },
});

/*-------nested navi in tabs---------------*/

// const TabIndex = TabNavigator({
//   all: { screen: AllContact },
// 	recent: { screen: RecentChat },
// },{
// 	tabBarOptions:{
// 		activeTintColor: '#e91e63'
// 	}
// });
// TabIndex.navigationOptions = {
// 	title: 'chat'
// };

// const Index = StackNavigator({
//   Home: { screen: TabIndex },
// 	Chat: { screen: ChatScreen },
// });


const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: '#F5FCFF',
  // },
	container: {
	 marginTop: Platform.OS === 'ios' ? 20 : 0,
 },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },

  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    margin: 50,
  },
});

// const mapStateToProps = (state) => ({
//   navigationState: state.navigationState
// })
//
// const mapDispatchToProps = (dispatch) => ({
//   backAction: () => {
//     dispatch(navigatePop())
//   }
// })

export default Index

// export default connect( mapStateToProps , mapDispatchToProps )(Index)


//
// <View style={{flex:1}}>
//  <StatusBar barStyle="light-content"/>
//  <View style={styles.container}>
//    <Text style={styles.welcome}>
//      Welcome to React Native!
//    </Text>
//    <Text style={styles.instructions}>
//      To get started, edit index.ios.js
//    </Text>
//    <Text style={styles.instructions}>
//      Press Cmd+R to reload,{'\n'}
//      Cmd+D or shake for dev menu
//    </Text>
//  </View>
// </View>
