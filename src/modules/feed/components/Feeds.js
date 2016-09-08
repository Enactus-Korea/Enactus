import { View, Text, TouchableHighlight, Image, ScrollView, ListView } from 'react-native';
import React, { Component, PropTypes } from 'react';
// import styles from './styles';
import Button from './Button'
import Icon from 'react-native-vector-icons/Ionicons'

const route = {
  type: 'push',
  route: {
    key: 'about', title: '상세페이지', showBackButton: true
  }
}
const Feeds = ({_handleNavigate}) => {
    return (
      <View>
        <Text>
         뭐라도 나와라
        </Text>
        <Button onPress={() => _handleNavigate(route)} label='Go' />
      </View>
    )
}
// <View style={styles.feedsListView}>
//   <View style={styles.feedContainer}>
//     <View style={styles.feedTopContainer}>
//       <View style={styles.feedInfoContainer}>
//         <Text style={styles.feedUser}>이름</Text>
//         <Text style={styles.feedUserUniv}>학교</Text>
//       </View>
//       <Text style={styles.feedUserTime}>날짜 떙떙</Text>
//     </View>
//     <View style={styles.ctxContainer}>
//         <Text style={styles.txtContents}>내가 하고 싶은말 후후</Text>
//     </View>
//     <View style={styles.likeAndcomment}>
//       <View style={styles.funcIcon}>
//         <TouchableHighlight>
//           <Icon name="ios-heart" size={23} color="#8899a5" />
//         </TouchableHighlight>
//         <Text> 0개 </Text>
//         <TouchableHighlight>
//           <Icon name="ios-chatboxes-outline" size={23} color="#8899a5" />
//         </TouchableHighlight>
//         <Text> 0개 </Text>
//       </View>
//       <View style={styles.funcShare}>
//         <Icon name="ios-share-outline" size={23} color="#8899a5" />
//       </View>
//     </View>
//   </View>
// </View>
export default Feeds
