import React, {PureComponent} from 'react'
import {View , Text, TextInput ,TouchableOpacity, FlatList, Image } from 'react-native'
import styles from './styles'
import moment from 'moment'
import 'moment/locale/ko'; // ko로 locale 설정
import {connect} from 'react-redux'

const NotiCont = (props) => {
  console.log("NotiCont", props)
  let ago = moment(props.created).startOf(props.gap).fromNow()
  let FAKE = {
    "user" : require('../../assets/user.png'),
    "enactus" : require('../../assets/enactus.jpeg')
  }

  return (
    <View style={styles.notiCont}>
      <View style={styles.notiImg}>
        <Image style={styles.image} source={FAKE[props.userImg]}/>
      </View>
      <View style={styles.notiCtx}>
        <Text style={styles.notiText}><Text style={styles.notiFrom}>{props.from}</Text> {props.notiText}</Text>
        <Text style={styles.notiTime}>{ago}</Text>
      </View>
    </View>
  )
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
   }
  }

  componentWillMount() {

  }
  componentDidMount(){

  }

  _keyExtractor = (item, index) => index;
  _renderItem = ({item}) => {
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
    if(item.notiType === "general"){
      return <NotiCont {...item} notiText="전체공지가 있습니다." gap={gap}/>
    }
    return <NotiCont {...item} notiText="님이 회원님의 글에 댓글을 남겼습니다." gap={gap}/>
  };

  render(){
    let fakeNoti = [{
      "from" : "이고은",
      "userImg" : "user",
      "created" : new Date("2017-09-19T01:14:11+0900"),
      "notiType" : "personal"
    }, {
      "from" : "인액터스 코리아",
      "userImg" : "enactus",
      "created" : new Date("2017-09-18T01:14:11+0900"),
      "notiType" : "general"
    }]
    return(
      <FlatList
        data={fakeNoti}
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
