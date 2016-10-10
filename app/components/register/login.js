'use strict';

import React, { Component } from 'react';
import {Image, Text,View,TextInput,TouchableHighlight} from 'react-native';
import Register from './index'
import styles from './styles.login'


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
    // this.props.actions.changeNav('login')
    this.props.close()
  }
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../../assets/logo-black.png')} resizeMode='contain' />
        <TextInput
          onChangeText={(val) => this.setState({email: val})}
          style={styles.input} placeholder="이메일"/>
        <TextInput
          onChangeText={(val) => this.setState({password: val})}
          style={styles.input} placeholder="비밀번호"
          secureTextEntry={true}/>
        <TouchableHighlight style={styles.button} onPress={this.props.onSelectLogin}>
          <Text style={styles.buttonText}>로그인</Text>
        </TouchableHighlight>
        <View style={styles.findUserInfo}>
          <Text> <Text style={{color: 'blue'}}>이메일/비밀번호</Text> 찾기 </Text>
        </View>
        <TouchableHighlight style={styles.register} onPress={this.props.onSelectRegister}>
          <Text>계정이 아직 없으신가요? 회원가입</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
Login.propTypes = {
	onSelectRegister: React.PropTypes.func.isRequired,
  onSelectLogin: React.PropTypes.func.isRequired
};

// module.exports = Login;
export default Login;
