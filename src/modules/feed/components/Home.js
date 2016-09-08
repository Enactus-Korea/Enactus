import React from 'react'
import { View, Text } from 'react-native'
import Button from './Button'
// import Feeds from './Feeds'
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons'

const route = {
  type: 'push',
  route: {
    key: 'about', title: 'About', showBackButton: true,

  }
}

const Home = ({_handleNavigate}) => (
  <View style={styles.feedsListView}>
    <View style={styles.feedContainer}>
      <View style={styles.feedTopContainer}>
        <View style={styles.feedInfoContainer}>
          <Text style={styles.feedUser}>이름</Text>
          <Text style={styles.feedUserUniv}>학교</Text>
        </View>
        <Text style={styles.feedUserTime}>날짜 떙떙</Text>
      </View>
      <View style={styles.ctxContainer}>
         <Text style={styles.txtContents}>내가 하고 싶은말 후후</Text>
      </View>
      <View style={styles.likeAndcomment}>
        <View style={styles.funcIcon}>
          <Icon name="ios-heart" size={23} color="#8899a5" />
          <Text> 0개 </Text>
          <Button onPress={() => _handleNavigate(route)} icon='ios-chatboxes-outline' />
          <Text> 0개 </Text>
        </View>
        <View style={styles.funcShare}>
          <Icon name="ios-share-outline" size={23} color="#8899a5" />
        </View>
      </View>
    </View>
  </View>

)

export default Home
