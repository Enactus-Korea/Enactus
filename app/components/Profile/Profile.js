import React, {Component} from 'react'
import {connect} from 'react-redux';
import * as actions from './actions'
import {View, Text, Image, TouchableHighlight, TouchableOpacity, ListView} from 'react-native';
import ProfUserImg from './ProfUserImg'
import styles from './styles'
import ProjectLine from './ProjectLine'

class Profile extends Component{
  state = {
    projects : this.props.user.projects,
  }
  componentWillReceiveProps(newProps){
    if(newProps.user.projects !== this.props.user.projects){
      this.setState({projects: newProps.user.projects})
    }
  }
  render(){
    console.log("ProfileDetail",this.props)
    const {user, token, navigation} = this.props;
    if(token && user){
      return(
        <View>
          <View style={styles.profile_top}>
            <ProfUserImg userImg={user.userImg} />
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
          {user._id && <ProjectLine {...this.props}/>}
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
  token: state.permissions.token,
  joined: state.profile.joined
})

export default connect(mapStateToProps, actions)(Profile)


// export default Profile;
