import React, {Component} from 'react'
import {View, Text} from 'react-native'
import styles from './styles'
import ProjectList from './ProjectList'

class ProjectLine extends Component {
  state = {
    projects: this.props.joined,
    loaded: false
  }
  componentDidMount(){
    this.props.isGetUsersProjects(this.props.user._id)
  }
  componentWillReceiveProps(newProps){
    console.log(newProps.joined);
    if(newProps.joined !== this.props.joined){
      this.setState({projects:newProps.joined, loaded: true})
    }
  }
  renderProjects = (p,i) => <ProjectList key={i} p={p} navigation={this.props.navigation}/>
  render(){
    if(!this.state.loaded){
      return(
        <View style={styles.profile_btm}>
          <Text>프로젝트 불러오는 중</Text>
        </View>
      )
    } else {
      let pro = Object.values(this.state.projects)
      return(
        <View style={styles.profile_btm}>
          {pro.map(this.renderProjects)}
        </View>
      )
    }

  }
}



export default ProjectLine


{/* {this.state.projects && (
  <View>
  {this.state.projects.length > 0
    ? this.state.projects.map(this.renderProjects)
    : <TouchableHighlight
        style={styles.setting_proj}
        onPress={() => navigation.navigate('Project_Setting')}>
        <Text style={styles.setting_txt}>프로젝트를 등록해주세요.</Text>
      </TouchableHighlight>}
  </View>
)} */}
