import React from 'react';
import { Image, StatusBar, TouchableOpacity, View, Text, CameraRoll, CameraRollView} from 'react-native';
import styles from './styles'
import ImageList from './postImageList'


const invariant = require('invariant');

class PostAlbum extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      ImageVisible: true,
    }
  }
  hideModal() {
    this.setState = {
      content: ''
    }
    this.props.setImageVisible(false);
    // TODO: refreshing 추가
  }
  render(){
    return(
      <View>
        <View style={styles.PostContainer}>
          <TouchableOpacity onPress={() => this.props.setImageVisible(false)}>
            <Text style={styles.Text}>취소</Text>
          </TouchableOpacity>
          <Text style={styles.Text}>이미지롤</Text>
          <Text style={styles.Text}>완료</Text>
        </View>
        <ImageList />
      </View>
    )
  }
}

export default PostAlbum
