import React, { Component } from 'react';
import { View, Text,Image,ScrollView,TouchableOpacity } from 'react-native';
import styles from './styles'

class FeedComp extends Component{
  goDetail(feeds) {
    this.props.state.navigator.push({id:'detail', data: feeds});
  }
  textEllipsis(feeds) {
    if(this.props.content.length > 100) {
      debbuger
      return (
        <View>
          <TouchableOpacity onPress={() => this.goDetail(feeds)}>
            <Text numberOfLines={3}>
              {this.props.content.substring(0,100-7)} <Text style={styles.readMore}>...더보기</Text>
            </Text>
          </TouchableOpacity>
        </View>
      )
    } else {
      return (
        <View>
          <TouchableOpacity onPress={() => this.goDetail(feeds)}>
            <Text>{this.props.content}</Text>
          </TouchableOpacity>
        </View>
      )
    }
  }
  render(feeds){
    return(
      <View style={styles.feedListView} >
        <View style={styles.feedContainer}>
          <View style={styles.spaceBetween}>
          <View style={styles.feedTopContainer}>
            <Image
                source={require('./user.png')}
                style={styles.userImage}
                />
            <View style={styles.feedInfoContainer}>
              <Text style={styles.feedUser}>{this.props.username}</Text>
              <Text style={styles.feedUserUniv}>{this.props.useruniv}</Text>
            </View>
          </View>
          <Text style={styles.feedUserTime}>{this.props.posted}</Text>
          </View>
          <View  style={styles.ctxContainer}>
              <View style={styles.txtContents}>
              {this.textEllipsis(feeds)}</View>
          </View>
        </View>
        <View style={styles.likeAndComment}>
          <View style={styles.likeAndCommentBox}>
            <Text style={styles.textAlign}>좋아요 · {this.props.likes.length}</Text>
          </View>
          <View style={styles.likeAndCommentBox}>
            <Text style={styles.textAlign}>댓글 · {this.props.comment.length}</Text>
          </View>
          <View style={styles.shareText}>
            <Text style={styles.textAlign}>공유</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default FeedComp
