import React, { PureComponent } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles'
import moment from 'moment-timezone'

class FeedTopComp extends PureComponent{
  constructor(props){
    super(props)
  }
  componentWillMount(){
    console.log("feedTopComp", `${this.props.createdOn}`)
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", nextProps.userImg, this.props.userImg);
    if(this.props.userImg !== nextProps.userImg) {
      return true;
    }
    return false;
  }
  render(){
    console.log("feedTopComp Render")
    const { name, univ, userImg, createdOn } = this.props;
    return(
          <View style={styles.spaceBetween}>
            <View style={styles.feedTopContainer}>
              <Image
                source={userImg ? {uri: userImg} : require('../../assets/defaultUser.jpg')}
                style={styles.userImage}
              />
              <View style={styles.feedInfoContainer}>
                <Text style={styles.feedUser}>{name}</Text>
                <Text style={styles.feedUserUniv}>{univ}</Text>
              </View>
            </View>
            <Text style={styles.feedUserTime}>{moment(createdOn).tz('Asia/Seoul').format('YYYY년MM월DD일')}</Text>
          </View>
    )
  }
}

export default FeedTopComp
