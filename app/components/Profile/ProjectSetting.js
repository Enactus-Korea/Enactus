import React from 'react'
import {View,Text,TouchableHighlight, TextInput} from 'react-native';
import styles from './styles'


const ProjectSetting = (props) => {
  let params = props.navigation.state.params;
  if(params) {
    return (
      <View>
        <View>
          <Text>프로젝트</Text>
          <Text>{params.name}</Text>
        </View>
        <TouchableHighlight><Text>수정하기</Text></TouchableHighlight>
      </View>
    )
  } else {
    return(
      <View>
        <View>
          <Text>프로젝트</Text>
          <TextInput />
        </View>
        <TouchableHighlight><Text>추가하기</Text></TouchableHighlight>
      </View>
    )
  }
}
export default ProjectSetting;
