import React, { PureComponent } from 'react';
import { View, Text,Image,ScrollView,TouchableOpacity, Share, ActionSheetIOS } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './styles'
import moment from 'moment-timezone'
import FeedTopComp from './FeedTopComp'

class FeedComp extends PureComponent{
  constructor(props){
    super(props)
    this.state = {
      likes: props.likes.length,
      likeloaded: false,
      likeStatus: false, // 서버에서 눌렀는지 않 눌렀는지... 확인을 해야 할 것 같딘한데..
      likeBtnColor: '#e9e9e9',
      result: ""
    }
    this.handleLikeUnLike = this.handleLikeUnLike.bind(this)
    this.textEllipsis = this.textEllipsis.bind(this)
    this.handleShareFeed = this.handleShareFeed.bind(this)
    this._showResult = this._showResult.bind(this);
  }

  componentWillMount(){
    if(this.props.likes.indexOf(this.props.user._id) !== -1){
      this.setState({likeStatus: true, likeBtnColor: '#D54C3F'})
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    if(this.props.user !== nextProps.user) {
      return true;
    }
    if(this.props.univ !== nextProps.univ) {
      return true;
    }
    if(this.props.userImg !== nextProps.userImg) {
      return true;
    }
    return false;
  }
  textEllipsis(content){
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
  handleLikeUnLike(){
    const { user, _id } = this.props;
    if(!this.state.likeStatus){
      this.setState({ likeStatus: true, likes: this.state.likes+1, likeBtnColor: '#D54C3F' })
    } else {
      this.setState({ likeStatus: false, likes: this.state.likes-1, likeBtnColor: '#e9e9e9' })
    }
    this.props.handleLikeUnLike(_id, user._id)
  }
  handleShareFeed() {
   Share.share({
     title: 'Enactus Korea',
     message: ''
   }, {
      // Android only:
      // dialogTitle: 'Share BAM goodness',
      // iOS only:
      excludedActivityTypes: [
        'com.apple.UIKit.activity.PostToFacebook',
        'com.apple.UIKit.activity.PostToTwitter',
        'com.apple.UIKit.activity.Mail',

      ]
    })
   .then(this._showResult)
   .catch((error) => console.log(error));
  //  ActionSheetIOS.showShareActionSheetWithOptions()
  }
  _showResult(result) {
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        this.setState({result: 'shared with an activityType: ' + result.activityType});
      } else {
        this.setState({result: 'shared'});
      }
    } else if (result.action === Share.dismissedAction) {
      this.setState({result: 'dismissed'});
    }
  }
  render(){
    const { name, univ, createdOn, content, comment, userImg, postImg, user, _id } = this.props;
    // console.log("feed comp",name, univ, createdOn)
      return(
        <View style={styles.feedListView} >
          <View style={styles.feedContainer}>
            <FeedTopComp name={name} univ={univ} createdOn={createdOn} userImg={userImg} />
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
                name={this.state.likeStatus ? 'favorite' : 'favorite-border'}
                size={24}
                style={{
                  color: this.state.likeBtnColor,
                  marginRight: 5,
                }}
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
            <TouchableOpacity
              onPress={this.handleShareFeed}
              style={styles.feedBtmIcon}>
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
}

export default FeedComp
