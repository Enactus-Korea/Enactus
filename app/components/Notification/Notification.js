import React, {PureComponent} from 'react'
import {View , Text, TextInput ,TouchableOpacity, FlatList, Image } from 'react-native'
import styles from './styles'
import moment from 'moment'
import 'moment/locale/ko'; // ko로 locale 설정
import { connect } from 'react-redux'



import app_json from '../../../app.json';
const REQUEST_URL = app_json.REQUEST_URL || "http://localhost:9000";
const methodGet = {
  method: 'GET',
  headers: {
    'Accept': 'application/json'
  }
}

class NotiCont extends PureComponent {
  constructor(props){
    super(props)
    this.handlePressNotification = this.handlePressNotification.bind(this)
  }
  handlePressNotification(){
    fetch(`${REQUEST_URL}/feed/${this.props.notiEventFrom}`, { ...methodGet })
      .then(res => res.json())
      .then(res => {
        let detailData = {
          ...res.feed,
          user : {
            ...this.props.user
          }
        }
        this.props.navigation.navigate("Detail", { ...detailData })
      })
      .catch(err => console.log(err))

  }
  render() {
    let ago = moment(this.props.created).startOf(this.props.gap).fromNow()

    return (
      <TouchableOpacity style={styles.notiCont} onPress={() => this.handlePressNotification()}>
        {/* <View style={styles.notiImg}>
          <Image style={styles.image} source={FAKE[props.userImg]}/>
        </View> */}
        <View style={styles.notiCtx}>
          <Text style={styles.notiText}><Text style={styles.notiFrom}>{this.props.notiByUserName}</Text> {this.props.notiText}</Text>
          <Text style={styles.notiTime}>{ago}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}


class SeparatorComponent extends PureComponent {
  render() {
    return <View style={{backgroundColor: 'rgb(200, 199, 204)', height:1}} />;
  }
}

class Notification extends PureComponent {

  constructor(props){
   super(props)
   this.state = {
     notification : []
   }
  }

  componentWillMount() {
    let { _id } = this.props.user;
    fetch(`${REQUEST_URL}/user/get/notification/${_id}`,{ ...methodGet })
      .then(res => res.json())
      .then(res => {
        this.setState({
          notification: res.notification
        })
      })
      .catch(err => console.log(err))
  }
  componentDidMount(){

  }

  _keyExtractor = (item, index) => index;
  _renderItem = ({item}) => {
    console.log(this.props , "render");
    let user = {
      _id: this.props.user._id,
      name: this.props.user.name
    }
    let now = new Date(),
        gap = now - item.created;
    gap = gap < 3600000 ? 'hour' : 'day';
    moment.updateLocale('ko', {
    relativeTime: {
          future: "%s 후",
          past: "%s 전",
          s: "방금",
          ss: "%d초",
          m: "1분",
          mm: "%d분",
          h: "1시간",
          hh: "%d시간",
          d: "1일",
          dd: "%d일",
          M: "1달",
          MM: "%d달",
          y: "1년",
          yy: "%d년"
      }
    });
    let notiText = {
      "general" : "전체공지가 있습니다.",
      "comment" : "님이 회원님의 글에 댓글을 남겼습니다.",
      "like" : "님이 회원님의 글을 좋아합니다."
    };
    return <NotiCont {...item} notiText={notiText[item.notiType]} gap={gap} navigation={this.props.navigation} user={user} />
  };

  render(){
    return(
      <FlatList
        data={this.state.notification}
        ItemSeparatorComponent={SeparatorComponent}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    )

  }
}

const mapStateToProps = (state) => ({
  user: state.permissions.user
})

export default connect(mapStateToProps, null)(Notification)
