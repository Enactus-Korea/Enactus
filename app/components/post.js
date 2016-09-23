import React, { Component } from 'react';
import { Image, TextInput, Text, CameraRoll, View,TouchableHighlight,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles'

class Post extends Component{
  constructor(props){
    super(props)
    this.state = {
      username: '이유경',
      useruniv: '명지대학교',
      userimg: 'Avatar',
      content: '',
      avatarSource: null,
      modalVisible: true
      // imageSource: '', =>  prop 이상하다고 오류 메시지 생김
    }
  }

  async onPostPressed() {
    try {
      let response = await fetch('http://localhost:9000/feed',{
        method: 'POST',
        headers:
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        body: JSON.stringify({
          username: this.state.username,
          useruniv: this.state.useruniv,
          userimg: this.state.userimg,
          content: this.state.content
        })
      })
      let res = await response.text()
    } catch(errors) {
      let formErrors = JSON.parse(errors);
      console.log(formErrors)
    }
  }
  render(){
    return(
      <View style={styles.container}>
          <TouchableHighlight onPress={() => {
            this.props.setModalVisible(false);
          }}>
            <Text>Hide Modal</Text>
          </TouchableHighlight>
        <View style={styles.iconContainer}>
          <Image style={styles.icon} source={require('../assets/user.png')}></Image>
          <View style={styles.InfoContainer}>
            <Text style={styles.User}>이고은</Text>
            <Text style={styles.UserUniv}>인액터스대학교</Text>
          </View>
          <Text>옵션 붙일 곳</Text>
        </View>
        <TextInput
          ref="textarea"
          style={styles.textArea}
          multiline={true}
          onChangeText={ (text)=> this.setState({content: text}) }
          placeholder="너의 하루를 말해봐봐봡？"
          selectionColor="#2aa2ef"
          placeholderTextColor="#ced8de"
          />
        <View>
          <TouchableOpacity
            style={styles.avatarContainer}
          >
            <View>
            { this.state.avatarSource === null ?
              <Icon name="ios-camera" size={30} color="#8899a5" />
              :
              <Image style={styles.avatar} source={this.state.avatarSource} />
            }
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.funcBtn}>
          <TouchableOpacity style={styles.activeBtn} onPress={this.onPostPressed.bind(this)}>
            <Text style={styles.activeBtnText}>Post</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default Post
