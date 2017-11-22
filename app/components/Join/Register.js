import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import * as actions from './actions'
import { View, Text, ActionSheetIOS, TouchableOpacity, TextInput, Alert, Button, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Agreement from './Agreement'
import styles from './styles'
import RegisterInput from './Components/RegisterInput'
import RegisterActionSheet from './Components/RegisterActionSheet'
import KeyboardView from './Components/KeyboardView'

class Register extends PureComponent{
  static navigationOptions = ({navigation}) => ({
      headerTitle: '회원가입',
      headerLeft: <Button title='뒤로' color='#fff' onPress={() => navigation.navigate('Login')} />,
      headerRight:<Button title='다음' color='#FEC13A' onPress={() => navigation.state.params.handleNext()} />,
      headerStyle: {backgroundColor: '#30333C'},
      headerTintColor: 'white'
  })
  constructor(props){
    super(props)
    this.state ={
      email: '',
      password: '',
      passwordConfirm: '',
      userType: undefined,
      isValidEmail: false,
      checked: false,
      termsVisible: false,
      policyVisible: false,
      checkedTerms: false,
      checkedPolicy: false,
      behavior: 'padding'
    }
    this.handleChange = this.handleChange.bind(this)
    this.isValidEmail = this.isValidEmail.bind(this)
  }
  componentDidMount(){
    this.props.navigation.setParams({ handleNext: this.isNextStep });
  }
  componentWillReceiveProps(nextProps){
    if(this.props.permissions !== nextProps.permissions){
      let { permissions } = nextProps.permissions
      this.setState({
        isValidEmail: permissions.result
      })
    }
  }
  isNextStep = () => {
    const {isValidEmail, password, passwordConfirm, userType, checked} = this.state;
    if(!isValidEmail){
      console.log(isValidEmail);
      Alert.alert('이메일은 인증해주세요.')
    } else if (!password || !passwordConfirm) {
      Alert.alert('비밀번호를 입력하세요.')
    } else if(password !== passwordConfirm){
      Alert.alert('비밀번호가 일치하지 않습니다.')
    } else if(!userType) {
      Alert.alert('가입 분류를 선택하세요.')
    } else if(!checked) {
      Alert.alert('가입 정책에 동의하세요.')
    }
    else {
      this.props.isFirstPhase(this.state)
      //TODO: 후원기관 가입 페이지 생성해야함
      this.props.navigation.navigate('RegisterSecond', this.props.permissions)
    }

  }
  handleChange(text, type){
    console.log("handleChange from Register");
    this.setState({[type]: text})
  }
  isValidEmail(){
  // console.log("isValidEmail")
    let { email } = this.state;
    this.props.isValidEmail(email)
  }
  showActionSheet = () => {
    Keyboard.dismiss()
    var BUTTONS = [ '인액터스 회원', '후원기업/기관 외'];
    ActionSheetIOS.showActionSheetWithOptions({
      options: BUTTONS,
      title: '분류',
    },
    (buttonIndex) => this.setState({ userType: BUTTONS[buttonIndex] }));
  };
  isCheckAgreement = () => {
    if(!this.state.checkedTerms || !this.state.checkedPolicy){
      Alert.alert('각 정책을 확인하세요.')
    } else {
      this.setState({checked: !this.state.checked})
    }
  }
  isGetPermission = (type, visible) => {
    this.setState({
      [type]: !this.state[type],
      [visible]: !this.state[visible]
    })
  }
  render(){
    return (
      <View style={styles.rgst_container}>
      {/* <KeyboardView view > */}
        <RegisterInput
          inputType="email"
          inputViewStyle="rgst_email"
          inputStyle="email_input"
          buttonStyle="email_button"
          handleChange={this.handleChange}
          handlePress={this.isValidEmail}
          keyboardType="email-address"
        />
        <RegisterInput
          inputType="password"
          inputViewStyle="line"
          inputStyle="input"
          handleChange={this.handleChange}
          secureTextEntry={true}
        />
        <RegisterInput
          inputType="passwordConfirm"
          inputViewStyle="line"
          inputStyle="input"
          handleChange={this.handleChange}
          secureTextEntry={true}
        />
        <RegisterActionSheet handlePress={this.showActionSheet}>
          <Text style={this.state.userType? '' : styles.type_inputText}>{this.state.userType ? this.state.userType :"분류"}</Text>
        </RegisterActionSheet>
        <View style={{flexDirection:'row', alignItems: 'center'}}>
          <Text style={{fontSize: 12}}>
            <Text
              style={styles.rgst_service}
              onPress={() => this.setState({termsVisible: true})}>
              서비스 이용약관
            </Text>
            {' '}과{' '}
            <Text
              style={styles.rgst_service}
              onPress={() => this.setState({policyVisible: true})}>
              개인정보 취급방침
            </Text>
            {' '}에 동의합니다.
          </Text>
          <Ionicons
            name={this.state.checked ? "md-square" : "md-square-outline"}
            size={20}
            style={{marginLeft: 5, marginBottom: -2}}
            onPress={this.isCheckAgreement}
          />
          <Agreement
            visible={this.state.termsVisible}
            agreementType={'서비스 약관동의'}
            checked={this.state.checkedTerms}
            isGetPermission={this.isGetPermission}
            checkedType={'checkedTerms'}
            visibleType={'termsVisible'}
           />
          <Agreement
            visible={this.state.policyVisible}
            agreementType={'개인 정보 정책 동의'}
            checked={this.state.checkedPolicy}
            isGetPermission={this.isGetPermission}
            isCloseAgreementModal={this.isCloseAgreementModal}
            checkedType={'checkedPolicy'}
            visibleType={'policyVisible'}
           />
        </View>
      {/* </KeyboardView> */}
      </View>
    )
  }
}

function mapStateToProps(state){
  return {
    permissions: state.permissions
  }
}

export default connect(mapStateToProps, actions)(Register)


// isRequestSignUp = () => {
//   let { email, password } = this.state,
//       { permissions } = this.props.permissions,
//       name = permissions.find(l => l.email === email).name,
//       univ = permissions.find(l => l.email === email).univ;
//   this.props.isRequestedSignUp(email, password, name, univ)
//   Alert.alert('가입완료','가입이 완료되었습니다.\n프로필을 설정해주세요.',[
//     {text: '프로필 설정하기', onPress: () => this.props.navigation.navigate('Profile')},
//   ])
// }

//
