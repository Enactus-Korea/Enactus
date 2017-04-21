import React from 'react'
import {View, Text, Image, TouchableOpacity} from 'react-native'
import styles from './styles'


const NetworkRow = (props) => {
  let {name, univ, userImg, selfIntro} = props.user;
  return(
  <TouchableOpacity
    onPress={() => props.navigation.navigate(
      'NetworkDetail', props.user)}
    style={styles.row_cont}>
    <Image
      style={styles.profile_img}
      source={userImg ? {uri: userImg} : require('../../assets/defaultUser.jpg')}/>
    <View style={styles.profile_ctx}>
      <Text style={styles.profile_name}>{name}</Text>
      <Text>{univ} {props.enactusType}</Text>
    </View>
  </TouchableOpacity>
)}

export default NetworkRow;
