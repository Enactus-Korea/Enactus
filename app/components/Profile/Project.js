import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from './actions'
import {View, Text, TouchableOpacity, Picker, Modal, Button, Alert} from 'react-native'
import Dimensions from 'Dimensions'
import SelectModal from './SelectModal'
import styles from './styles'

//TODO: 프로젝트 선택하지 않았을 경우 먼저 선택하라는 알림 띄우기
class Project extends Component{
  static navigationOptions = () => ({
    header: ({state}) => ({
      title: '프로젝트',
      right: <Button title='완료' color='#fff' onPress={() => state.params.handleSave()} />,
      style: {
        backgroundColor: '#30333C'
      },
      tintColor: 'white'
    })
  })
  state = {
    projectList: this.props.projects,
    name: '',
    startedY: '',
    startedM: '',
    exitedY: '',
    exitedM: '',
    PMVisible: false,
    SYVisible: false,
    SMVisible: false,
    EYVisible: false,
    EMVisible: false,
  }
  componentDidMount(){
    this.props.navigation.setParams({handleSave: this.handleSave})
    this.props.isFetchUnivProjects(this.props.user.univ)
  }
  componentWillReceiveProps(newProps){
    this.setState({projectList: newProps.projects})
  }
  handleModal = (visible) => {
    this.setState({[visible]: !this.state[visible]})
  }
  handleValueChange = (target, val) => {
    this.setState({[target]: val})
  }
  handleSave = () => {
    this.props.isModifiedProject(this.state, this.props.user._id)
    Alert.alert('프로젝트 등록', '프로젝트를 등록 하시겠습니까?', [{'text':'확인', onPress: () => {this.props.navigation.navigate('Profile')}}])
  }
  render(){
    let projectItem = this.state.projectList.map(l => l.name),
        countYlist = [],
        countMlist = [];
    if(this.state.name){
      let time = this.state.projectList.find(l => l.name === this.state.name).created.split("/")[0],
          nowDate = new Date();
      for(let y = time; y < nowDate.getFullYear()+1 ;y++){
        countYlist.push(y.toString());
      }
      countMlist.push('01','02','03','04','05','06','07','08','09','10','11','12')
    }
    return(
      <View>
        <View style={styles.projct_row}>
          <Text style={styles.projct_row_title}>프로젝트 명</Text>
          <TouchableOpacity onPress={() => this.handleModal('PMVisible')}>
            <Text>{this.state.name ? this.state.name : '프로젝트 명을 선택하세요.'}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.projct_row}>
          <Text style={styles.projct_row_title}>시작년도</Text>
          <TouchableOpacity
            style={styles.projct_row_time}
            onPress={() => this.handleModal('SYVisible')}>
            <Text>{this.state.startedY ? this.state.startedY : '년도 선택' }</Text>
          </TouchableOpacity>
          <Text style={{marginRight: 10}}>/</Text>
          <TouchableOpacity
            style={styles.projct_row_time}
            onPress={() => this.handleModal('SMVisible')}>
            <Text>{this.state.startedM ? this.state.startedM : '월 선택' }</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.projct_exit}>
          <Text style={{fontSize: 8, color: "#5e5e5e", marginBottom: 3}}>진행 중인 경우 공란으로 두세요.</Text>
          <View style={styles.projct_exit_row}>
            <Text style={styles.projct_row_title}>종료년도</Text>
            <TouchableOpacity
              style={styles.projct_row_time}
              onPress={() => this.handleModal('EYVisible')}>
              <Text>{this.state.exitedY ? this.state.exitedY : '년도 선택' }</Text>
            </TouchableOpacity>
            <Text style={{marginRight: 10}}>/</Text>
            <TouchableOpacity
              style={styles.projct_row_time}
              onPress={() => this.handleModal('EMVisible')}>
              <Text>{this.state.exitedM ? this.state.exitedM : '월 선택' }</Text>
            </TouchableOpacity>
          </View>
        </View>

        <SelectModal
          isVisible={this.state.PMVisible}
          typeOf={'PMVisible'}
          handleCloseModal={this.handleModal}
          handleValueChange={this.handleValueChange}
          selectedValue={this.state.name}
          targetValue={'name'}
          selectItems={projectItem}
         />
         <SelectModal
           isVisible={this.state.SYVisible}
           typeOf={'SYVisible'}
           handleCloseModal={this.handleModal}
           handleValueChange={this.handleValueChange}
           selectedValue={this.state.startedY}
           targetValue={'startedY'}
           selectItems={countYlist}
          />
          <SelectModal
            isVisible={this.state.SMVisible}
            typeOf={'SMVisible'}
            handleCloseModal={this.handleModal}
            handleValueChange={this.handleValueChange}
            selectedValue={this.state.startedM}
            targetValue={'startedM'}
            selectItems={countMlist}
           />
           <SelectModal
             isVisible={this.state.EYVisible}
             typeOf={'EYVisible'}
             handleCloseModal={this.handleModal}
             handleValueChange={this.handleValueChange}
             selectedValue={this.state.exitedY}
             targetValue={'exitedY'}
             selectItems={countYlist}
            />
            <SelectModal
              isVisible={this.state.EMVisible}
              typeOf={'EMVisible'}
              handleCloseModal={this.handleModal}
              handleValueChange={this.handleValueChange}
              selectedValue={this.state.exitedM}
              targetValue={'exitedM'}
              selectItems={countMlist}
             />
      </View>
    )
  }
}


const mapStateToProps = (state) => ({
  projects: state.profile.projects,
  user: state.permissions.user
})

export default connect(mapStateToProps, actions)(Project)
