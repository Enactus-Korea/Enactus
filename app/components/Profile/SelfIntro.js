import React, {Component} from 'react'
import { connect } from 'react-redux'
import * as actions from './actions'
import {View, Text, TextInput, Button, Alert} from 'react-native'
import styles from './styles'


class SelfIntro extends Component{
  static navigationOptions = ({navigation}) => ({
      headerTitle: '상태메세지',
      headerRight: <Button title='완료' color='#fff' onPress={() => navigation.state.params.handleSave()} />,
      headerStyle: { backgroundColor: '#30333C' },
      headerTintColor: 'white'
  })
  constructor(props){
    super(props)
    this.state = {
      selfIntro: ''
    }
  }
  componentDidMount() {
    this.props.navigation.setParams({ handleSave: this.isPostingIntro });
  }
  isPostingIntro = () => {
    const {isModifiedIntro, user, navigation} = this.props;
    isModifiedIntro(user.email, this.state.selfIntro)
    Alert.alert('상태메세지','설정이 완료되었습니다.',[{text: '확인', onPress: () => navigation.goBack()}])
  }
  render(){
    return(
      <View>
        <Text style={styles.setting_detail}>상태메세지를 입력하세요.</Text>
        <TextInput
          autoCapitalize= "none"
          onChangeText={(val) => this.setState({selfIntro: val})}
          style={styles.setting_input} placeholder="입력"/>
      </View>
    )
  }
}

function mapStateToProps(state){
  return {
    user: state.permissions.user
  }
}

export default connect(mapStateToProps,actions)(SelfIntro)
