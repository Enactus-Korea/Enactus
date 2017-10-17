import React, { Component, PureComponent } from 'react'
import {View,Text,TouchableHighlight, TextInput, ActionSheetIOS} from 'react-native';
import styles from './styles'
import SelectModal from './SelectModal'


const ProjectSetting = (props) => {
  console.log("ProjectSetting",props);
  let params = props.navigation.state.params;
  return params ? <SettingProject {...params} edit={true}/> : <SettingProject edit={false}/>
}
export default ProjectSetting;


//TODO : 고유 ID 로 생성하기
let historyEle = 0
class SettingProject extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: props.name ? props.name : "",
      ele: props.history ? props.history : [],
      key: 1
    }
  }

  showActionSheet = () => {
    //TODO: 유저 학교에 따라서 프로젝트 불러 오도록
    var BUTTONS = [ '프로젝트1', '프로젝트2'];
    ActionSheetIOS.showActionSheetWithOptions({
      options: BUTTONS,
      title: '프로젝트',
    },
    (buttonIndex) => this.setState({ name: BUTTONS[buttonIndex] }));
  };
  addHistory() {
    console.log("addHistory AAA")
    this.state.ele.push({eleKey : historyEle++});
    this.setState({ ele: this.state.ele})
    console.log("addHistory BBB", historyEle, this.state.ele);
  }
  deleteHistory(dltKey) {
    let ele = this.state.ele.filter( d => d.eleKey !== dltKey);
    console.log("deleteHistory",this.state.ele, historyEle);
    this.setState({ ele })
  }
  render(){
    console.log(this.props);
    let ele2 = this.state.ele.map((history, i) => {
      console.log("ele2 work", typeof history, i);
      return <View key={i}>
                <TouchableHighlight onPress={() => this.deleteHistory(i)}>
                  <Text style={styles.projectSelectsName}>삭제</Text>
                </TouchableHighlight>
                {typeof history !== "number" ? <ProjectHistoryForm eleKey={i} {...history} /> : <ProjectHistoryForm eleKey={i} />}
             </View>
    })
    return (
      <View style={styles.historyContainer}>
        <View style={styles.projectSelects}>
          <Text style={styles.projectSelectsName}>프로젝트</Text>
          {this.state.name
            ? <Text>{this.state.name}</Text>
            : <TouchableHighlight onPress={this.showActionSheet}>
                <Text>"프로젝트를 선택해주세요.</Text>
              </TouchableHighlight>
          }
        </View>
        <View>
          <View style={styles.projectSelects}>
            <Text style={styles.projectSelectsName}>히스토리</Text>
            <TouchableHighlight onPress={() => this.addHistory()}>
              <Text style={styles.projectSelectsName}>추가</Text>
            </TouchableHighlight>
          </View>
          {ele2}
        </View>
        <TouchableHighlight>
          <Text>{this.props.edit ? "수정하기" : "추가하기" }</Text>
        </TouchableHighlight>
      </View>
    )
  }
}


class ProjectHistoryForm extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
      started: props.started ? props.started : "",
      finished: props.finished ? props.finished : "",
      role: props.role ? props.role : "역할을 선택해주세요.",
      desc: props.desc ? props.desc : "",
      isVisible: false,
    }
  }
  showActionSheet = () => {
    var BUTTONS = [ 'PM', '팀원'];
    ActionSheetIOS.showActionSheetWithOptions({
      options: BUTTONS,
      title: '역할',
    },
    (buttonIndex) => this.setState({ role: BUTTONS[buttonIndex] }));
  };
  handleSelectOptionsModal = () => {
    this.setState({ isVisible: !this.state.isVisible})
  }

  render(){
    console.log("ProjectHistoryForm",this.props);
    let years = ["2012","2013","2014"]
    return (
      <View key={this.props.eleKey}>
        <View style={styles.projectSelects}>
          <Text style={styles.projectSelectsName}>시작날짜</Text>
          <SelectModal
            selectItems={years}
            handleModal={this.handleSelectOptionsModal}
            isVisible={this.state.isVisible}
          />
          <TouchableHighlight
            onPress={() => this.handleSelectOptionsModal()}
            style={{height: 40, width: 100, borderColor: 'gray', borderWidth: 1}}>
            <Text>년</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={{height: 40, width: 100, borderColor: 'gray', borderWidth: 1}}>
            <Text>월</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.projectSelects}>
          <Text style={styles.projectSelectsName}>종료날짜</Text>
          <TouchableHighlight
            // onPress={() => this.handleSelectOptionsModal()}
            style={{height: 40, width: 100, borderColor: 'gray', borderWidth: 1}}>
            <Text>년</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={{height: 40, width: 100, borderColor: 'gray', borderWidth: 1}}>
            <Text>월</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.projectSelects}>
          <Text style={styles.projectSelectsName}>역할</Text>
          <TouchableHighlight onPress={this.showActionSheet} style={{height: 40, width: 200, borderColor: 'gray', borderWidth: 1}}>
            <Text>{this.state.role}</Text>
          </TouchableHighlight>

        </View>
        <View style={styles.projectSelects}>
          <Text style={styles.projectSelectsName}>설명</Text>
          <TextInput
              returnKeyType="done"
              placeholder="간략한 한 줄 설명을 기입해주세요."
              style={{height: 40, width: 200, borderColor: 'gray', "fontSize" : 12, borderWidth: 1}}
              onChangeText={(desc) => this.setState({desc})}
              value={this.state.desc}
            />
        </View>
      </View>
    )
  }
}
