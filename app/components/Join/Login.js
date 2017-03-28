import React, {Component} from 'react'
import { connect } from 'react-redux'
import {View, Text, Button, TouchableHighlight, TextInput, Image, AsyncStorage, Alert} from 'react-native'
import * as actions from './actions'
import styles from './styles'

class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      email:'',
      password: '',
    }
  }
  isSignIn = () => {
    this.props.isRequestedSignIn(this.state.email, this.state.password)
    Alert.alert('인액터스 로그인','로그인이 완료 되었습니다.',[{text:'확인', onPress: () => this.props.navigation.navigate('Feed') }])
  }
  render() {
    return (
      <Image style={styles.imageBack} source={require('../../assets/WeAllWin.jpg')}>
        <View style={styles.container}>
          <View style={[styles.cen_column, styles.login_head]}>
            <Image style={styles.logo} source={require('../../assets/logo.png')} resizeMode='contain' />
            <Text style={styles.login_title}>KOREA COMMUNITY</Text>
          </View>
          <View style={styles.login_body}>
            <TextInput
              autoCapitalize = "none"
              onChangeText={(val) => this.setState({email: val})}
              style={styles.input} placeholder="이메일"/>
            <TextInput
              autoCapitalize = "none"
              onChangeText={(val) => this.setState({password: val})}
              style={styles.input} placeholder="비밀번호"
              secureTextEntry={true}/>
            <TouchableHighlight style={styles.button} onPress={this.isSignIn}>
              <Text style={styles.buttonText}>로그인</Text>
            </TouchableHighlight>
            <View style={styles.cen_column}>
              <Text style={styles.home_btn_Text}>이메일/비밀번호 찾기 </Text>
              <TouchableHighlight onPress={() => this.props.navigation.navigate('Feed')}>
                <Text style={styles.home_btn_Text}>홈으로 가기</Text>
              </TouchableHighlight>
            </View>
          </View>
          <View style={styles.login_btm}>
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Register')}
              underlayColor="transparent" style={styles.bottom_btn}>
              <Text>계정이 아직 없으신가요? <Text style={{fontWeight:'bold'}}>회원가입</Text></Text>
            </TouchableHighlight>
          </View>
        </View>
      </Image>
    );
  }
}


export default connect(null,actions)(Login)
 /*  onPress={() => this.signIn()}  */
// export default Login;
