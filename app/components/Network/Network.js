import React, {Component} from 'react'
import { View, Text, ListView } from 'react-native'
import NetworkRow from './NetworkRow'

class Network extends Component {
  state = {
    dataSource: new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    }),
    loaded: false,
  }
  componentDidMount(){
    this.fetchData();
  }
  async fetchData(){
    const REQUEST_URL = "http://localhost:9000";
    let response = await fetch(`${REQUEST_URL}/user`);
    let responseJson = await response.json();
    return this.setState({
      dataSource: this.state.dataSource.cloneWithRows(responseJson.users),
      loaded: true
    })
  }
  render(){
    return(
      <ListView
					dataSource={this.state.dataSource}
					renderRow={(user) =>
            <NetworkRow
              {...this.props}
              id={user._id}
              {...user}
            />}
        />
    )
  }
}

export default Network
