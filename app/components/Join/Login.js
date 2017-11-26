import React, {Component} from 'react'
import { connect } from 'react-redux'
import {View, Text, Button, TouchableHighlight, TextInput, Image, AsyncStorage, Alert, PushNotificationIOS, KeyboardAvoidingView, Platform} from 'react-native'
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
      deviceToken: '',
      deviceType: ''
    }
    // this._onRegistered = this._onRegistered.bind(this)
    // this._onRegistrationError = this._onRegistrationError.bind(this)
    this._sendNotification = this._sendNotification.bind(this)
  }
  componentWillMount(){
    // PushNotificationIOS.addEventListener('register', this._onRegistered);
    // PushNotificationIOS.addEventListener('registrationError', this._onRegistrationError);
    // PushNotificationIOS.addEventListener('localNotification', this._onNotification);
    this._sendNotification()
    PushNotificationIOS.requestPermissions()
  }
  _onRegistered(deviceToken) {
    this.setState({
      deviceToken,
      deviceType: Platform.OS
    })
    // debugger
    console.log(deviceToken, Platform.OS);
  }
  _onRegistrationError(error) {
    // this.setState({
    //   deviceToken: error.code,
    //   deviceType: Platform.OS
    // })
    console.log(error);
  }
  isSignIn = () => {
    const { email, password, deviceToken, deviceType } = this.state,
          { navigation } = this.props;
    //TODO: navigation with redux
    if(!email || !password) {
      // Reactotron.log("AAA")
      Alert.alert('정확한 양식을 입력하세요.')
    } else {
      // Reactotron.log("BBB")
      this.props.isRequestedSignIn(email, password, deviceToken, deviceType, navigation)
    }
  }
  isPreNotice = () => {
    let { navigate } = this.props.navigation;
    Alert.alert(
      '회원가입 사전안내',
      '인액터스 코리아 사무국에 \n 사전등록한 학생, 기관, 알룸나이만 \n 회원가입이 가능합니다. \n 미등록 회원은 사무국에 문의하세요.',
      [
        {text: '회원가입 진행', onPress: () => navigate('Register')},
        {text: '뉴스피드 가기', onPress: () => {
          navigate('Feed')
        }}
      ]
    )
  }
  _onNotification(notification) {

    // PushNotificationIOS.presentLocalNotification({
    //   alertBody:notification.getMessage(),
    // });
    // let numOfBadge = PushNotificationIOS.getApplicationIconBadgeNumber((num) => {
    //   let add = parseInt(notification.getBadgeCount(), 10);
    //   PushNotificationIOS.setApplicationIconBadgeNumber(num+add);
    // });

    const result = `Message: ${notification.getMessage()};\n
      badge: ${notification.getBadgeCount()};\n
      sound: ${notification.getSound()};`;

    console.log("BBB LOGIN _onNotification", notification, result);
    debugger

    // PushNotificationIOS.scheduleLocalNotification({
    //   fireDate:
    //   alertAction: details.title,
		// 	alertBody: details.message,
    // })

  }
  _sendNotification() {
    console.log("AAA LOGIN _sendNotification");
    const detail = {
      fireDate: new Date().toISOString(),
			alertBody: '메세지야야양  가란 말이다!!',
      alertAction: "view",
			applicationIconBadgeNumber: 1
    }
    console.log("BBBB", detail);
    PushNotificationIOS.scheduleLocalNotification(detail)
    console.log("CCCC",PushNotificationIOS.scheduleLocalNotification);
// Expected format: YYYY-MM-DD'T'HH:mm:ss.sssZ
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
  componentWillUnmount(){
    // PushNotificationIOS.removeEventListener('register', this._onRegistered);
    // PushNotificationIOS.removeEventListener('registrationError', this._onRegistrationError);
    // PushNotificationIOS.removeEventListener('localNotification', this._onNotification);
  }
}


export default connect(null,actions)(Login)
 /*  onPress={() => this.signIn()}  */
// export default Login;
