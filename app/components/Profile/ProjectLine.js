import React, {Component} from 'react'
import {View, Text, Dimensions, FlatList} from 'react-native'
import styles from './styles'
import ProjectList from './ProjectList'
import moment from 'moment-timezone'
import ProjectTimeline from './ProjectTimeline'

// var getMonthsBetween = function(startDate, endDate)
// {
//   let dateList = []
//   let nowDate = moment().format("YYYYMM")
//   if(!endDate) endDate = +nowDate
//
//   for(; startDate < endDate+1 ; startDate++){
//   	if(startDate.toString().slice(4,6) === "13"){
//   		let newYear = +(startDate.toString().slice(0,4)) + 1
//       let newMonth = "01"
//   		startDate = +(newYear.toString() + newMonth)
//   	}
//   	dateList.push(startDate.toString())
//   }
//   return dateList
// }




class ProjectLine extends Component {
  state = {
    history: this.props.history,
  }
  componentDidMount(){
    // this.props.isGetUsersProjects(this.props._id)
  }
  _keyExtractor = (item, index) => index;
  _renderItem = ({item}) => {
    let height = {height: 100},
        getDate = new Date(item.started),
        getYear = getDate.getFullYear(),
        getMonth = getDate.getMonth()+1;
    return (
      <View style={[styles.pro_comp, height]}>
        <View style={styles.h_line}/>
        <View style={styles.timeline}>
          <Text>{item.name}</Text>
          <Text>{item.role}</Text>
          <Text>{item.desc}</Text>
          <Text>{getYear} {getMonth}</Text>
        </View>
      </View>
  )};
  _renderJoined = () => {
    let getDate = new Date(this.props.joined),
        getYear = getDate.getFullYear(),
        getMonth = getDate.getMonth()+1;
    return (
      <View style={styles.pro_comp}>
        <View style={styles.h_line}/>
        <View style={styles.timeline}>
          <Text>
            {getYear} 인액터스 가입
          </Text>
        </View>
      </View>
    )
  }
  render(){
    // let userJoined = moment(this.props.joined).format("YYYYMM")
    // let enacHistory = getMonthsBetween(+userJoined, "").reverse()
    let histo = [],
        offi = this.props.history.official.map(o => histo.push(o)),
        pros = this.props.history.projects.map(p => p.history);

        pros.map(h => h.map(d => histo.push(d)));
        histo.sort((a, b) => a.started > b.started ? 1 : (a.started < b.started ? -1 : 0));
        histo.reverse();

    return (
      <FlatList
        data={histo}
        style={styles.proj_comp}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
        ListFooterComponent={this._renderJoined}
        // viewabilityConfig={VIEWABILITY_CONFIG}
      />
    )
  }
}


export default ProjectLine

//
// let user = {
//     "joined": new Date("2014-03-01T09:00:00+0900"),
//
//     "history" : {
//       "projects" : [
//         {
//           "name": "우드리머",
//           "_id": ObjectId("58ef2bb2df3f05d6b8513fe0"),
//           "history": [{
//             "started": new Date("2016-03-01T09:00:00+0900"),
//             "finished": new Date("2017-03-01T09:00:00+0900"),
//             "role": "팀원",
//             "desc": "기획담당"
//           },{
//             "started": new Date("2015-03-01T09:00:00+0900"),
//             "finished": new Date("2015-10-01T09:00:00+0900"),
//             "role": "PM",
//             "desc": "대상자 탐방 및 등등"
//           }]
//         },{
//           "name": "한땀",
//           "_id": ObjectId("58ef2c24df3f05d6b8513fe1"),
//           "history": [{
//             "started": new Date("2014-03-01T09:00:00+0900"),
//             "finished": new Date("2014-07-01T09:00:00+0900"),
//             "role": "팀원",
//             "desc": "기획담당"
//           }]
//         }
//       ],
//       "official" : [{
//         "role" : "인액터스코리아 인턴",
//         "desc": "PR 담당",
//         "started": new Date("2012-03-01T09:00:00+0900"),
//         "finished": new Date("2013-03-01T09:00:00+0900")
//       }]
//     }
//
// }
