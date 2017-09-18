import React from 'react'
import {View,Text,TouchableHighlight} from 'react-native';
import styles from './styles'

const SettingLists = [
  { route: 'SelfIntro_Setting', name: '상태메시지', icon:'ios-paper-outline' },
  { route: 'History_Setting', name: '히스토리', icon:'ios-information-circle-outline' },
]

const ProfileSetting = (props) => {
  return(
  <View>
    {SettingLists.map((s, i) => (
      <TouchableHighlight
        style={styles.setting_list}
        key={i} onPress={() => props.navigation.navigate(s.route)}>
        <Text>{s.name}</Text>
      </TouchableHighlight>
    ))}
  </View>
)}
export default ProfileSetting;
