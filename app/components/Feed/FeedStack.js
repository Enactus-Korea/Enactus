import React from 'react'
import { StackNavigator } from 'react-navigation';
import { Platform } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FeedContainer from './FeedContainer'

const FeedStack = StackNavigator({
  Feed: {
    screen: FeedContainer,
    path: '/feed',
    navigationOptions: ({ navigation }) => ({
      title: '피드',
      headerTitle: '뉴스피드',
      headerLeft: <MaterialIcons
              name="menu"
              size={30}
              onPress={() => navigation.navigate('DrawerOpen')}
              style={{
                color: 'white',
                marginLeft: Platform.OS === 'ios' ? 10 : 0,
               }}
            />,
      headerStyle: {
        backgroundColor: '#30333C'
      },
      headerTintColor: 'white'
    })
  }, //StackNavigator을 사용해야지 가능함
});

export default FeedStack
