import React, { Component } from 'react';
import {
  View,
  Text,
  Image,

} from 'react-native';
import styles from './styles'

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
      <View style={styles.feedListView} >
				<View style={styles.feedContainer}>
          <View style={styles.spaceBetween}>
					<View style={styles.feedTopContainer}>
            <Image
                source={require('../feed/user.png')}
                style={styles.userImage}
                />
  					<View style={styles.feedInfoContainer}>
  						<Text style={styles.feedUser}>{this.state.feed.username}</Text>
  						<Text style={styles.feedUserUniv}>{this.state.feed.useruniv}</Text>
  					</View>
					</View>
          <Text style={styles.feedUserTime}>{this.state.feed.posted}</Text>
          </View>
					<View  style={styles.ctxContainer}>
							<View style={styles.txtContents}>
                <Text>{this.state.feed.content}</Text>
              </View>
					</View>
				</View>
        <View style={styles.likeAndComment}>
          <View style={styles.likeAndCommentBox}>
            <Text style={styles.textAlign}>좋아요 · {this.state.feed.likes.length}</Text>
          </View>
          <View style={styles.likeAndCommentBox}>
            <Text style={styles.textAlign}>댓글 · {this.state.feed.comment.length}</Text>
          </View>
          <View style={styles.shareText}>
            <Text style={styles.textAlign}>공유</Text>
          </View>
        </View>
        {this.state.feed.comment.map((key, i) => {
            return(
              <View style={{flexDirection:'row'}}key={i}>
                <Text>{key.c_username} : </Text>
                <Text>{key.c_usercmt}</Text>
              </View>
            )
        })}
			</View>
    )
  }
}

export default Detail
