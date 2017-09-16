import React, {PureComponent} from 'react'
import Reactotron from 'reactotron-react-native'
import { Text, View, Image, TouchableWithoutFeedback } from 'react-native'
import moment from 'moment-timezone'
import styles from './styles'

class FeedComment extends PureComponent {
  render(){
    // console.log('FeedComment')
    let {name, univ, userImg, comment, createdOn } = this.props;
    return(
      <View style={styles.comment_box}>
        <TouchableWithoutFeedback
          style={styles.feedTopContainer}
          onPress={() => this.props.navigation.navigate('CommentUserDetail', {
          name, univ, userImg
        })}>
            {/* <Image style={styles.userImage} source={require('../../assets/defaultUser.jpg')}/> */}
          <View>
            <Text style={styles.feedUser}>{name}</Text>
            <Text style={styles.feedUserUniv}>{univ}</Text>
          </View>
        </TouchableWithoutFeedback>
        <Text style={{width: 220}}>{comment}</Text>
        <Text style={styles.time_text}>{moment(createdOn).tz('Asia/Seoul').format('YYYY년MM월DD일')}</Text>
      </View>
    )
  }
}

export default FeedComment
