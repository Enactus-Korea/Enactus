import React, {Component} from 'react'
import {View , Text, TextInput, Animated , Easing, TouchableOpacity} from 'react-native'
import styles from './styles'
import Dimensions from 'Dimensions'

class Search extends Component {
  state = {
    sch: ''
  }
  componentWillMount() {
    this.animatedValue = new Animated.Value(Dimensions.get('window').width/1.05)
  }
  handleSize = () => {
    Animated.timing(this.animatedValue, {
      toValue: Dimensions.get('window').width/1.2,
      duration: 500,
      easing: Easing.ease
    }).start()
  }
  handleSizeBack = () => {
    Animated.timing(this.animatedValue, {
      toValue: Dimensions.get('window').width/1.05,
      duration: 500,
      easing: Easing.ease
    }).start()
  }
  render(){
    const animatedStyle = { width: this.animatedValue }
    return(
      <View>
        <View style={styles.sch_top}>
          <TextInput
            value={this.state.sch}
            style={styles.sch_input}
            onChangeText={(text) => this.setState({sch: text})}
            placeholder='멤버 혹은 뉴스피드 검색'
            placeholderTextColor='#8E8F92'
          />
          {/* <Animated.View> */}
        </View>
        {/* <TouchableOpacity
          onPressMove={this.handleSizeBack}
          onPressIn={this.handleSize}
          >
        <Animated.View
           style={[styles.sch_animate, animatedStyle]} />
        </TouchableOpacity> */}
      </View>
    )
  }
}


export default Search
