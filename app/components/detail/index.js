import React, { Component } from 'react';
import { View, Text,Image,TextInput,TouchableOpacity,ScrollView, ListView } from 'react-native';
import styles from './styles'
import {FeedComp} from '../feed'
import CommentComp from './comment'

class Detail extends Component{
  constructor(props){
    super(props);
    this.state = {
      feed: props.data,
      comment: ''
    }
  }

  componentDidMount(){
    this.props.close();
    this.props.actions.navToPop('피드 상세보기');
  }

  async addComment() {
    let user = this.props.state.userDatas;
    try {
      let response = await fetch('http://localhost:9000/feed/addComment', {
        method: 'POST',
        headers:
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        body: JSON.stringify({
          _id: this.state.feed._id,
          comment: {
            c_username: user.userName,
            c_useruniv: user.userUniv,
            c_usercmt: this.state.comment
          }
        })});
        let res = response.Json();
        //TODO: 댓글 새로고침
    } catch(error) {
      console.log(JSON.parse(errors));
    }
  }

  render(){
    debugger;
    return(
      <View>
        <ScrollView style={styles.container}>
            <FeedComp
              {...this.props}
              username = {this.state.feed.username}
              useruniv = {this.state.feed.useruniv}
              posted = {this.state.feed.posted}
              likes = {this.state.feed.likes}
              comment = {this.state.feed.comment}
            >
              {this.state.feed.content}
            </FeedComp>
            <View>
              {this.state.feed.comment.map((key, i) => {
                  return(
                    <CommentComp
                      key={i}
                      c_username = {key.c_username}
                      c_useruniv = {key.c_useruniv}
                      c_usercmt = {key.c_usercmt}
                    />
                  )
              })}
            </View>
        </ScrollView>
        <View style={styles.comment}>
          <TextInput
            style={styles.commentBox}
            placeholder ="댓글을 적어주세요"
            onChangeText={(comment) => this.setState({comment: comment})}
          />
          <TouchableOpacity style={styles.activeBtn} onPress={() => this.addComment()}>
            <Text style={styles.activeBtnText}>댓글</Text>
          </TouchableOpacity>
        </View>
      </View>


    )
  }
}



// <ListView
//   renderHeader={() => <FeedComp
//     {...this.props}
//     username = {this.state.feed.username}
//     useruniv = {this.state.feed.useruniv}
//     posted = {this.state.feed.posted}
//     likes = {this.state.feed.likes}
//     comment = {this.state.feed.comment}
//   >
//     {this.state.feed.content}
//   </FeedComp>}
// />

export default Detail
