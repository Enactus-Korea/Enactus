import React from 'react'
import { StackNavigator } from 'react-navigation';
import { Platform } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FeedContainer from './FeedContainer'

const FeedStack = StackNavigator({
  Feed: {
    screen: FeedContainer,
    path: '/feed',
    navigationOptions: {
      title: '피드',
      header: ({navigate, tintColor}) =>({
        title: '뉴스피드',
        left: <MaterialIcons
                name="menu"
                size={30}
                onPress={() => navigate('DrawerOpen')}
                style={{
                  color: 'white',
                  marginLeft: Platform.OS === 'ios' ? 10 : 0,
                 }}
              />,
        style: {
          backgroundColor: '#30333C'
        },
        tintColor: 'white'
      }),
    }
  }, //StackNavigator을 사용해야지 가능함
});

export default FeedStack
