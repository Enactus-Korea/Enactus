import React, {Component} from 'react'
import { connect } from 'react-redux'
import * as actions from './actions'
import { View, Text, Button, Dimensions, ActionSheetIOS, TouchableHighlight, TouchableOpacity, TextInput, Alert, Image, Modal, PickerIOS, Animated } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import styles from './styles'
import ProfUserImg from '../Profile/ProfUserImg'



let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;
let univList = [{univname: '서울대'},{univname: '명지대'},{univname: '숭실대'}, {univname: '고려대'}, {univname: '한양대'}, {univname: '가천대'}, {univname: '성균관대'}];
let PickerItemIOS = PickerIOS.Item;


class RegisterSecond extends Component{
  static navigationOptions = {
    // title: '상태매세지',
    header: (props) => ({
      title: '회원가입',
      left: <Button title='뒤로' color='#fff' onPress={() => props.goBack()} />,
      right: <Button title='완료' color='#FEC13A' onPress={() => props.state.params.handleSave()} />,
      style: {
        backgroundColor: '#30333C'
      },
      tintColor: 'white'
    })
  }
  constructor(props){
    super(props)
    this.state ={
      name: '',
      enactusType: '',
      univ: '',
      joined: '',
      intro: '',
      offSet: new Animated.Value(deviceHeight),
      univVisible: false,
      univ: undefined,
      univIndex: 0
    }
  }
  componentDidMount(){
    this.props.navigation.setParams({handleSave: this.isRequestSignUp})
  }
  changeUniv = (univ) => {

		this.setState({ univ, univIndex: univ })
	}
  isRequestSignUp = () => {
    console.log('회원가입으로 넘어가쟝')
  }
  showActionSheet = () => {
    var BUTTONS = [ '학생', '오비', '알룸나이'];
    ActionSheetIOS.showActionSheetWithOptions({
      options: BUTTONS,
      cancelButtonIndex: 3,
      title: '인액터스 유형',
    },
    (buttonIndex) => {
      if(buttonIndex !== 2){
        this.setState({ enactusType: BUTTONS[buttonIndex] });
      }
    });
  };
  render(){
    let permissions = this.props.permissions
    return(
        <View style={styles.rgst_container}>
          <ProfUserImg />
          <View style={styles.line}>
            <TextInput
              ref='name'
              autoCapitalize= "none"
              style={styles.input}
              onChangeText={(text) => this.setState({name: text})}
              placeholder="이름" />
          </View>
          <View >{/* style={styles.line} */}
            {/* <TextInput
              ref='univ'
              autoCapitalize= "none"
              onChangeText={(text) => this.setState({univ: text})}
              style={styles.input} placeholder="소속학교"/> */}
            <TouchableHighlight style={styles.button} underlayColor="transparent" onPress={ () => this.setState({univVisible: true}) }>
              <Text style={styles.buttonText}>소속학교</Text>{/*this.state.univ? univList[this.state.timeIndex].univname : '소속학교'*/}

            </TouchableHighlight>
            { this.state.univVisible ? <Picker closeModal={() => this.setState({ univVisible: false })} offSet={this.state.offSet} changeUniv={this.changeUniv} showtime={this.state.univ} /> : null }
          </View>
            <View style={styles.rgst_email}>
              <TouchableOpacity
                activeOpacity={1}
                style={styles.type_half_input}
                onPress={this.showActionSheet}>
                <Text style={this.state.enactusType? '' : styles.type_inputText}>{this.state.enactusType ? this.state.enactusType :"회원유형"}</Text>
              </TouchableOpacity>
              <View style={styles.half_line}>
              <TextInput
                ref='joined'
                autoCapitalize= "none"
                onChangeText={(text) => this.setState({joined: text})}
                style={styles.half_input} placeholder="가입년도"/>
              </View>
            </View>
            <View style={[styles.line, styles.btm_line]}>
            <TextInput
              ref='intro'
              autoCapitalize= "none"
              onChangeText={(text) => this.setState({intro: text})}
              style={styles.input} placeholder="한줄소개"/>
            </View>
        </View>
    )
  }
}



class Picker extends Component{
  componentDidMount(){
    Animated.timing(this.props.offSet, {
       duration: 300,  //올라오는 속도임
       toValue: 10
     }).start()
  }
  closeModal = () => {
    Animated.timing(this.props.offSet, {
         duration: 300,
         toValue: deviceHeight
       }).start(this.props.closeModal)
  }
  render(){
    return(
      <Animated.View style={{ transform: [{translateY: this.props.offSet}] }}>
          <View style={styles.closeButtonContainer}>
            <TouchableHighlight onPress={ this.closeModal } underlayColor="transparent" style={styles.closeButton}>
              <Text style={styles.closeButtonText}>선택</Text>
            </TouchableHighlight>
          </View>
          <PickerIOS
          selectedValue={this.props.showtime}
          onValueChange={(time) => this.props.changeUniv(time)}>
          {Object.keys(univList).map((time) => (
            <PickerItemIOS
              key={time}
              value={time}
              label={univList[time].univname}
            />
          ))}
        </PickerIOS>
      </Animated.View>
    )
  }
}



function mapStateToProps(state){
  return {
    permissions: state.permissions
  }
}

export default connect(mapStateToProps, actions)(RegisterSecond)
