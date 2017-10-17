import React, {PureComponent} from 'react'
import {connect} from 'react-redux';
import * as actions from './actions'
import {View, Text, Image, TouchableHighlight, TouchableOpacity, ListView} from 'react-native';
import ProfUserImg from './ProfUserImg'
import styles from './styles'
import ProjectLine from './ProjectLine'
import GridMyFeedList from './GridMyFeedList'
import UnFoldedMyFeedList from './UnFoldedMyFeedList'

class Profile extends PureComponent{
  // state = {
  //   projects : this.props.user.projects,
  // }
  // componentWillReceiveProps(newProps){
  //   if(newProps.user.projects !== this.props.user.projects){
  //     this.setState({projects: newProps.user.projects})
  //   }
  // }
  constructor(props){
    super(props)
    this.state = {
      list : false,
      feedStatus: false,
      data: []
    }
  }
  componentDidMount(){
    this.props.isFetchFeedbyUser(this.props.user._id)
    this.setState({feedStatus: true, data: this.props.feeds})
  }
  render(){
    // console.log("ProfileDetail",this.props.feeds)
    const {user, token, navigation, joined} = this.props;
    if(token && user){
      return(
        <View style={{flex: 1, flexDirection: "column", justifyContent: 'space-between'}}>
          <View style={styles.profile_top}>
            <ProfUserImg userImg={user.userImg} />
            <Text style={styles.profile_name}>{user.name}</Text>
            <Text style={styles.profile_univ}>{user.univ} 인액터스</Text>
            {user.selfIntro
              ? <Text style={styles.profile_selfIntro}>{user.selfIntro}</Text>
              : <TouchableHighlight
                  style={styles.setting_selfInt}
                  onPress={() => navigation.navigate('SelfIntro_Setting')}>
                  <Text style={styles.setting_txt}>상태메세지를 입력해주세요.</Text>
                </TouchableHighlight>
            }
          </View>
          <View style={styles.profile_btm}>
            <View style={styles.profile_btm_header}>
              <TouchableOpacity
                style={styles.profile_btm_header_menu}
                onPress={() => this.setState({"list": false})}>
                <Text>격자형 보기</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.profile_btm_header_menu}
                onPress={() => this.setState({"list": true})}>
                <Text>리스트형 보기</Text>
              </TouchableOpacity>
            </View>
            <View style={{flex:1}}>
              {this.state.list
                ? <UnFoldedMyFeedList data={this.state.data} user={user}/>
                : <GridMyFeedList data={this.state.data} user={user}/>
              }
            </View>
          </View>
          {/* {user._id && <ProjectLine navigation={navigation} isGetUsersProjects={this.props.isGetUsersProjects} projectDetails={joined} {...user}/>} */}
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
  joined: state.profile.joined,
  feeds: state.profile.feeds,
})

export default connect(mapStateToProps, actions)(Profile)


// export default Profile;
