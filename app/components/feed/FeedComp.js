import React, { Component } from 'react';
import { View, Text,Image,ScrollView,TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './styles'
import moment from 'moment-timezone'

class FeedComp extends Component{
  constructor(props){
    super(props)
  }

  textEllipsis = (content) => {
    const { navigation } = this.props;
    if(content === undefined) {
      content = this.props.children;
    }
    if(content.length > 100) {
      return (
        <TouchableOpacity onPress={() => navigation.navigate('Detail',{...this.props})}>
          <Text numberOfLines={3}>
            {feeds.content.substring(0,100-7)} <Text style={styles.readMore}>...더보기</Text>
          </Text>
        </TouchableOpacity>
      )
    } else {
      return (
        <TouchableOpacity onPress={() => navigation.navigate('Detail',{...this.props})}>
          <Text>{content}</Text>
        </TouchableOpacity>
      )
    }
  }

  render(feeds){
    const { username, useruniv, posted, content, comment } = this.props;
    return(
      <View style={styles.feedListView} >
        <View style={styles.feedContainer}>
          <View style={styles.spaceBetween}>
          <View style={styles.feedTopContainer}>
            <Image
                // source={require('./user.png')}
                style={styles.userImage}
                />
            <View style={styles.feedInfoContainer}>
              <Text style={styles.feedUser}>{this.props.username}</Text>
              <Text style={styles.feedUserUniv}>{this.props.useruniv}</Text>
            </View>
          </View>
          <Text style={styles.feedUserTime}>{moment(this.props.posted).tz('Asia/Seoul').format('YYYY년MM월DD일')}</Text>
          </View>
          <View  style={styles.ctxContainer}>
            <View style= {styles.txtContents}>
              {this.textEllipsis(content)}
            </View>
          </View>
        </View>
        <View style={styles.likeAndComment}>
          <MaterialIcons
            name='favorite-border'
            size={24}
            style={styles.iconButton}
          />
          <Text style={styles.textAlign}>{this.props.likes.length}</Text>
          <MaterialIcons
            name='chat-bubble-outline'
            size={22}
            style={styles.iconButton}
          />
          <Text style={styles.textAlign}>{this.props.comment.length}</Text>
          <MaterialIcons
            name='reply'
            size={24}
            style={styles.iconButton}
          />
        </View>
      </View>
    )
  }
}

export default FeedComp
