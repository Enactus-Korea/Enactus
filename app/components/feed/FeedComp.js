import React, { Component } from 'react';
import { View, Text,Image,ScrollView,TouchableOpacity } from 'react-native';
import styles from './styles'

class FeedComp extends Component{
  constructor(props){
    super(props)
  }

  textEllipsis(content) {
    debugger;
    if(content === undefined) {
      content = this.props.children;
    }
    if(content.length > 100) {
      return (
        <TouchableOpacity onPress={() => this.props.goDetail(this.props)}>
          <Text numberOfLines={3}>
            {feeds.content.substring(0,100-7)} <Text style={styles.readMore}>...더보기</Text>
          </Text>
        </TouchableOpacity>
      )
    } else {
      return (
        <TouchableOpacity onPress={() => this.props.goDetail(this.props)}>
          <Text>{content}</Text>
        </TouchableOpacity>
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
            <View style= {styles.txtContents}>
              {this.textEllipsis(this.props.content)}
            </View>
          </View>
        </View>
        <View style={styles.likeAndComment}>
          <View style={styles.likeAndCommentBox}>
            <Image
                source={require('./img/like.png')}
                style={{width:28, height:32}} />
            <Text style={styles.textAlign}>{this.props.likes.length}</Text>
            <TouchableOpacity onPress={() => this.props.goDetail(this.props)} style={{width:56}} >
              <Image
                  source={require('./img/comment.png')}
                  style={{width:28, height:32}} />
              <Text style={styles.textAlign}>{this.props.comment.length}</Text>
            </TouchableOpacity>
            <Image
                source={require('./img/share.png')}
                style={{width:28, height:32}} />
          </View>
        </View>
      </View>
    )
  }
}

export default FeedComp
