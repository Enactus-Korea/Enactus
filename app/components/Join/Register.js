import React, {Component} from 'react'
import { connect } from 'react-redux'
import * as actions from './actions'
import {View, Text, ScrollView, Button, TouchableHighlight, TouchableOpacity, TextInput, Alert, Image, Modal} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
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
      isVaildEmail: false,
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
    this.props.navigation.navigate('RegisterSecond')
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
        <View style={styles.rgst_container}>
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
              style={styles.type_input}
              onPress={() => console.log('Action Sheet')}>
              <Text style={styles.type_inputText}>분류</Text>
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
                onPress={() => this.setState({checked: !this.state.checked})}
              />
              <Modal
                animationType={"slide"}
                transparent={true}
                visible={this.state.termsVisible}
                >
                <View style={styles.agreement_cont}>
                <Button onPress={() => this.setState({termsVisible: false})} title='닫기'/>
                <ScrollView style={styles.agreement_box}>
                  <Text>
                    서비스 약관동의은 궁시렁 궁시렁
                  </Text>
                </ScrollView>
                <View style={{flexDirection:'row', alignItems: 'center'}}>
                  <Text>
                    서비스 약관동의에 동의합니다.
                  </Text>
                  <Ionicons
                    name={this.state.checkedTerms ? "md-square" : "md-square-outline"}
                    size={20}
                    style={{marginLeft: 5, marginBottom: -2}}
                    onPress={() => this.setState({checked: !this.state.checkedTerms})}
                  />
                </View>
                </View>
              </Modal>
              <Modal
                animationType={"slide"}
                transparent={true}
                visible={this.state.policyVisible}
                >
                <View style={styles.agreement_cont}>
                  <Button onPress={() => this.setState({policyVisible: false})} title='닫기'/>
                  <ScrollView style={styles.agreement_box}>
                    <Text>
                      개인 정보 정책 동의
                    </Text>
                  </ScrollView>
                  <View style={{flexDirection:'row', alignItems: 'center'}}>
                    <Text>
                      개인 정보 정책에 동의합니다.
                    </Text>
                    <Ionicons
                      name={this.state.checkedPolicy ? "md-square" : "md-square-outline"}
                      size={20}
                      style={{marginLeft: 5, marginBottom: -2}}
                      onPress={() => this.setState({checked: !this.state.checkedPolicy})}
                    />
                  </View>
                </View>
              </Modal>
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
