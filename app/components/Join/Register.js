import React, {Component} from 'react'
import { connect } from 'react-redux'
import * as actions from './actions'
import { View, Text, ActionSheetIOS, TouchableOpacity, TextInput, Alert} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Agreement from './Agreement'
import styles from './styles'

class Register extends Component{
  static navigationOptions = {
    // title: '상태매세지',
    header: (props) => ({
      title: '회원가입',
      left: <Button title='뒤로' color='#fff' onPress={() => props.navigate('Login')} />,
      right: <Button title='다음' color='#FEC13A' onPress={() => props.state.params.handleNext()} />,
      style: {
        backgroundColor: '#30333C'
      },
      tintColor: 'white'
    })
  }
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
    }
  }
  componentDidMount(){
    this.props.isFetchedPermissions()
    this.props.navigation.setParams({ handleNext: this.isNextStep });
    console.log("DidMount", this.props.permissions)
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
      this.props.navigation.navigate(this.state.userType === '인액터스 회원' ? 'RegisterSecond' : 'Register')
    }

  }
  isValidEmail = (email) => {
    let { permissions } = this.props.permissions,
    isMatchedEmail = permissions.map(p => p.email).indexOf(email);
    if(isMatchedEmail === -1){
      Alert.alert('인액터스 미인증 회원', '인증된 인액터스 회원만 가입이 가능합니다.\n인액터스 사무국으로 연락주세요.')
    } else {
      Alert.alert(false,'인증된 이메일입니다.',[
        {text: '완료', onPress: () => this.setState({isValidEmail: true})},
      ])
    }
  }
  showActionSheet = () => {
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
  isGetPermission = (type) => {
    this.setState({[type]: !this.state[type]})
  }
  isCloseAgreementModal = (visible) => {
    this.setState({[visible]: !this.state[visible]})
  }
  render(){
    let permissions = this.props.permissions
    return(
        <View style={styles.rgst_container}>
            <View style={styles.rgst_email}>
              <TextInput
                ref='email'
                autoCapitalize= "none"
                style={styles.email_input}
                onChangeText={(text) => this.setState({email: text})}
                placeholder="이메일을 입력해주세요." />
              <TouchableOpacity
                style={styles.email_button}
                onPress={() => this.isValidEmail(this.state.email)}>
                <Text style={styles.buttonText}>인액터스 인증하기</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.line}>
              <TextInput
                ref='password'
                autoCapitalize= "none"
                onChangeText={(text) => this.setState({password: text})}
                style={styles.input} placeholder="비밀번호"
                secureTextEntry={true}/>
            </View>
            <View style={styles.line}>
              <TextInput
                ref='passwordConfirm'
                autoCapitalize= "none"
                onChangeText={(text) => this.setState({passwordConfirm: text})}
                style={styles.input} placeholder="비밀번호 확인"
                secureTextEntry={true}/>
            </View>
            <TouchableOpacity
              activeOpacity={1}
              style={styles.type_input}
              onPress={this.showActionSheet}>
              <Text style={this.state.userType? '' : styles.type_inputText}>{this.state.userType ? this.state.userType :"분류"}</Text>
            </TouchableOpacity>
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
                isCloseAgreementModal={this.isCloseAgreementModal}
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
