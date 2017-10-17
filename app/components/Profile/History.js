import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import * as actions from './actions'
import {View, Text, TouchableOpacity, Picker, Animated, Modal, Button, Alert, SectionList} from 'react-native'
import Dimensions from 'Dimensions'
import styles from './styles'
import moment from 'moment-timezone'


const AnimatedSectionList = Animated.createAnimatedComponent(SectionList);

const VIEWABILITY_CONFIG = {
  minimumViewTime: 3000,
  viewAreaCoveragePercentThreshold: 100,
  waitForInteraction: true,
};





class History extends PureComponent{
  static navigationOptions = ({navigation}) => ({
    headerTitle: '히스토리',
    headerStyle: { backgroundColor: '#30333C' },
    headerTintColor: 'white'
  })
  state = {

  }
  componentWillMount() {
    this.animatedValue = new Animated.Value(Dimensions.get('window').width)
  }
  componentDidMount(){
    this.props.isFetchUnivProjects(this.props.user.univ)
  }
  renderHistoryContent(official, projects, nav){
    return([
      { renderItem: (item) => this.renderProject(item.item, nav),
        key: '프로젝트',
        data: projects
      },
      { renderItem: (item) => this.renderHistory(item.item, nav),
        key: '인액터스 활동',
        data: official
      }
    ])
  }
  renderSectionHeader( section , navigation){
    console.log("renderSectionHeader :", section.key , navigation);
    let setting = section.key === "프로젝트" ? "Project_Setting" : 'Activity_Setting'
    return (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionHeaderText}>{section.key}</Text>
      <TouchableOpacity onPress={() => navigation.navigate(setting)}><Text>추가</Text></TouchableOpacity>
    </View>
  )}
  renderHistory(item, nav){
    console.log("renderHistory :",item, nav);
    return(
    <View style={styles.historyContainer}>
      <View>
        <Text>{item.role} {moment(item.started).tz('Asia/Seoul').format('YYYY년MM월')}</Text>
        <TouchableOpacity onPress={() => nav.navigate('Activity_Setting', {...item})}><Text>수정</Text></TouchableOpacity>
      </View>
      <Text>{item.desc}</Text>
    </View>
  )}
  renderProject(item, nav){
    console.log("renderProject :", item, nav);
    return(
    <View style={styles.historyContainer}>
      <View>
        <Text>{item.name}</Text>
        <TouchableOpacity onPress={() => nav.navigate('Project_Setting', {...item})}><Text>수정</Text></TouchableOpacity>
      </View>
      {item.history.map( (h, i) => (
        <View key={i}>
          <Text>{h.role}</Text>
          <Text>{moment(h.started).tz('Asia/Seoul').format('YYYY년MM월')}</Text>
          <Text>{h.desc}</Text>
        </View>
      ))}
    </View>
  )}
  render(){
    let {navigation, user} = this.props,
        { official, projects } = user.history;
    console.log("project : ",this.props)
    return(
      <AnimatedSectionList
        keyExtractor={(item, i) => i}
        renderSectionHeader={(item) => this.renderSectionHeader(item.section , navigation)}
        sections={this.renderHistoryContent(official, projects, navigation)}
        viewabilityConfig={VIEWABILITY_CONFIG}
      />
    )
  }
}


const mapStateToProps = (state) => ({
  user: state.permissions.user
})

export default connect(mapStateToProps, actions)(History)
