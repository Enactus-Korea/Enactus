import React, { Component } from 'react';
import { View, Text,Image,ScrollView } from 'react-native';
import styles from './styles'

class FeedComp extends Component{
  
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
							<Text numberOfLines={3} style={styles.txtContents}>
              {((this.props.content).length > 100) ?
                (((this.props.content).substring(0,100-7)) + '...더보기') :
                this.props.content }</Text>
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
