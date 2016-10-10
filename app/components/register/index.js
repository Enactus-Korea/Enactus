'use strict';

import React, { Component } from 'react';
import {Text,View,TextInput,TouchableHighlight, AlertIOS } from 'react-native'
import styles from './styles'

import DeviceInfo from 'react-native-device-info'

class Register extends Component {
  constructor(){
    super()
    this.state = {
      username: '',
      useremail:'',
      useruniv: '',
      password: '',
      password_confirmation:'',
      errors:[],
    }
  }

  async signUp() {
    try {
      let response = await fetch('http://localhost:9000/user',{
        method: 'POST',
        headers:
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        body: JSON.stringify({
          userName: this.state.username,
          userEmail: this.state.useremail,
          password: this.state.password,
          userUniv: this.state.useruniv,
          uuid: DeviceInfo.getUniqueID()
        })
      })
      let res = await response.text()
      return this.callbackSignUP()
    } catch(errors) {
      let formErrors = JSON.parse(errors);
      console.log(formErrors)
    }
  }

  callbackSignUP() {
    AlertIOS.alert('Enactus', '회원가입이 완료되었습니다', this.props.state.navigator.replace({id:'login'}))
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={(val) => this.setState({username: val})}
          style={styles.input} placeholder="이름"/>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TextInput
            onChangeText={(val) => this.setState({useremail: val})}
            style={styles.mobile} placeholder="이메일 주소"/>
          <TouchableHighlight style={styles.button}>
            <Text style={styles.buttonText}>이메일 인증</Text>
          </TouchableHighlight>
        </View>
        <TextInput
          onChangeText={(val) => this.setState({useruniv: val})}
          style={styles.input} placeholder="대학교"/>
        <TextInput
          onChangeText={(val) => this.setState({password: val})}
          style={styles.input} placeholder="비밀번호"
          secureTextEntry={true}/>
        <TextInput
          onChangeText={(val) => this.setState({password_confirmation: val})}
          style={styles.input} placeholder="비밀번호 확인"
          secureTextEntry={true}/>
        <TouchableHighlight style={styles.activeBtn} onPress={() => this.signUp()}>
          <Text style={styles.activeBtnText}>회원가입</Text>
        </TouchableHighlight>
      </View>
    );
  }
}


// module.exports = Register;
export default Register;
