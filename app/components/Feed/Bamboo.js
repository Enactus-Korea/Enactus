import React from 'react'
import { View, Text } from 'react-native'
import FeedList from './FeedList'


const Bamboo = ({navigation}) => (
  <View>
    <FeedList navigation={navigation} typeOf={'feed/bamboo'} detailRoute={'BambooDetail'}/>
  </View>
)

export default Bamboo
