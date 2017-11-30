import React, { PureComponent } from 'react';
import {
  ImageEditor,
  Image,
  TextInput,
  Dimensions,
  Text,
  ImagePickerIOS ,
  ActionSheetIOS,
  CameraRoll,
  StyleSheet,
  View,
  TouchableOpacity,
  AlertIOS,StatusBar,
  Picker,
  Animated,
  Modal,
  Button,
  KeyboardAvoidingView
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './PostStyles'
import ImageCropModal from './ImageCropModal'
// import Reactotron from 'reactotron-react-native'


class Post extends PureComponent{
  constructor(props){
    super(props)
    this.isGetInitialState = () => ({
      userImg: this.props.user.userImg || "",
      name: this.props.user.name || '',
      univ: this.props.user.univ || '',
      userId: this.props.user._id || '',
      deviceToken: this.props.user.deviceToken || '',
      content: '',
      typeOf: '전체공개',
      postImg: '',
      visible: false,
      cropImg: ""
    })
    this.state = this.isGetInitialState()
    this.handlePostImage = this.handlePostImage.bind(this)
  }
  componentWillReceiveProps(newProps){
    if(newProps.user !== this.props.user){
      this.setState({
        userImg: newProps.user.userImg,
        name: newProps.user.name,
        userId: newProps.user._id,
        univ: newProps.user.univ,
        deviceToken: newProps.user.deviceToken || '',
      })
    }
  }
  chooseImageFromGallery = () => {
    // let cropData = {
    //     offset:{x:150,y:200},
    //     size:{width:350, height:350},
        //THESE 2 ARE OPTIONAL.
        // displaySize:{width:120, height:120},

    //     resizeMode:'contain',
    // }
    ImagePickerIOS.openSelectDialog(
      //config
      {},
      //successCB
      (imageUri) => {
        this.setState({
          visible: true ,
          cropImg: imageUri
        })
      },
      //failedCB
      cancle => false);

  }
  handlePostImage(cropData, imageUri) {
    // debugger
    console.log("handlePostImage",cropData, imageUri);
    ImageEditor.cropImage(
      imageUri,
      cropData,
      (successURI) => {
        this.setState({
          postImg : successURI,
          visible: false
        })
      },
      (errURI) => {console.log(errURI)}
    )
  }
  chooseImageFromCamera = () => {
    ImagePickerIOS.openCameraDialog({}, imageUri => {
      this.setState({postImg: imageUri});
    }, cancle => false);
  }
  showActionSheet = () => {
    var BUTTONS = [ '전체공개', '대나무숲'];
    ActionSheetIOS.showActionSheetWithOptions({
      options: BUTTONS,
      title: '분류',
    },
    (buttonIndex) => this.setState({ typeOf: BUTTONS[buttonIndex] }));
  }
  handleSave = () => {
    const { navigation } = this.props;
    if(this.state.typeOf === '대나무숲'){
      this.props.isPostToBamboo(this.state, navigation)
    } else {
      this.props.onPostPressed(this.state, navigation)
    }
  }
  handleCancle = () => {
    this.setState(this.isGetInitialState())
    this.props.navigation.navigate('Feed')
  }
  render(){
    let { typeOf, userImg } = this.state;
    let { user } = this.props;
    //TODO: component 나누기
    console.log("cropModal",this.state.cropImg);
    return(
      <View>
        <ImageCropModal visible={this.state.visible} imageUri={this.state.cropImg} handlePostImage={this.handlePostImage}/>
        <View style={styles.post_top}>
          <TouchableOpacity onPress={this.handleCancle}>
            <Text style={styles.TextBold}>취소</Text>
          </TouchableOpacity>
          <Text style={styles.titleText}>글쓰기</Text>
          {this.state.content.length > 0
            ? <TouchableOpacity onPress={this.handleSave}>
                <Text style={styles.TextBold}>완료</Text>
              </TouchableOpacity>
            : <Text style={styles.NonTextBold}>완료</Text>
          }
        </View>
        <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Image style={styles.icon} source={userImg ? {uri: userImg} : require('../../assets/defaultUser.jpg')}></Image>
          <View style={styles.InfoContainer}>
            <Text style={styles.User}>{this.state.name}</Text>
            <Text style={styles.UserUniv}>{this.state.univ} {user.userType}</Text>
          </View>
          <TouchableOpacity style={styles.button} underlayColor="transparent" onPress={this.showActionSheet}>
             <Text style={styles.buttonText}>{typeOf}</Text>
           </TouchableOpacity>
        </View>
        {this.state.postImg
          ? <Image
            style={{
              width: Dimensions.get('window').width*0.4,
              height: Dimensions.get('window').width*0.4,
              resizeMode:'contain'
            }}
            source={{uri: this.state.postImg}}></Image>
          : null
        }
        <TextInput
          ref="textarea"
          style={styles.textArea}
          multiline={true}
          autoCorrect={false}
          autoFocus={true}
          returnKeyType="done"
          value={this.state.content}
          onChangeText={text => this.setState({content: text})}
          placeholder="너의 하루를 말해봐봐봡？"
          selectionColor="#2aa2ef"
          placeholderTextColor="#ced8de"
          />
        <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={-50}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.iconButton}
                onPress={this.chooseImageFromCamera}
                >
                <Icon name="ios-camera" size={30} color="#8899a5" />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.iconButton}
                onPress={this.chooseImageFromGallery}>
                <Icon name="ios-images" size={30} color="#8899a5" />
              </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
        </View>
      </View>
    )
  }
}

export default Post;
