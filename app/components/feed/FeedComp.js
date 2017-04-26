import React, { PureComponent } from 'react';
import { View, Text,Image,ScrollView,TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './styles'
import moment from 'moment-timezone'

class FeedComp extends PureComponent{
  state = {
    likes: '',
    likeloaded: false
  }
  //
  componentDidMount(){
    this.fetchData();
  }
  async fetchData(){
    const REQUEST_URL = "http://localhost:9000";
    let response = await fetch(`${REQUEST_URL}/feed/handle/like/${this.props._id}`);
    let likes = await response.json();
    console.log("fetchData",this.state.likes)
    return this.setState({ likes , likeloaded: true})
  }
  textEllipsis = (content) => {
    // FIXME: 리팩토링 필요함!!!!
    const { navigation, detailRoute, detail } = this.props;
    if(content.length > 100) {
      if(!detail){
        return (
          <TouchableOpacity onPress={() => navigation.navigate(detailRoute,{...this.props})}>
            <Text numberOfLines={3}>
              {content.substr(0,70)} <Text style={styles.readMore}>...더보기</Text>
            </Text>
          </TouchableOpacity>
        )
      } else {
        return <Text>{content}</Text>
      }
    }
    else {
      if(!detail){
        return (
          <TouchableOpacity onPress={() => detail ? false : navigation.navigate(detailRoute,{...this.props})}>
            <Text>{content}</Text>
          </TouchableOpacity>
        )
      }
      return <Text>{content}</Text>
    }
  }
  handleLikeUnLike = () => {
    const { user, _id } = this.props;
    this.props.handleLikeUnLike(_id, user._id)
    console.log("handleLikeUnLike",this.state.likes);
  }
  render(){
    console.log("render",this.state.likes)
    const { name, univ, posted, content, comment, userImg, postImg, user, _id } = this.props;
    if(this.state.likeloaded){
      return(
        <View style={styles.feedListView} >
          <View style={styles.feedContainer}>
            <View style={styles.spaceBetween}>
            <View style={styles.feedTopContainer}>
              <Image
                  source={userImg ? {uri: userImg} : require('../../assets/defaultUser.jpg')}
                  style={styles.userImage}
                  />
              <View style={styles.feedInfoContainer}>
                <Text style={styles.feedUser}>{this.props.name}</Text>
                <Text style={styles.feedUserUniv}>{this.props.univ}</Text>
              </View>
            </View>
            <Text style={styles.feedUserTime}>{moment(this.props.createdOn).tz('Asia/Seoul').format('YYYY년MM월DD일')}</Text>
            </View>
            <View  style={styles.ctxContainer}>
              {this.textEllipsis(content)}
              {/*postImg
                ? <Image source={{uri: postImg}} style={styles.postedImg} />
                : null*/}
            </View>
          </View>
          <View style={styles.likeAndComment}>
            <TouchableOpacity onPress={this.handleLikeUnLike} style={styles.feedBtmIcon}>
              <MaterialIcons
                name='favorite-border'
                size={24}
                style={styles.iconButton}
              />
              <Text style={styles.textAlign}>{this.state.likes}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.feedBtmIcon}>
              <MaterialIcons
                name='chat-bubble-outline'
                size={22}
                style={styles.iconButton}
              />
              <Text style={styles.textAlign}>{this.props.comment.length}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.feedBtmIcon}>
              <MaterialIcons
                name='reply'
                size={24}
                style={styles.iconButton}
              />
            </TouchableOpacity>
          </View>
        </View>
      )
    }
    return false
  }
}

export default FeedComp
