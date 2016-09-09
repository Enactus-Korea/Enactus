import React from 'react'
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import styles from './panel.styles'

const PanelButton = ({panel, onPress}) => {
  return (
    <TouchableHighlight
     underlayColor="#888"
     onPress={onPress}
     key={panel.key}>
     <View style={styles.btn}>
       <Icon style={styles.btnIcon} name={panel.name} size={20}></Icon>
       <Text style={styles.btnText}>{ panel.title }</Text>
     </View>
   </TouchableHighlight>
  )
}

export default PanelButton
