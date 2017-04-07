import React, {Component} from 'react'
import { connect } from 'react-redux'
import * as actions from './actions'
import { View, Text, Button, Dimensions, ActionSheetIOS, TouchableHighlight, TouchableOpacity, TextInput, Alert, Image, Modal, Picker, Animated } from 'react-native'
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
      userImg: '',
      univList: ['가천대', '경희대', '고려대', '명지대', '서울대'],
      joinedList: ['2006','2007', '2008', '2009', '2010', '2011','2012', '2013', '2014', '2015', '2016','2017'],
      univModal: false,
      joinedModal: false,
    }
  }
  componentDidMount(){
    this.props.navigation.setParams({handleSave: this.isRequestSignUp})
  }
  changeUniv = (univ) => {

		this.setState({ univ, univIndex: univ })
	}
  isRequestSignUp = () => {
    this.props.isSecondPhase(this.state)
    Alert.alert(
      '회원가입',
      '회원가입을 완료 하시겠습니까?',
      [ {text: '취소'},
        {text: '확인', onPress: () => this.props.isRequestedSignUp(this.props.rgst)}]
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
  setModalVisible = (visible) => {
    this.setState({univModal: visible});
  }
  getUserImg = (userImg) => {
    console.log(userImg)
    this.setState({userImg})
  }
  render(){
    let serviceItems = this.state.univList.map( (l, i) => {
            return <Picker.Item key={i} value={l} label={l} />
        })
    let joinedItems = this.state.joinedList.map( (l, i) => {
            return <Picker.Item key={i} value={l} label={l} />
        })
    let permissions = this.props.permissions
    return(
        <View style={styles.rgst_container}>
          <View style={{margin: 30}}>
            <ProfUserImg getUserImg={this.getUserImg} />
          </View>
          <View style={styles.line}>
            <TextInput
              ref='name'
              autoCapitalize= "none"
              style={styles.input}
              onChangeText={(text) => this.setState({name: text})}
              placeholder="이름" />
          </View>
          <TouchableOpacity
            onPress={()=> this.setState({univModal: true})}
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
                onPress={() => this.setState({joinedModal: true})}
                >
                  <Text style={this.state.joined ? '' : styles.type_inputText}>{this.state.joined ? this.state.joined :"가입년도"}</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.line, styles.btm_line]}>
            <TextInput
              ref='intro'
              autoCapitalize= "none"
              onChangeText={(text) => this.setState({intro: text})}
              style={styles.input} placeholder="한줄소개"/>
            </View>
            <Modal
              animationType={"slide"}
              transparent={true}
              visible={this.state.univModal}
              >
                <View
                  style={{
                      flex: 1,
                      flexDirection: 'column',
                      justifyContent: 'flex-end',
                      alignItems: 'center'}}
                  >
                <View style={{marginTop: 22, height: 200, width: Dimensions.get('window').width,  backgroundColor: '#fff'}}>
                  <TouchableOpacity
                    style={{ height: 30, borderBottomWidth: 1, borderBottomColor: '#dbdbdb', borderTopWidth: 1, borderTopColor: '#dbdbdb',justifyContent: 'center', alignItems: 'flex-end'}}
                    onPress={() => this.setState({univModal: false})}>
                    <Text
                      style={{marginRight: 15}}
                      >완료</Text>
                  </TouchableOpacity>
                  <Picker
                    selectedValue={this.state.univ}
                    onValueChange={ (univ) => (this.setState({univ}))}
                    itemStyle={{height: 170}}
                    >
                    {serviceItems}
                  </Picker>
                </View>
               </View>
            </Modal>
            <Modal
              animationType={"slide"}
              transparent={true}
              visible={this.state.joinedModal}
              >
                <View
                  style={{
                      flex: 1,
                      flexDirection: 'column',
                      justifyContent: 'flex-end',
                      alignItems: 'center'}}
                  >
                <View style={{marginTop: 22, height: 200, width: Dimensions.get('window').width,  backgroundColor: '#fff'}}>
                  <TouchableOpacity
                    style={{ height: 30, borderBottomWidth: 1, borderBottomColor: '#dbdbdb', borderTopWidth: 1, borderTopColor: '#dbdbdb',justifyContent: 'center', alignItems: 'flex-end'}}
                    onPress={() => this.setState({joinedModal: false})}>
                    <Text
                      style={{marginRight: 15}}
                      >완료</Text>
                  </TouchableOpacity>
                  <Picker
                    selectedValue={this.state.joined}
                    onValueChange={ (joined) => (this.setState({joined}))}
                    itemStyle={{height: 170}}
                    >
                    {joinedItems}
                  </Picker>
                </View>
               </View>
            </Modal>
        </View>
    )
  }
}


function mapStateToProps(state){
  return {
    permissions: state.permissions,
    rgst: state.permissions.rgst
  }
}

export default connect(mapStateToProps, actions)(RegisterSecond)
