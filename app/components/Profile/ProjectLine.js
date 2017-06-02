import React, {Component} from 'react'
import {View, Text, Dimensions} from 'react-native'
import styles from './styles'
import ProjectList from './ProjectList'
import moment from 'moment-timezone'
import ProjectTimeline from './ProjectTimeline'

var getMonthsBetween = function(startDate, endDate)
{
  let dateList = []
  let nowDate = moment().format("YYYYMM")
  if(!endDate) endDate = parseInt(nowDate)

  for(; startDate < endDate+1 ; startDate++){
  	if(startDate.toString().slice(4,6) === "13"){
  		let newYear = parseInt(startDate.toString().slice(0,4)) + 1
      let newMonth = "01"
  		startDate = parseInt(newYear.toString() + newMonth)
  	}
  	dateList.push(startDate.toString())
  }
  return dateList
}




class ProjectLine extends Component {
  state = {
    projects: this.props.joined,
    loaded: false
  }
  componentDidMount(){
    this.props.isGetUsersProjects(this.props.user._id)
  }
  componentWillReceiveProps(newProps){
    if(newProps.joined !== this.props.joined){
      this.setState({projects:newProps.joined, loaded: true})
    }
  }
  renderProjects = (p,i) => <ProjectList key={i} p={p} navigation={this.props.navigation}/>
  render(){
    // TODO: {pro.map(this.renderProjects)}
    let userJoined = moment(this.props.user.joined).format("YYYYMM")
    let enacHistory = getMonthsBetween(parseInt(userJoined), "").reverse()
    if(!this.state.loaded){
      return(
        <View style={styles.profile_btm}>
          <Text>프로젝트 불러오는 중</Text>
        </View>
      )
    } else {
      let pro = Object.values(this.state.projects)
      let projHistory = pro.map(date => {
        let { startedY, startedM, exitedY, exitedM } = date.actived;
        return getMonthsBetween(parseInt(startedY+startedM), parseInt(exitedY+exitedM))
      })
      let proJoin = projHistory.join().split(",")
      let boo = []
      enacHistory.map(date => boo.push(proJoin.indexOf(date) !== -1 ? true : false))
      let temp = [], count = []
      for(i=0; i < boo.length ; i++) {
      	if(boo[i] === boo[i+1]){
        	temp.push(boo[i])
        }else{
        	count.push({[temp.slice(-1)]:temp.length})
        	temp = []
        	temp.push(boo[i])
        }
      }
      console.log(projHistory, count)
      return(
        <View style={styles.profile_btm}>
          <View>
            {enacHistory.map((date, i) => {
              let lineColor = proJoin.indexOf(date) !== -1 ? true : false
              return <ProjectTimeline key={i} lineHeight={enacHistory.length} lineColor={lineColor} />
            })}
          </View>
          <View>

          </View>
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
