import React from 'react'
import {View,Text,TouchableHighlight} from 'react-native';
import styles from './styles'


const ActivitySetting = (props) => {
  let params = props.navigation.state.params;
  if(params) {
    return (
      <View>
        <View>
          <Text>modified ActivitySetting</Text>
        </View>
      </View>
    )
  } else {
    return(
      <View>
        <View>
          <Text>add ActivitySetting</Text>
        </View>
      </View>
    )
  }
}
export default ActivitySetting;
