import React, { PureComponent } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  PanResponder,
  Animated
} from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  centerSquare: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  point:{
    position: 'absolute',
    width: 10,
    height: 10,
  },
  topAndright: {
    top: -5,
    right: -5,
  },
  topAndleft: {
    top: -5,
    left: -5,
  },
  bottomAndleft: {
    bottom: -5,
    left: -5,
  },
  bottomAndright: {
    bottom: -5,
    right: -5,
  },
})

export default class ImageCropDragPoint extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
      centerSquareLeft : null,
    }

    this._dragAnimation = new Animated.ValueXY()
    this._onPanResponderGrant = this._onPanResponderGrant.bind(this)
    this._onPanResponderMove = this._onPanResponderMove.bind(this)
    this._onPanResponderRelease = this._onPanResponderRelease.bind(this)
    this._onPanResponderTerminate = this._onPanResponderTerminate.bind(this)
  }
  componentWillMount() {
    this._animatedValueX = 0
    this._animatedValueY = 0

    this._dragAnimation.x.addListener(({value}) => {
      this._animatedValueX = value
    })

    this._dragAnimation.y.addListener(({value}) => {
      this._animatedValueY = value
    })

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
  _onPanResponderGrant(evt, gestureState) {
    this._dragAnimation.setOffset({
      x: this._animatedValueX, y: this._animatedValueY
    })

    this._dragAnimation.setValue({x: 0, y: 0})
    // 처음 실행!
    console.log("_onPanResponderGrant",gestureState, this._animatedValueX, this._animatedValueY);
  }

  _onPanResponderMove(evt, gestureState) {
    // 움직임을 감지함~~
    this._dragAnimation.setValue({
      x: gestureState.dx,
      y: gestureState.dy
    })
    // console.log("_onPanResponderMove",gestureState, this._animatedValueX, this._animatedValueY);
    // console.log(gestureState.moveX);
    // console.log(this._animatedValueX);
    this.setState({
      centerSquareLeft: this._animatedValueX
    })
  }

  _onPanResponderRelease(evt, gestureState) {
    this._dragAnimation.flattenOffset()
    console.log("_onPanResponderRelease",gestureState, this._animatedValueX, this._animatedValueY);
  }

  _onPanResponderTerminate(evt, gestureState) {
    //
    console.log("_onPanResponderTerminate",gestureState, this._animatedValueX, this._animatedValueY);
  }
  render(){
    const transform = this._dragAnimation.getTranslateTransform()
    if(this.props.position === "center") {
      return (
        <Animated.View
          {...this._panResponder.panHandlers}
          style={[
            styles.centerSquare,
            {transform},
            {
              height: this.props.height,
              width: this.props.width,
              left: this.state.centerSquareLeft
              // left: this.props.left
            }
          ]} />
      )
    } else {
      console.log(this.props.position);
      return (
        <Animated.View
          {...this._panResponder.panHandlers}
          style={[
            styles.point,
            {transform},
            styles[this.props.position]
          ]} />
      )
    }

  }
}
