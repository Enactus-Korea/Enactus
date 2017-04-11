import React, {Component} from 'react'
import { View, Text, ListView, Image, ScrollView,TouchableOpacity, RefreshControl } from 'react-native';
import styles from './styles'
import FeedSlide from './FeedSlide'
import FeedComp from './FeedComp'


class FeedList extends Component {
  constructor(props){
    super(props);
    this.state = {
			dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      }),
      loaded: false,
			toggle: false,
		}
  }
  componentDidMount(){
    this.fetchData();
  }
  async fetchData(){
    const REQUEST_URL = "http://localhost:9000";
    let response = await fetch(`${REQUEST_URL}/${this.props.typeOf}`);
    let responseJson = await response.json();
    return this.setState({
      dataSource: this.state.dataSource.cloneWithRows(responseJson.feed),
      loaded: true
    })
  }
  render(){
    if(!this.state.loaded){
      return(
        <View style={styles.feedWrapper}>
          <FeedSlide />
          <Text style={{marginTop:100}}> 아직 포스팅 된 글이 없습니다.</Text>
        </View>
      )
    }
    return(
      <ListView
					dataSource={this.state.dataSource}
          renderHeader={() => this.props.typeOf === 'feed' ? <FeedSlide /> : false }
					renderRow={(feeds) =>
            <FeedComp
              {...this.props}
              id={feeds._id}
              {...feeds}
            />}
        />
    )
  }
}


export default FeedList;
