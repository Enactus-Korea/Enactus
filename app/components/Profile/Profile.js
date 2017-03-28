import React, {Component} from 'react'
import {connect} from 'react-redux';
import {View, Text, Image, TouchableHighlight, TouchableOpacity} from 'react-native';
import ProfUserImg from './ProfUserImg'
import styles from './styles'

class Profile extends Component{
  render(){
    const {user, token, navigation} = this.props;
    if(token && user){
      return(
        <View>
          <View style={styles.profile_top}>
            <ProfUserImg />
            <Text style={styles.profile_name}>{user.name}</Text>
            <Text style={styles.profile_univ}>{user.univ} 인액터스</Text>
            {user.selfIntro
              ? <Text style={styles.profile_selfIntro}>{this.props.user.selfIntro}</Text>
              : <TouchableHighlight
                  style={styles.setting_selfInt}
                  onPress={() => navigation.navigate('SelfIntro_Setting')}>
                  <Text style={styles.setting_txt}>상태메세지를 입력해주세요.</Text>
                </TouchableHighlight>
              }
          </View>
          <View style={styles.profile_btm}>
            {/* {user.projects.length > 0
              ? <Text>나의 프로젝트들들</Text>
              : <TouchableHighlight
                  style={styles.setting_proj}
                  onPress={() => navigation.navigate('Project_Setting')}>
                  <Text style={styles.setting_txt}>프로젝트를 등록해주세요.</Text>
                </TouchableHighlight>
            } */}
          </View>
        </View>
      )
    } else {
      return(
        <View>
          <Text>로그인을 해주세요.</Text>
        </View>
      )
    }
  }
}

const mapStateToProps = (state) => ({
  user: state.permissions.user,
  token: state.permissions.token
})

export default connect(mapStateToProps)(Profile)


// export default Profile;
