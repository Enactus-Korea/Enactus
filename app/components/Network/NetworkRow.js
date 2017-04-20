import React from 'react'
import {View, Text, Image, TouchableOpacity} from 'react-native'
import styles from './styles'


const NetworkRow = (props) => {
  console.log("NetworkRow",{...props});
  let {name, univ, userImg, selfIntro} = props;
  return(
  <TouchableOpacity
    onPress={() => props.navigation.navigate(
      'NetworkDetail', {
        name,
        univ,
        userImg,
        selfIntro
      })}
    style={styles.row_cont}>
    <Image
      style={styles.profile_img}
      source={props.userImg ? {uri: props.userImg} : require('../../assets/defaultUser.jpg')}/>
    <View style={styles.profile_ctx}>
      <Text style={styles.profile_name}>{props.name}</Text>
      <Text>{props.univ} {props.enactusType}</Text>
    </View>
  </TouchableOpacity>
)}

export default NetworkRow;
