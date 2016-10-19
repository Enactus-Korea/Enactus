import React, { Component } from 'react';
import { View, Text,Image,ScrollView,TouchableOpacity } from 'react-native';
import styles from './styles'

class FeedComp extends Component{
  constructor(props){
    super(props)
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
              <Text>{this.props.children}</Text>
            </View>
            <View style= {styles.txtContents}>
              {this.props.textEllipsis}
            </View>
          </View>
        </View>
        <View style={styles.likeAndComment}>
          <View style={styles.likeAndCommentBox}>
            <Text style={styles.textAlign}>좋아요 · {this.props.likes.length}</Text>
          </View>
          <View>
            {this.props.goComment}
          </View>
          <View style={styles.shareText}>
            <Text style={styles.textAlign}>공유</Text>
          </View>
        </View>
      </View>
    )
  }
}

// <TouchableOpacity style={styles.likeAndCommentBox} onPress={() => this.props.goComment} >
//   <Text style={styles.textAlign}>댓글 · {this.props.comment.length}</Text>
// </TouchableOpacity>

// {this.props.textEllipsis === true
//   ?
//   <View style= {styles.txtContents}>
//     {this.props.textEllipsis}
//   </View>
//   :
//   <View style= {styles.txtContents}>
//     <Text>{this.props.content}</Text>
//   </View>
// }


export default FeedComp
