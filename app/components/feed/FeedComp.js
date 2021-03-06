import React, { PureComponent } from 'react';
import { View, Text,Image,ScrollView,TouchableOpacity, Share, ActionSheetIOS, AlertIOS, PushNotificationIOS } from 'react-native';
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
    console.log("componentWillMount from FeedComp")
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
    const { navigation, detailRoute, detail } = this.props;
    if(!detail){
      return (
        <TouchableOpacity onPress={() => navigation.navigate(detailRoute,{...this.props})}>
          {content.length > 100
            ? <Text numberOfLines={3}>
                {content.substr(0,70)} <Text style={styles.readMore}>...더보기</Text>
              </Text>
            : <Text>{content}</Text>
          }
        </TouchableOpacity>
      )
    } else {
      return <Text>{content}</Text>
    }
  }
  handleLikeUnLike(){
    // debugger
    const { user, _id, userId } = this.props;
    let deliver = user._id,
        deliverName = user.name,
        receiver = userId,
        clickedFeed = _id;
    if(!this.state.likeStatus){
      this.setState({ likeStatus: true, likes: this.state.likes+1, likeBtnColor: '#D54C3F' })
    } else {
      this.setState({ likeStatus: false, likes: this.state.likes-1, likeBtnColor: '#e9e9e9' })
    }
    this.props.handleLikeUnLike(clickedFeed, deliver, receiver, deliverName)
  }
  handleShareFeed() {
    //TODO: deep linking
   Share.share({
     title: 'Enactus Korea',
    //  message: '친구가 보낸 것을 확인해 보세요!',
     url: `enactus://Detail/${this.props._id}`
   }, {
      // Android only:
      // dialogTitle: 'Share BAM goodness',
      // iOS only:
      excludedActivityTypes: [
        // 'com.apple.UIKit.activity.PostToFacebook',
        // 'com.apple.UIKit.activity.PostToTwitter',
        // 'com.apple.UIKit.activity.Mail',

      ],
      tintColor: "#ebebeb"
    })
   .then(this._showResult)
   .catch((error) => console.log(error));
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
      return(
        <View style={styles.feedListView} >
          <View style={styles.feedContainer}>
            <FeedTopComp name={name} univ={univ} createdOn={createdOn} userImg={userImg} userId={user._id} feedbyUser={this.props.userId}/>
            <View  style={styles.ctxContainer}>
              {this.textEllipsis(content)}
              {postImg
                ? <Image source={{uri: postImg}} style={styles.postedImg} />
                : null}
            </View>
          </View>
          <View style={styles.likeAndComment}>
            <TouchableOpacity onPress={() => this.handleLikeUnLike()} style={styles.feedBtmIcon}>
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
            {this.props.detail
              ? <View style={styles.feedBtmIcon}>
                  <MaterialIcons
                    name='chat-bubble-outline'
                    size={22}
                    style={styles.iconButton}
                  />
                  <Text style={styles.textAlign}>{this.props.comment.length}</Text>
                </View>
              : <TouchableOpacity
                  onPress={() => this.props.navigation.navigate(this.props.detailRoute, {...this.props})}
                  style={styles.feedBtmIcon}
                >
                  <MaterialIcons
                    name='chat-bubble-outline'
                    size={22}
                    style={styles.iconButton}
                  />
                  <Text style={styles.textAlign}>{this.props.comment.length}</Text>
                </TouchableOpacity>
            }
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
