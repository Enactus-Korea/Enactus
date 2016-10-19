import React, { Component } from 'react';
import { Image,TextInput, Text, CameraRoll,View,TouchableOpacity,AlertIOS} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles'

class PostHead extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <View style={styles.PostContainer}>
        <TouchableOpacity onPress={() => this.props.setModalVisible(false)}>
          <Text style={styles.Text}>취소</Text>
        </TouchableOpacity>
        <Text style={styles.Text}>글쓰기</Text>
        <View>
          {this.props.content.length === 0
            ?
            <Text style={styles.Text}>게시</Text>
            :
            <View>{this.props.onPost}</View>
          }
        </View>
      </View>
    )
  }
}

export default PostHead
