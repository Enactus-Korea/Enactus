import React, {PureComponent} from 'react'
import {View, Text, Dimensions, FlatList, TouchableOpacity} from 'react-native'
import styles from './styles'
import ProjectList from './ProjectList'
import moment from 'moment-timezone'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ProjectTimeline from './ProjectTimeline'



class ProjectLine extends PureComponent {
  state = {
    history: this.props.history,
  }
  _keyExtractor = (item, index) => index;
  componentDidMount(){
    this.props.isGetUsersProjects(this.props._id)
  }
  _renderItem = (item, years) => {
    let height = { height: 80*years.length }

    return (
      <View style={[styles.pro_comp, height]}>
        <View style={styles.h_line}/>
        <View style={styles.timeline}>
          <View style={styles.timelineYear}>
            <Text style={styles.timelineYearText}>{item.item}</Text>
          </View>

          {years.reverse().map((p, i) => {
            let date = new Date(p.started).getMonth()+1
            return(
              <View key={i} style={{marginVertical: 10}}>
                <View style={{flexDirection: 'row', alignItems: "center", top: 10}}>
                  <View style={{width: 14, height: 14, borderRadius: 7, backgroundColor: "#FFC122", padding: 2, left: -9}}>
                    <MaterialIcons name={"assignment"} size={10} style={{color: '#FFF', backgroundColor: "transparent"}} />
                  </View>
                  <Text style={{marginLeft: 10, fontSize: 12}}>{date}월</Text>
                </View>
                <View style={{marginLeft: 60 , top: -10}}>
                  {p.name
                    ? <View style={{flexDirection: "row", alignItems: "flex-end", marginBottom: 5}}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("Project_Detail", {...this.props.projectDetails[p.name]})}>
                          <Text style={{fontSize: 18, fontWeight:"800", marginRight: 5}}>{p.name}</Text>
                        </TouchableOpacity>
                        <Text style={{fontSize: 14, fontWeight:"600"}}>{p.role}</Text>
                      </View>
                    : <Text style={{fontSize: 14, fontWeight:"600"}}>{p.role}</Text>}
                  <Text style={{fontSize: 12, fontWeight:"400"}}>{p.desc}</Text>
                </View>
              </View>
          )})}
        </View>
      </View>
    )
  };
  _renderJoined = () => {
    let getDate = new Date(this.props.joined),
        getYear = getDate.getFullYear(),
        getMonth = getDate.getMonth()+1;
    return (
      <View style={[styles.pro_comp, {height: 30}]}>
        <View style={styles.h_line}/>

        <View style={styles.timeline}>
          <View style={styles.timelineYear}>
            <Text style={styles.timelineYearText}>{getYear}</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: "center", top: -20}}>
            <Text style={{marginLeft: 30, fontSize: 12}}>{getMonth}월</Text>
            <Text style={{ marginLeft: 10, fontSize: 14, fontWeight:"600"}} >인액터스 가입</Text>
          </View>
        </View>
      </View>
    )
  }
  render(){
    let histo = [],
        offi = this.props.history.official.map(o => histo.push(o)),
        pros = this.props.history.projects.map(p => p.history),
        years = {};
        pros.map(h => h.map(d => histo.push(d)));
        histo.forEach((h) => {
          let date = new Date(h.started)
          	year = date.getFullYear().toString();
          if(Object.keys(years).indexOf(year) === -1){
          	years[year] = []
          	years[year].push(h)
          } else {
          	years[year].push(h)
          }
        })
        histo.sort((a, b) => a.started > b.started ? 1 : (a.started < b.started ? -1 : 0));
        histo.reverse();
    let {height, width} = Dimensions.get('window')
    return (
      <View style={{flex: 1, height: height*0.66}}>
        <View style={{width, height: (height*0.66)-(95*histo.length)}}></View>
        <FlatList
          data={Object.keys(years).reverse()}
          style={styles.proj_comp}
          keyExtractor={this._keyExtractor}
          renderItem={(item) => this._renderItem(item, years[item.item])}
          ListFooterComponent={this._renderJoined}
          // viewabilityConfig={VIEWABILITY_CONFIG}
        />
      </View>
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
