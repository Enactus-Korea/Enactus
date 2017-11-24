import React, {Component} from 'react'
import { connect } from 'react-redux'
import * as actions from './actions'
import { View, Text, Button, Dimensions, ActionSheetIOS, TouchableHighlight, TouchableOpacity, TextInput, Alert, Image, Modal, Picker, Animated, PushNotificationIOS, Platform, Keyboard, KeyboardAvoidingView } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import styles from './styles'
import ProfileImage from './Components/ProfileImage'
import KeyboardView from './Components/KeyboardView'
import SelectModal from './Components/SelectModal'
import RegisterInput from './Components/RegisterInput'



class RegisterSecond extends Component{
  static navigationOptions = ({navigation}) => ({
    headerTitle: '회원가입',
    headerLeft: <Button title='뒤로' color='#fff' onPress={() => navigation.goBack()} />,
    headerRight: <Button title='완료' color='#FEC13A' onPress={() => navigation.state.params.handleSave()} />,
    headerStyle: {backgroundColor: '#30333C'},
    headerTintColor: 'white'
  })
  constructor(props){
    super(props)
    this.state ={
      name: '',
      enactusType: '',
      univ: '',
      joined: '',
      intro: '',
      userImg: '',
      univList: ['','가천대', '경희대', '고려대', '명지대', '서울대'],
      joinedList: ['','2006','2007', '2008', '2009', '2010', '2011','2012', '2013', '2014', '2015', '2016','2017'],
      univModal: false,
      joinedModal: false,
      deviceToken: "",
      deviceType: "",
    }
    this.handleValueChange = this.handleValueChange.bind(this)
    this.setModalVisible = this.setModalVisible.bind(this)
    this._onRegistered = this._onRegistered.bind(this)
  }
  componentWillMount(){
    PushNotificationIOS.addEventListener('register', this._onRegistered);
    PushNotificationIOS.addEventListener('registrationError', this._onRegistrationError);
    let { name, univ } = this.props.navigation.state.params.permissions
    this.setState({
      name, univ
    })
    // debugger
    // this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
    // this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
    // PushNotificationIOS.check
    // 이것을 물어봐야지....device token 을 가져 올 수 있음.
    PushNotificationIOS.requestPermissions()
  }
  componentDidMount(){
    console.log("componentDidMount from RegisterSecond")
    this.props.navigation.setParams({handleSave: this.isRequestSignUp})
  }
  changeUniv = (univ) => {
		this.setState({ univ, univIndex: univ })
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
  isRequestSignUp = () => {
    //FIXME: 이름, 학교 빈 값은 입력해라고 알럿!!!
    let { joinedList, univList, univModal, ...restState } = this.state
    this.props.isSecondPhase(restState)
    Alert.alert(
      '회원가입',
      '회원가입을 완료 하시겠습니까?',
      [ {text: '취소'},
        {text: '확인', onPress: () => {
          this.props.isRequestedSignUp(this.props.rgst)
          this.props.navigation.navigate("Login")
        }}]
      )
  }
  showActionSheet = () => {
    var BUTTONS = [ '학생', '오비', '알룸나이'];
    ActionSheetIOS.showActionSheetWithOptions({
      options: BUTTONS,
      // cancelButtonIndex: 3,
      title: '인액터스 유형',
    },
    (buttonIndex) => this.setState({ enactusType: BUTTONS[buttonIndex] }));
  }
  setModalVisible(modal){
    this.setState({[modal]: !this.state[modal]});
  }
  // FIXME
  // getUserImg = (userImg) => {
  //   console.log("userImg")
  //   this.setState({userImg})
  // }
  // handleLastPoint(e){
  //   console.log("window",Dimensions.get('window').height)
  //   console.log(e.nativeEvent.layout.y)
    // debugger
  // }
  // _keyboardDidShow () {
  //   console.log("KeyboardAvoidingView",KeyboardAvoidingView.prototype.relativeKeyboardHeight())
  //   // alert('Keyboard Shown');
  // }
  //
  // _keyboardDidHide () {
  //   console.log('Keyboard Hidden');
  // }
  handleValueChange(stateVal, stateName){
    // debugger
    this.setState({
      [stateName]: stateVal
    })
  }
  render(){
    return(
      // <KeyboardView viewStyle={styles.rgst_container}>
        <KeyboardAvoidingView
          behavior="position"
          style={styles.rgst_container}
          keyboardVerticalOffset={-130}>
          <View style={{marginVertical: 30, width:Dimensions.get('window').width, alignItems: 'center'}}>
            <ProfileImage
              classification="register"
              stateName="userImg"
              getUserImg={this.handleValueChange}
              imageSize={90}
            />
          </View>
          <RegisterInput
            inputType="name"
            inputViewStyle="line"
            inputStyle="input"
            stateValue={this.state.name}
            handleChange={this.handleValueChange}
          />
          <TouchableOpacity
            onPress={() => this.setModalVisible("univModal")}
            style={styles.select_input}>
            <Text style={this.state.univ? '' : styles.type_inputText} >
              {this.state.univ? this.state.univ :"소속학교"}
            </Text>
          </TouchableOpacity>
            <View style={{
              flexDirection: 'row',
              alignItems:'center',
              justifyContent: 'space-between',
              width:Dimensions.get('window').width,
              height: 50,
              marginBottom: 20,
              backgroundColor: '#fff',
            }}>
              <TouchableOpacity
                activeOpacity={1}
                style={styles.type_half_input}
                onPress={this.showActionSheet}>
                <Text style={this.state.enactusType ? '' : styles.type_inputText}>{this.state.enactusType ? this.state.enactusType :"회원유형"}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.half_line, styles.type_half_input]}
                onPress={() => this.setModalVisible("joinedModal")}
                >
                  <Text style={this.state.joined ? '' : styles.type_inputText}>{this.state.joined ? this.state.joined :"가입년도"}</Text>
              </TouchableOpacity>
            </View>
            <RegisterInput
              inputType="intro"
              inputViewStyle="line"
              inputStyle="input"
              handleChange={this.handleValueChange}
            />
            <SelectModal
              selectItems={this.state.univList}
              handleModal={this.setModalVisible}
              isVisible={this.state.univModal}
              selectedValue={this.state.univ}
              onValueChange={this.handleValueChange}
              modalName="univ"
              modalState="univModal"
            />
            <SelectModal
              selectItems={this.state.joinedList}
              handleModal={this.setModalVisible}
              isVisible={this.state.joinedModal}
              selectedValue={this.state.joined}
              onValueChange={this.handleValueChange}
              modalName="joined"
              modalState="joinedModal"
            />
        {/* </KeyboardView> */}
        </KeyboardAvoidingView>
    )
  }
  componentWillUnmount(){
    PushNotificationIOS.removeEventListener('register', this._onRegistered);
    PushNotificationIOS.removeEventListener('registrationError', this._onRegistrationError);
    // this.keyboardDidShowListener.remove();
    // this.keyboardDidHideListener.remove();
  }
}


function mapStateToProps(state){
  return {
    rgst: state.permissions.rgst
  }
}

export default connect(mapStateToProps, actions)(RegisterSecond)




// requestPushNotification(){
  // debugger

  // PushNotificationIOS.checkPermissions((permissions) => {
    // debugger
    // this.setState({permissions});
    // alert : 1
    // badge : 1
    // sound : 1
  // });
  // PushNotificationIOS.requestPermissions()
// }
