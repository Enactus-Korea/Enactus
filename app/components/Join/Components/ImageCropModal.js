import React, { PureComponent } from 'react';
import {
  ImageEditor,
  Image,
  TextInput,
  Dimensions,
  Text,
  View,
  TouchableOpacity,
  // ImagePickerIOS,
  Modal,
  Button,
  PanResponder,
  Animated,
  StyleSheet
} from 'react-native';
// import styles from './PostStyles'
import ImageCropOverlay from './ImageCropOverlay'


export default class ImageCropModal extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      imageUri: "",
      visible: false,
      width: null,
      height: null,
      cropWidth: null,
      cropHeight: null,
      cropLeftBorder: 0,
      cropRightBorder: 0,
      cropTopBorder: 0,
      cropBottomBorder: 0,
      cropImageCenter: 0,
      cropOffsetX: 0,
      cropOffsetY: 0,
      resizeRatio: 0,
      cropBorderLimit: 0
      // _panResponder: {},
    }
    this._dragAnimation = new Animated.ValueXY()
    this._onPanResponderGrant = this._onPanResponderGrant.bind(this)
    this._onPanResponderMove = this._onPanResponderMove.bind(this)
    this._onPanResponderRelease = this._onPanResponderRelease.bind(this)
    this._onPanResponderTerminate = this._onPanResponderTerminate.bind(this)
    this.handleCropImage = this.handleCropImage.bind(this)

  }
  componentWillMount() {
    this._panResponder = PanResponder.create({
      // Ask to be the responder
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetResponderCapture: (evt, gestureState) => true,

      onPanResponderGrant: this._onPanResponderGrant,
      onPanResponderMove: this._onPanResponderMove,
      onPanResponderRelease: this._onPanResponderRelease,
      onPanResponderTerminate: this._onPanResponderTerminate
    })
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      visible: nextProps.visible,
      imageUri: nextProps.imageUri
    })
    Image.getSize(
      {uri:nextProps.imageUri},
      (width, height) => this.handleImageSize(width, height),
      (res) => console.log("err")
    )
  }
  handleImageSize(width, height) {
    this._animatedValueX = 0
    this._animatedValueY = 0
    this._dragAnimation.x.addListener(({value}) => {
      this._animatedValueX = value
    })

    this._dragAnimation.y.addListener(({value}) => {
      this._animatedValueY = value
    })
    let windowWidth = Dimensions.get('window').width,
        resizeRatio = 1/(width/windowWidth),
        resizeRatioHeight = 1/(height/windowWidth),
        resultRatio = width > height ? resizeRatio : resizeRatioHeight;

        width = width*resultRatio;
        height = height*resultRatio;
    let borderSize = width > height ? (width-height)/2 : (height-width)/2;
        console.log("handleImageSize",width,height, borderSize);
    this.setState({
      width,
      height,
      cropWidth: width > height ? height : width,
      cropHeight: width > height ? height : width,
      cropLeftBorder: width > height ? borderSize : 0,
      cropRightBorder: width > height ? borderSize : 0,
      cropTopBorder: width > height ? 0 : borderSize,
      cropBottomBorder: width > height ? 0 : borderSize,
      cropImageCenter: borderSize,
      cropBorderLimit: borderSize*2,
      resizeRatio : resultRatio
    })
    // console.log();
  }
  _onPanResponderGrant(evt, gestureState) {
    console.log("_onPanResponderGrant")
    this._dragAnimation.setValue({x: 0, y: 0})
    // 처음 실행!
    // console.log("_onPanResponderGrant",gestureState, this._animatedValueX, this._animatedValueY);
  }

  _onPanResponderMove(evt, gestureState) {
    // 움직임을 감지함~~
    let { dx, dy, moveX } = gestureState,
        { width, height } = this.state,
        { currentPageX, previousPageX, currentPageY, previousPageY } = evt.touchHistory.touchBank[1];

    if(width > height) {
      this._dragAnimation.setValue({
        x: gestureState.dx,
        y: 0
      })
      if(previousPageX > currentPageX) {
      // 왼쪽으로 움직일 때

        let pureMoveX = previousPageX-currentPageX,
            currentLeftBorder = this.state.cropLeftBorder-pureMoveX,
            currentRightBorder = this.state.cropRightBorder+pureMoveX;
        console.log("Go To Left", pureMoveX, currentLeftBorder);

        if(this.state.cropBorderLimit <= this.state.cropRightBorder) {
          return false
        } else {
          this.setState({
            cropLeftBorder: currentLeftBorder,
            cropRightBorder: currentRightBorder
          })
        }
      } else if(previousPageX < currentPageX){
        // 오른쪽으로 움직일 때
        console.log("Go To Right", pureMoveX, currentLeftBorder, currentRightBorder);

        let pureMoveX = currentPageX-previousPageX,
            currentLeftBorder = this.state.cropLeftBorder+pureMoveX,
            currentRightBorder = this.state.cropRightBorder-pureMoveX;

        if(this.state.cropBorderLimit <= this.state.cropLeftBorder) {
          return false
        } else {
          this.setState({
            cropLeftBorder: currentLeftBorder,
            cropRightBorder: currentRightBorder
          })
        }
      }
    } else {
      this._dragAnimation.setValue({
        x: 0,
        y: gestureState.dy
      })
      if(previousPageY > currentPageY) {
      // 왼쪽으로 움직일 때
      console.log("Go To Top");
        let pureMoveY = previousPageY-currentPageY,
            currentTopBorder = this.state.cropTopBorder-pureMoveY,
            currentBottomBorder = this.state.cropBottomBorder+pureMoveY;


        if(this.state.cropBorderLimit <= this.state.cropBottomBorder) {
          console.log(
            "Go To Top",
            this.state.cropBorderLimit,
            this.state.cropBottomBorder
          )
          return false
        } else {
          this.setState({
            cropTopBorder: currentTopBorder,
            cropBottomBorder: currentBottomBorder
          })
        }

      } else if(previousPageY < currentPageY){
        // 오른쪽으로 움직일 때
        console.log("Go To Bottom");

        let pureMoveY = currentPageY-previousPageY,
            currentTopBorder = this.state.cropTopBorder+pureMoveY,
            currentBottomBorder = this.state.cropBottomBorder-pureMoveY;

        if(this.state.cropBorderLimit <= this.state.cropTopBorder) {
          console.log(
            "Go To Bottom",
            this.state.cropBorderLimit,
            this.state.cropTopBorder
          )
          return false
        } else {
          this.setState({
            cropTopBorder: currentTopBorder,
            cropBottomBorder: currentBottomBorder
          })
        }
      }
    }
  }

  _onPanResponderRelease(evt, gestureState) {
    this._dragAnimation.flattenOffset()
    if(this.state.width > this.state.height) {
      this.setState({
        cropOffsetX: this.state.cropLeftBorder,
        cropOffsetY: 0
      })
    } else {
      this.setState({
        cropOffsetX: 0,
        cropOffsetY: this.state.cropTopBorder
      })
    }
  }

  _onPanResponderTerminate(evt, gestureState) {
    console.log("_onPanResponderTerminate");
  }
  handleCropImage(){
    console.log("AAAA", this.state.cropOffsetX, this.state.cropOffsetY);
    let resultSize = this.state.width > this.state.height ? 'height' : 'width'
    let cropData = {
        offset:{
          x: this.state.cropOffsetX/this.state.resizeRatio,
          y: this.state.cropOffsetY/this.state.resizeRatio
        },
        size:{
          width: this.state[resultSize]/this.state.resizeRatio,
          height: this.state[resultSize]/this.state.resizeRatio
        },
        displaySize:{
          width:this.state[resultSize],
          height:this.state[resultSize]
        },
        resizeMode:'contain',
    }
    this.props.handlePostImage(cropData, this.state.imageUri)

  }
  render(){
    const transform = this._dragAnimation.getTranslateTransform(),
          getCenterByVertical = (this.state.width/2) - (this.state.height/2),
          setCenterStyle = {
            width : {
              left: this.state.cropImageCenter
            },
            height: {
              top: this.state.cropImageCenter
            }
          },
          setCenter = this.state.width > this.state.height ? "width" : "height";
    return (
      <Modal
        animationType={"slide"}
        visible={this.state.visible}
      >
        <View style={styles.imageCropModalCont}>
          <View style={[styles.imageCropCont, {width: this.state.width, height: this.state.height}]}>
            <Image
              ref="image"
              resizeMode="contain"
              style={[
                {
                  width: this.state.width,
                  height: this.state.height,
                  left: this.state.width < this.state.height ? this.state.cropImageCenter : 0
                }
              ]}
              source={{uri:this.state.imageUri}}>
              <ImageCropOverlay
                width={this.state.cropLeftBorder}
                height={this.state.cropHeight}
                position="left"
              />
              <ImageCropOverlay
                width={this.state.cropHeight}
                height={this.state.cropTopBorder}
                position="top"
              />
              <Animated.View
                {...this._panResponder.panHandlers}
                style={[
                  // exStyles.square,
                  {transform},
                  {
                    width: this.state.cropWidth,
                    height: this.state.cropHeight,
                  },
                  setCenterStyle[setCenter]
                ]}>
              </Animated.View>
              <ImageCropOverlay
                width={this.state.cropRightBorder}
                height={this.state.cropHeight}
                position="right"
              />
              <ImageCropOverlay
                width={this.state.cropHeight}
                height={this.state.cropBottomBorder}
                position="bottom"
              />
            </Image>
          </View>
          <View style={styles.imageCropBottom}>
            <Button title={'취소'} onPress={() => this.setState({visible: !this.state.visible})}/>
            <Button title={'자르기'} onPress={this.handleCropImage}/>
          </View>
        </View>
      </Modal>
    )
  }
  // componentWillUnmount(){
  //   console.log("goodboyyy");
  // }
}

const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
  imageCropModalCont: {
    flex: 1,
    backgroundColor: 'black',
    flexDirection: 'column',
   //  justifyContent: 'center',
   //  alignItems: 'center'
  },
  imageCropCont: {
   //  overflow:'hidden',
   //  position: 'absolute',
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
   imageCropBottom: {
     width,
     height: 50,
     // alignSelf: 'flex-end',
     flexDirection: 'row',
     // justifyContent: 'flex-end',
   }
});
