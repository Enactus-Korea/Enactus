import React, { Component } from 'react';
import { View, Text,Image,TextInput,TouchableOpacity } from 'react-native';
import styles from './styles'
import {FeedComp} from '../feed'

class Detail extends Component{
  constructor(props){
    super(props);
    this.state = {
      feed: props.data
    }
  }

  componentDidMount(){
    this.props.close();
    this.props.actions.navToPop('피드 상세보기');
  }
  render(){
    return(
      <View >
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
                <View style={{flexDirection:'row'}} key={i}>
                  <Text>{key.c_username} : </Text>
                  <Text>{key.c_usercmt}</Text>
                </View>
              )
          })}
  			</View>
        <View style={styles.comment}>
          <TextInput
            style={styles.commentBox}
            placeholder ="댓글을 적어주세요"
          />
          <TouchableOpacity style={styles.activeBtn}>
            <Text style={styles.activeBtnText}>댓글</Text>
          </TouchableOpacity>
        </View>
      </View>

    )
  }
}


export default Detail
