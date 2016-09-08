import React from 'react'
import { View, Text } from 'react-native'
import Button from './Button'
import Feeds from './Feeds'
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
      <Button onPress={() => _handleNavigate(route)} style={styles.ctxContainer}>
          내가 하고 싶은말 후후
      </Button>
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
// <Icon name="ios-chatboxes-outline" size={23} color="#8899a5" />
// <View style={styles.container}>
//   <Feeds />
//   <Button onPress={() => _handleNavigate(route)} label='go' />
// </View>


// const styles = StyleSheet.create({
//   title: {
//     marginBottom: 20,
//     fontSize: 22,
//     textAlign: 'center'
//   },
//   container: {
//     paddingTop: 60
//   }
// })

export default Home
