import React from 'react'
import * as actions from './actions'
import {connect} from 'react-redux'
import {Text, TouchableOpacity, View, TextInput, Button, Image} from 'react-native'
import FeedComp from './FeedComp'
import styles from './styles'
import moment from 'moment-timezone'


class FeedDetail extends React.PureComponent{
  state = {
    comment: '',
    cl: '',
    loaded: false
  }
  componentDidMount(){
    this.fetchData();
  }
  async fetchData(){
    const REQUEST_URL = "http://localhost:9000",
    id = this.props.navigation.state.params.id;
    let response = await fetch(`${REQUEST_URL}/feed/${id}/comment`);
    let responseJson = await response.json();
    console.log(responseJson);
    return this.setState({
      cl: responseJson.comment,
      loaded: true
    })
  }
  // componentWillReceiveProps(newProps){
  //   this.setState({cl: newProps.navigation.state.params.comment})
  // }
  handlePostComment = () => {
    let feed = this.props.navigation.state.params.id, comment = this.state.comment
    this.props.createFeedCmt(feed, comment, this.props.user)
  }
  renderPostBtn = () => {
    if(this.state.comment){
      return  <TouchableOpacity onPress={this.handlePostComment}>
                <Text style={{fontWeight: '600', color: '#FEC13A'}}>게시</Text>
              </TouchableOpacity>
    } else {
      return <Text style={{fontWeight: '600', color: '#dbdbdb'}}>게시</Text>
    }
  }
  renderComment = () => {
    // console.log(this.state.loaded);
    // console.log(this.state.cl);
    if(this.state.loaded){
      return this.state.cl.map((c,i) => (
        <View key={i} className="comment_box">
          <View style={{flexDirection:'row', alignItems:'center', justifyContent: 'space-between'}}>
            <Image style={styles.userImage} source={require('../../assets/defaultUser.jpg')}/>
            <View style={{flexDirection:'column', width: 220}}>
              <Text>{c.name}</Text>
              <Text>{c.univ}</Text>
            </View>
            <Text>{moment(c.createdOn).tz('Asia/Seoul').format('YYYY년MM월DD일')}</Text>
          </View>
          <Text style={{marginLeft: 45}}>{c.comment}</Text>
        </View>
      ))
    } else {
      return false
    }
  }
  render(){
    console.log("FeedDetail",this.state.cl);
    return(
      <View style={styles.detail_view}>
        <FeedComp {...this.props.navigation.state.params} detail={true}/>
        {this.renderComment()}
        <View style={styles.comment_cont}>
          <TextInput
            style={styles.comment}
            autoCapitalize= "none"
            multiline={true}
            value={this.state.comment}
            onChangeText={(val) => this.setState({comment: val})}
            placeholder="댓글을 입력하세요"/>
          {this.renderPostBtn()}
        </View>
      </View>
    )
  }
}


FeedDetail.navigationOptions = {
  header: (props) => ({
    title: '상세보기',
    left: <Button title='뒤로' color='#fff' onPress={() => props.goBack()} />,
    style: {
      backgroundColor: '#30333C'
    },
    tintColor: 'white'
  })
};

const mapStateToProps = ({permissions}) => ({
  user: permissions.user
})

export default connect(mapStateToProps, actions)(FeedDetail)


// header: (props) => ({
//   title: '회원가입',
//   left: <Button title='뒤로' color='#fff' onPress={() => props.goBack()} />,
//   right: <Button title='완료' color='#FEC13A' onPress={() => props.state.params.handleSave()} />,
//   style: {
//     backgroundColor: '#30333C'
//   },
//   tintColor: 'white'
// })
