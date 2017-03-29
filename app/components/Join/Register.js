import React, {Component} from 'react'
import { connect } from 'react-redux'
import * as actions from './actions'
import {View, Text, Button, TouchableHighlight, TouchableOpacity, TextInput, Alert, Image} from 'react-native'
import styles from './styles'

class Register extends Component{
  constructor(props){
    super(props)
    this.state ={
      email: '',
      password: '',
      passwordConfirm: '',
      isVaildEmail: false
    }
  }
  componentDidMount(){
    this.props.isFetchedPermissions()
    console.log("DidMount", this.props.permissions)
  }
  isValidEmail = (email) => {
    let { permissions } = this.props.permissions,
    isMatchedEmail = permissions.map(p => p.email).indexOf(email);
    if(isMatchedEmail === -1){
      Alert.alert('인액터스 미인증 회원', '인증된 인액터스 회원만 가입이 가능합니다.\n인액터스 사무국으로 연락주세요.')
    } else {
      Alert.alert(false,'인증된 이메일입니다.',[
        {text: '완료', onPress: () => this.setState({isVaildEmail: true})},
      ])
    }
  }
  isRequestSignUp = () => {
    let { email, password } = this.state,
        { permissions } = this.props.permissions,
        name = permissions.find(l => l.email === email).name,
        univ = permissions.find(l => l.email === email).univ;
    this.props.isRequestedSignUp(email, password, name, univ)
    Alert.alert('가입완료','가입이 완료되었습니다.\n프로필을 설정해주세요.',[
      {text: '프로필 설정하기', onPress: () => this.props.navigation.navigate('Profile')},
    ])
  }
  render(){
    let permissions = this.props.permissions
    return(
      // <Image style={styles.imageBack} source={require('../../assets/WeAllWin.jpg')}>
        <View style={styles.container}>
          <View style={styles.rgst_body}>
            <View style={styles.rgst_email}>
              <TextInput
                ref='email'
                autoCapitalize= "none"
                style={styles.email_input}
                onChangeText={(text) => this.setState({email: text})}
                placeholder="이메일을 입력해주세요." />
              <TouchableHighlight
                style={styles.email_button}
                onPress={() => this.isValidEmail(this.state.email)}>
                <Text style={styles.buttonText}>인액터스 인증하기</Text>
              </TouchableHighlight>
            </View>
            <TextInput
              ref='password'
              autoCapitalize= "none"
              onChangeText={(text) => this.setState({password: text})}
              style={styles.input} placeholder="비밀번호"
              secureTextEntry={true}/>
            <TextInput
              ref='passwordConfirm'
              autoCapitalize= "none"
              onChangeText={(text) => this.setState({passwordConfirm: text})}
              style={styles.input} placeholder="비밀번호 확인"
              secureTextEntry={true}/>
            <TouchableOpacity
              style={styles.type_input}
              onPress={() => console.log('Action Sheet')}>
              <Text style={styles.type_inputText}>분류</Text>
            </TouchableOpacity>
            <Text><Text>서비스 이용약관</Text>과<Text>개인정보 취급방침</Text>에 동의합니다.</Text>
          </View>
        </View>
      // </Image>
    )
  }
}

function mapStateToProps(state){
  return {
    permissions: state.permissions
  }
}

export default connect(mapStateToProps, actions)(Register)

// export default Register


/* <TouchableOpacity
  style={styles.button}
  onPress={() => {
    console.log(this.props.navigation.navigate)
    return this.props.navigation.navigate('FirstViewStack')}}>
  <Text style={{fontWeight:'bold'}}>홈으로</Text>
</TouchableOpacity> */


/* <TouchableHighlight
  style={styles.button}
  onPress={this.isRequestSignUp}>
  <Text style={styles.buttonText}>회원가입</Text>
</TouchableHighlight>
<TouchableHighlight
  style={styles.home_btn}
  onPress={() => this.props.navigation.navigate('Feed')}>
  <Text style={styles.home_btn_Text}>홈으로 가기</Text>
</TouchableHighlight> */


/* <View style={styles.bottom_btn}>
  <TouchableOpacity
    onPress={() => this.props.navigation.navigate('Login')}>
    <Text style={{fontWeight:'bold'}}>로그인 하기</Text>
  </TouchableOpacity>
</View> */
