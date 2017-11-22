import React, { PureComponent } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import styles from './styles.js'
import RegisterButton from './RegisterButton'

export default class RegisterInput extends PureComponent {
  render(){
    let place = {
      "email" : "이메일",
      "password" : "비밀번호",
      "passwordConfirm" : "비밀번호",
      "name" : "이름",
      "intro" : "소개"
    }
    return (
      <View style={styles[this.props.inputViewStyle]}>
        <TextInput
          autoCorrect={false}
          secureTextEntry={this.props.secureTextEntry}
          returnKeyType="done"
          keyboardType={this.props.keyboardType}
          ref={this.props.inputStyle}
          autoCapitalize= "none"
          value={this.props.stateValue}
          style={styles[this.props.inputStyle]}
          onChangeText={(text) => this.props.handleChange(text, this.props.inputType)}
          placeholder={`${place[this.props.inputType]} 을(를) 입력해주세요.`}
        />
        {
          this.props.inputType === "email"
            && <RegisterButton
                buttonStyle={this.props.buttonStyle}
                handlePress={this.props.handlePress}>
                 <Text style={styles.buttonText}>인액터스 인증하기</Text>
               </RegisterButton>
        }
      </View>
    )
  }
}


{/* <View style={styles.line}>
  <TextInput
    ref='password'
    autoCapitalize= "none"
    onChangeText={(text) => this.setState({password: text})}
    style={styles.input} placeholder="비밀번호"
    secureTextEntry={true}/>
</View>  */}


//   <TouchableOpacity
  //   style={styles.email_button}
  //   onPress={() => this.isValidEmail(this.state.email)}>
  //   <Text style={styles.buttonText}>인액터스 인증하기</Text>
  // </TouchableOpacity>
