import React, {Component} from 'react'
import { connect } from 'react-redux'
import * as actions from './actions'
import {View, Text, ScrollView, Button, ActionSheetIOS, TouchableHighlight, TouchableOpacity, TextInput, Alert, Image, Modal} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import styles from './styles'
import ProfUserImg from '../Profile/ProfUserImg'

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
    }
  }
  componentDidMount(){
    this.props.navigation.setParams({handleSave: this.isRequestSignUp})
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
          <View style={styles.line}>
            <TextInput
              ref='univ'
              autoCapitalize= "none"
              onChangeText={(text) => this.setState({univ: text})}
              style={styles.input} placeholder="소속학교"/>
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

function mapStateToProps(state){
  return {
    permissions: state.permissions
  }
}

export default connect(mapStateToProps, actions)(RegisterSecond)
