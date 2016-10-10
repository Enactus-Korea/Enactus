'use strict';

import React, { Component } from 'react';
import {Image, Text,View,TextInput,TouchableHighlight, AlertIOS} from 'react-native';
import Register from './index'
import styles from './styles.login'

import DeviceInfo from 'react-native-device-info'

class Login extends Component {
  constructor(){
    super()
    this.state = {
      useremail:'',
      password: '',
      errors:[],
    }
  }
  componentDidMount(){
    this.props.actions.changeNav('login')
    this.props.close()
  }

  goRegister() {
    this.props.state.navigator.replace({id:'register'});
  }

  async signIn() {
    try {
      let response = await fetch('http://localhost:9000/user/login',{
        method: 'POST',
        headers:
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        body: JSON.stringify({
          userEmail: this.state.useremail,
          password: this.state.password,
          uuid: DeviceInfo.getUniqueID()
        })
      })
      let res = await response.text();
      let UserInfo = JSON.parse(res);
      if(UserInfo.user != null) {
        return this.callbackSignIn()
      } else {
        return this.errorSignIn()
      }
    } catch(errors) {
      let formErrors = JSON.parse(errors);
      console.log(formErrors)
    }
  }

  callbackSignIn() {
    AlertIOS.alert('Enactus', '로그인 되었습니다', this.props.state.navigator.replace({id:'home'}))
  }

  errorSignIn() {
    AlertIOS.alert('Enactus', '이메일 또는 비밀번호를 확인하세요')
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={() => this.props.state.navigator.replace({id:'home'})}>
          <Text>홈으로 가기</Text>
        </TouchableHighlight>
        <Image style={styles.logo} source={require('../../assets/logo-black.png')} resizeMode='contain' />
        <TextInput
          onChangeText={(val) => this.setState({useremail: val})}
          style={styles.input} placeholder="이메일"/>
        <TextInput
          onChangeText={(val) => this.setState({password: val})}
          style={styles.input} placeholder="비밀번호"
          secureTextEntry={true}/>
        <TouchableHighlight style={styles.button} onPress={() => this.signIn()}>
          <Text style={styles.buttonText}>로그인</Text>
        </TouchableHighlight>
        <View style={styles.findUserInfo}>
          <Text> <Text style={{color: 'blue'}}>이메일/비밀번호</Text> 찾기 </Text>
        </View>
        <TouchableHighlight underlayColor="transparent" style={styles.register} onPress={() => this.goRegister()}>
          <Text>계정이 아직 없으신가요? 회원가입</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

// module.exports = Login;
export default Login;
