import React, {PureComponent} from 'react'
import Reactotron from 'reactotron-react-native'
import { Text, View, Image, TouchableWithoutFeedback } from 'react-native'
import moment from 'moment-timezone'
import styles from './styles'

class FeedComment extends PureComponent {
  render(){
    let {name, univ, userImg } = this.props;
    return(
      <View style={styles.comment_box}>
        <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
          <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('CommentUserDetail', {
            name, univ, userImg
          })}>
            <View style={styles.feedTopContainer}>
              <Image style={styles.userImage} source={require('../../assets/defaultUser.jpg')}/>
              <View style={styles.feedInfoContainer}>
                <Text style={styles.feedUser}>{this.props.name}</Text>
                <Text style={styles.feedUserUniv}>{this.props.univ}</Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
          <Text style={styles.time_text}>{moment(this.props.createdOn).tz('Asia/Seoul').format('YYYY년MM월DD일')}</Text>
        </View>
        <Text style={{marginLeft: 45, marginTop: 10}}>{this.props.comment}</Text>
      </View>
    )
  }
}

export default FeedComment
