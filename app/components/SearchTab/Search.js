import React, {Component} from 'react'
import {View , Text, TextInput, Animated , Easing, TouchableOpacity} from 'react-native'
import styles from './styles'
import Dimensions from 'Dimensions'

class Search extends Component {
  static navigationOptions = ({navigation}) => ({
    headerTitle: <TextInput
              style={styles.sch_input}
              onChangeText={(text) => navigation.state.params.handleChange("sch",text)}
              placeholder='멤버 혹은 뉴스피드 검색'
              placeholderTextColor='#8E8F92'
            />,
    headerRight: false,
    headerLeft: false,
    headerStyle: { backgroundColor: '#30333C' },
    headerTintColor: 'white'
  })
  state = {
    sch: ''
  }
  componentWillMount() {
    this.animatedValue = new Animated.Value(Dimensions.get('window').width/1.05)
  }
  componentDidMount(){
    this.props.navigation.setParams({handleChange: this.handleChange})
  }
  handleChange = (name, text) => {
    this.setState({[name]: text})
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
        <Text>검색</Text>

      </View>
    )
  }
}


export default Search



//  <View style={styles.sch_top}>
//         <TextInput
//           // value={this.state.sch}
//           style={styles.sch_input}
//           // onChangeText={(text) => this.setState({sch: text})}
//           placeholder='멤버 혹은 뉴스피드 검색'
//           placeholderTextColor='#8E8F92'
//         />
//          <Animated.View>
//       </View>
