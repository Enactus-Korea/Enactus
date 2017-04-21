import React from 'react'
import { StackNavigator } from 'react-navigation';
import { Platform } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Search from './Search'

const SearchStack = StackNavigator({
  SearchComp: {
    screen: Search,
  }, //StackNavigator을 사용해야지 가능함
},{
  headerMode: 'none'
});

export default SearchStack
