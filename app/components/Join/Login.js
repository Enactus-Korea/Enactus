import React, {Component} from 'react'
import { connect } from 'react-redux'
import {View, Text, Button, TouchableHighlight, TextInput, Image, AsyncStorage, Alert, KeyboardAvoidingView} from 'react-native'
import * as actions from './actions'
import styles from './styles'
// import Reactotron from 'reactotron-react-native'


//FIXME: navigation setProps, setState part => 2번 렌더링 됨...
class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      email:'',
      password: '',
    }
  }
  isSignIn = () => {
    const {email, password} = this.state, {navigation} = this.props;
    //TODO: navigation with redux
    if(!email || !password) {
      // Reactotron.log("AAA")
      Alert.alert('정확한 양식을 입력하세요.')
    } else {
      // Reactotron.log("BBB")
      this.props.isRequestedSignIn(email, password, navigation)
    }
  }
  isPreNotice = () => {
    let { navigate } = this.props.navigation;
    Alert.alert(
      '회원가입 사전안내',
      '인액터스 코리아 사무국에 \n 사전등록한 학생, 기관, 알룸나이만 \n 회원가입이 가능합니다. \n 미등록 회원은 사무국에 문의하세요.',
      [
        {text: '회원가입 진행', onPress: () => navigate('Register')},
        {text: '뉴스피드 가기', onPress: () => navigate('Feed')}
      ]
    )
  }
  render() {
    return (
      <KeyboardAvoidingView
        behavior="position"
        contentContainerStyle={styles.imageBack}
        style={styles.imageBack}
        keyboardVerticalOffset={0}
      >
      <Image source={require('../../assets/WeAllWin.jpg')} style={[{resizeMode: 'cover'}, styles.imageBack]}>

          <View style={styles.login_container}>
            <View style={[styles.cen_column, styles.login_head]}>
              <Image style={styles.logo} source={require('../../assets/logo.png')} resizeMode='contain' />
              <Text style={styles.login_title}>KOREA COMMUNITY</Text>
            </View>
            <View style={styles.login_body}>
              <View style={styles.line}>
              <TextInput
                autoCorrect={false}
                autoCapitalize = "none"
                onChangeText={(val) => this.setState({email: val})}
                style={styles.input} placeholder="이메일"/>
              </View>
              <View style={styles.line}>
              <TextInput
                autoCapitalize = "none"
                onChangeText={(val) => this.setState({password: val})}
                style={styles.input} placeholder="비밀번호"
                secureTextEntry={true}/>
              </View>
              <TouchableHighlight style={styles.loginButton} onPress={this.isSignIn}>
                <Text style={styles.buttonText}>로그인</Text>
              </TouchableHighlight>
              <View style={styles.cen_column}>
                <Text style={styles.home_btn_Text}>이메일/비밀번호 찾기 </Text>
                <TouchableHighlight onPress={() => this.props.navigation.navigate('Feed')}>
                  <Text style={styles.home_btn_Text}>홈으로 가기</Text>
                </TouchableHighlight>
              </View>
            </View>
            <TouchableHighlight
              style={styles.login_btm}
              onPress={() => this.isPreNotice()}
              underlayColor="transparent" style={styles.bottom_btn}>
              <Text>계정이 아직 없으신가요? <Text style={{fontWeight:'bold'}}>회원가입</Text></Text>
            </TouchableHighlight>
          </View>

        </Image>
        </KeyboardAvoidingView>
    );
  }
}


export default connect(null,actions)(Login)
 /*  onPress={() => this.signIn()}  */
// export default Login;
