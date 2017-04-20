import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import styles from './styles'

const ProjectList = (props) => (
  <TouchableOpacity
    style={styles.proj_box}
    onPress={() => props.navigation.navigate('Project_Detail', {...props.p})}>
    <Text>{props.p.actived.name}</Text>
  </TouchableOpacity>
)

export default ProjectList
