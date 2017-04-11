import React, { PureComponent } from 'react';
import { Image,TextInput, Dimensions, Text, ImagePickerIOS , ActionSheetIOS, CameraRoll, StyleSheet, View,TouchableOpacity,AlertIOS,StatusBar, Picker, Animated} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './PostStyles'


class Post extends PureComponent{
  constructor(props){
    super(props)
    this.state = {
      userImg: props.user.userImg || null,
      name: props.user.name || '',
      univ: props.user.univ || '',
      content: '',
      board: '전체공개',
      postImg: null
    }
  }
  componentWillReceiveProps(newProps){
    if(newProps.user !== this.props.user){
      this.setState({
        userImg: newProps.user.userImg,
        name: newProps.user.name,
        univ: newProps.user.univ
      })
    }
  }
  chooseImageFromGallery = () => {
    ImagePickerIOS.openSelectDialog({}, imageUri => {
      this.setState({postImg: imageUri});
    }, cancle => false);
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
    (buttonIndex) => this.setState({ board: BUTTONS[buttonIndex] }));
  }
  handleSave = () => {
    this.props.onPostPressed(this.state)
    AlertIOS.alert('Enactus', '작성되었습니다', [{'text': '확인', onPress: () => this.props.navigation.navigate('Feed')}])
  }
  render(){
    let { board, userImg } = this.state;
    let { user } = this.props;
    return(
      <View>
        <View style={styles.post_top}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Feed')}>
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
             <Text style={styles.buttonText}>{board}</Text>
           </TouchableOpacity>
        </View>
        {/* <View style={{flex: 1}}> */}
          {this.state.postImg? <Image style={{flex: 1}} source={{uri: this.state.postImg}}></Image> : null}
        {/* </View> */}
        <TextInput
          ref="textarea"
          style={styles.textArea}
          multiline={true}
          onChangeText={ (text)=> this.setState({content: text}) }
          placeholder="너의 하루를 말해봐봐봡？"
          selectionColor="#2aa2ef"
          placeholderTextColor="#ced8de"
          />
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
        </View>
      </View>
    )
  }
}

export default Post;
