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
      // projects: {},
      data: []
    }
  }
  componentDidMount(){
    this.props.isFetchFeedbyUser(this.props.user._id)
    this.props.isGetUsersProjects(this.props.user._id)
    this.setState({data: this.props.feeds, status: true })
  }
  render(){
    const { user, token, navigation, joined } = this.props;
    let joinedState = Object.keys(joined)
    if(joinedState.length > 0){
      return(
        <View style={{flex: 1, flexDirection: "column", justifyContent: 'space-between'}}>
          <View style={styles.profile_top}>
            <ProfUserImg userImg={user.userImg} />
            <Text style={styles.profile_name}>{user.name}</Text>
            <View style={styles.proj_box_cont}>
              <Text style={styles.profile_univ}>{user.univ} 인액터스</Text>
              {user.projects.map((pro, i) => <ProjectList key={i} project={joined[pro.name].detail} navigation={navigation}/>) }
            </View>
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
                ? <UnFoldedMyFeedList data={this.state.data} user={user} navigation={navigation}/>
                : <GridMyFeedList data={this.state.data} user={user} navigation={navigation}/>
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
