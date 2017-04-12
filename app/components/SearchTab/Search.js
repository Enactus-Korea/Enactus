import React, {Component} from 'react'
import {View , Text, TextInput} from 'react-native'
import styles from './styles'

class Search extends Component {
  state = {
    sch: ''
  }
  render(){
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
        </View>
      </View>
    )
  }
}


export default Search
