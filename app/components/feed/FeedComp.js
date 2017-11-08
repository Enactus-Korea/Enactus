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
    // PushNotificationIOS.addEventListener('notification', this._onNotification);
    PushNotificationIOS.addEventListener('register', this._onRegistered);
    PushNotificationIOS.addEventListener('registrationError', this._onRegistrationError);
    PushNotificationIOS.addEventListener('notification', this._onRemoteNotification);
    PushNotificationIOS.addEventListener('localNotification', this._onLocalNotification);
  }
  componentWillUnmount() {
    PushNotificationIOS.removeEventListener('register', this._onRegistered);
    PushNotificationIOS.removeEventListener('registrationError', this._onRegistrationError);
    PushNotificationIOS.removeEventListener('notification', this._onRemoteNotification);
    PushNotificationIOS.removeEventListener('localNotification', this._onLocalNotification);
    // PushNotificationIOS.removeEventListener('notification', this._onNotification);
  }
  _onRegistered(deviceToken) {
    AlertIOS.alert(
      'Registered For Remote Push',
      `Device Token: ${deviceToken}`,
      [{
        text: 'Dismiss',
        onPress: null,
      }]
    );
  }

  _onRegistrationError(error) {
    AlertIOS.alert(
      'Failed To Register For Remote Push',
      `Error (${error.code}): ${error.message}`,
      [{
        text: 'Dismiss',
        onPress: null,
      }]
    );
  }
  _onRemoteNotification(notification) {
    console.log("_onRemoteNotification", notification);
    // const result = `Message: ${notification.getMessage()};\n
    //   badge: ${notification.getBadgeCount()};\n
    //   sound: ${notification.getSound()}.`;
    //   // ;\n
    //   // category: ${notification.getCategory()};\n
    //   // content-available: ${notification.getContentAvailable()}.
    //
    // AlertIOS.alert(
    //   'Push Notification Received',
    //   result,
    //   [{
    //     text: 'Dismiss',
    //     onPress: null,
    //   }]
    // );
  }

  _onLocalNotification(notification){
    AlertIOS.alert(
      'Local Notification Received',
      'Alert message: ' + notification.getMessage(),
      [{
        text: 'Dismiss',
        onPress: null,
      }]
    );
  }
  _sendNotification() {
    // 이 안에 있는 내용들이 여기로 들어가는 것이다.
    console.log("_sendNotification");
    require('RCTDeviceEventEmitter').emit('remoteNotificationReceived', {
      // data
      remote: true,
      aps: {
        alert: 'Enactus',
        badge: '+1',
        sound: 'default',
        // category: 'REACT_NATIVE',
        'content-available': 1,
      },
    });
  }

  _sendLocalNotification() {
    require('RCTDeviceEventEmitter').emit('localNotificationReceived', {
      aps: {
        alert: 'Sample local notification',
        badge: '+1',
        sound: 'default',
        category: 'REACT_NATIVE'
      },
    });
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
    //
    const { user, _id } = this.props;
    if(!this.state.likeStatus){
      this.setState({ likeStatus: true, likes: this.state.likes+1, likeBtnColor: '#D54C3F' })
    } else {
      this.setState({ likeStatus: false, likes: this.state.likes-1, likeBtnColor: '#e9e9e9' })
    }
    this.props.handleLikeUnLike(_id, user._id)
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
            <TouchableOpacity onPress={this._sendNotification} style={styles.feedBtmIcon}>
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
