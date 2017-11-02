import React, { PureComponent } from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './styles'
import moment from 'moment-timezone'

class FeedTopComp extends PureComponent{
  constructor(props){
    super(props)
  }
  componentWillMount(){
    // console.log("feedTopComp", `${this.props.createdOn}`)
  }
  shouldComponentUpdate(nextProps, nextState) {
    // console.log("shouldComponentUpdate", nextProps.userImg, this.props.userImg);
    if(this.props.userImg !== nextProps.userImg) {
      return true;
    }
    return false;
  }
  handleDeleteAlert = () => {
    Alert.alert(
      '피드 삭제',
      '피드를 삭제하시겠습니까?',
      [
        {
          text: '확인',
          onPress: () => this.handleDeleteFeed()
        },
        {
          text: '취소'
        }
      ]
    )
  }
  handleDeleteFeed = () => {
    console.log("delete")
  }
  renderDeleteIcon(){
    let {feedbyUser, userId} = this.props;
    if(feedbyUser === userId) {
      return <TouchableOpacity
        onPress={this.handleDeleteAlert}
        style={styles.feedBtmIcon}>
        <MaterialIcons
          name='close'
          size={22}
          style={styles.iconButton}
        />
      </TouchableOpacity>
    }
  }
  render(){
    //TODO: dropDown
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
            <View style={styles.feedTopRight}>
              <Text style={styles.feedUserTime}>{moment(createdOn).tz('Asia/Seoul').format('YYYY년MM월DD일')}</Text>
              {this.renderDeleteIcon()}
            </View>
          </View>
    )
  }
}

export default FeedTopComp
