'use strict';

import React, { Component } from 'react';
import {Text,View,TextInput,TouchableHighlight} from 'react-native';
import styles from './styles'

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
  componentDidMount(){
    // this.props.actions.changeNav('login')
    this.props.close()
  }
  // onRegisterPressed(){
  //   try {
  //     let response = await fetch('http://localhost:9000/register', {
  //       method: 'POST',
  //       body: JSON.stringfy({
  //
  //       })
  //     })
  //
  //   } catch(errors) {
  //
  //   }
  // }
  render() {
    return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TextInput
            onChangeText={(val) => this.setState({email: val})}
            style={styles.mobile} placeholder="모바일 번호"/>
          <TouchableHighlight style={styles.button}>
            <Text style={styles.buttonText}>모바일 인증</Text>
          </TouchableHighlight>
        </View>

        <TextInput
          onChangeText={(val) => this.setState({email: val})}
          style={styles.input} placeholder="이메일"/>
        <TextInput
          onChangeText={(val) => this.setState({name: val})}
          style={styles.input} placeholder="이름"/>
        <TextInput
          onChangeText={(val) => this.setState({univ: val})}
          style={styles.input} placeholder="대학교"/>
        <TextInput
          onChangeText={(val) => this.setState({password: val})}
          style={styles.input} placeholder="비밀번호"
          secureTextEntry={true}/>
        <TextInput
          onChangeText={(val) => this.setState({password_confirmation: val})}
          style={styles.input} placeholder="비밀번호 확인"
          secureTextEntry={true}/>
      </View>
    );
  }
}

// module.exports = Register;
export default Register;
