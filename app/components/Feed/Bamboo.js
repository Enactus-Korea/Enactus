import React from 'react'
import { View, Text } from 'react-native'
import FeedList from './FeedList'


const Bamboo = ({
  navigation
}) => <FeedList navigation={navigation} typeOf={'feed/bamboo'} detailRoute={'BambooDetail'}/>


export default Bamboo
