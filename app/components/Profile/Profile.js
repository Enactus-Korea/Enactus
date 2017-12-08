import React, {PureComponent} from 'react'
import {connect} from 'react-redux';
import * as actions from './actions'
import {View, Text, Image, TouchableHighlight, TouchableOpacity, ListView} from 'react-native';
import ProfUserImg from './ProfUserImg'
import styles from './styles'
// import ProjectLine from './ProjectLine'
import ProjectList from './ProjectList'
import GridMyFeedList from './GridMyFeedList'
import UnFoldedMyFeedList from './UnFoldedMyFeedList'

class Profile extends PureComponent{
  constructor(props){
    super(props)
    this.state = {
      list : false,
      status: false,
      profileUser: {},
      // user: {},
      // projects: {},
      data: []
    }
  }
  componentDidMount(){
    let { params } = this.props.navigation.state;
    if(params) {
      console.log("from Member");
      this.props.isFetchFeedbyUser(params._id)
      this.props.isGetUsersProjects(params._id)
      this.setState({
        profileUser: { ...params },
        userStatus: "member"
      })
    } else {
      console.log("from User");
      this.props.isFetchFeedbyUser(this.props.user._id)
      this.props.isGetUsersProjects(this.props.user._id)
      this.setState({
        profileUser: { ...this.props.user },
        userStatus: "self"
      })
    }
  }
  componentWillReceiveProps(newProps){
    if(newProps.feeds !== this.props.feeds) {
      this.setState({
        data: newProps.feeds,
        status: true
      })
    }
  }
  render(){
    const { navigation, joined, user } = this.props, { profileUser } = this.state;
    // debugger
    // let joinedState = Object.keys(joined)
    console.log(this.state.data);
    if(profileUser._id && this.state.status){
      return(
        <View style={{flex: 1, flexDirection: "column", justifyContent: 'space-between'}}>
          <View style={styles.profile_top}>
            <ProfUserImg userImg={profileUser.userImg} userStatus={this.state.userStatus}/>
            <Text style={styles.profile_name}>{profileUser.name}</Text>
            <View style={styles.proj_box_cont}>
              <Text style={styles.profile_univ}>{profileUser.univ} 인액터스</Text>
              {/* {profileUser.projects.map((pro, i) => <ProjectList key={i} project={joined[pro.name].detail} navigation={navigation}/>) } */}
            </View>
            {profileUser.selfIntro
              ? <Text style={styles.profile_selfIntro}>{profileUser.selfIntro}</Text>
              : <Text></Text>
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
                ? <UnFoldedMyFeedList data={this.state.data} user={user} navigation={navigation} userStatus={this.state.userStatus}/>
                : <GridMyFeedList data={this.state.data} user={user} navigation={navigation} userStatus={this.state.userStatus}/>
              }
            </View>
          </View>
          {/* {profileUser._id && <ProjectLine navigation={navigation} isGetUsersProjects={this.props.isGetUsersProjects} projectDetails={joined} {...user}/>} */}
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
  joined: state.profile.joined,
  feeds: state.profile.feeds,
})

export default connect(mapStateToProps, actions)(Profile)
