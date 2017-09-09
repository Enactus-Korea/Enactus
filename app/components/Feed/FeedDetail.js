import React, {PureComponent} from 'react'
import * as actions from './actions'
import {connect} from 'react-redux'
import {Text, TouchableOpacity, View, TextInput, Button, Image, FlatList, Animated, KeyboardAvoidingView } from 'react-native'
import FeedComp from './FeedComp'
import FeedComment from './FeedComment'
import styles from './styles'
import app_json from '../../../app.json';
import Reactotron from 'reactotron-react-native'

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
const VIEWABILITY_CONFIG = {
  minimumViewTime: 3000,
  viewAreaCoveragePercentThreshold: 100,
  waitForInteraction: true,
};

class SeparatorComponent extends PureComponent {
  render() {
    return <View style={{backgroundColor: 'rgb(200, 199, 204)', height:1}} />;
  }
}


class FeedDetail extends PureComponent{
  constructor(props){
    super(props)
    this.state = {
      comment: '',
      cl: [], //comment List
      loaded: false,
      behavior: 'position',
    }
    this.handlePostComment = this.handlePostComment.bind(this)
    this.renderComment = this.renderComment.bind(this)
    this.renderPostBtn = this.renderPostBtn.bind(this)
  }

  componentDidMount(){
    this.fetchData();
  }
  async fetchData(){
    const REQUEST_URL = app_json.REQUEST_URL || "http://localhost:9000";
    _id = this.props.navigation.state.params._id;
    let response = await fetch(`${REQUEST_URL}/feed/${_id}/comment`);
    let responseJson = await response.json();
    return this.setState({ cl: responseJson.comment, loaded: true })
  }
  handlePostComment(){
    let { _id, typeOf }= this.props.navigation.state.params, comment = this.state.comment
    this.props.createFeedCmt(_id, comment, this.props.user, typeOf)
    this.setState({comment: ''})
    this.fetchData();
  }
  renderComment({item}){
    if(this.state.loaded){
      return <FeedComment {...item} navigation={this.props.navigation}/>
    } else {
      return false
    }
  }
  renderPostBtn(){
    if(this.state.comment){
      return  <TouchableOpacity onPress={this.handlePostComment}>
                <Text style={{fontWeight: '600', color: '#FEC13A'}}>게시</Text>
              </TouchableOpacity>
    } else {
      return <Text style={{fontWeight: '600', color: '#dbdbdb'}}>게시</Text>
    }
  }
  render(){
    return(
      <View style={styles.detail_view}>

        <AnimatedFlatList
            ItemSeparatorComponent={SeparatorComponent}
            ListHeaderComponent={() => <FeedComp {...this.props.navigation.state.params} detail={true}/>}
            data={this.state.cl}
            keyExtractor={item => item._id}
            renderItem={this.renderComment}
            // shouldItemUpdate={this._shouldItemUpdate}
            viewabilityConfig={VIEWABILITY_CONFIG}
          />

          <KeyboardAvoidingView
            behavior={this.state.behavior}
            keyboardVerticalOffset={-65}
          >
          <View style={styles.comment_input_cont}>
            <TextInput
              style={styles.comment_input}
              autoCapitalize= "none"
              // multiline={true}
              value={this.state.comment}
              onChangeText={(val) => this.setState({comment: val})}
              placeholder="댓글을 입력하세요"/>
            {this.renderPostBtn()}
          </View>
          </KeyboardAvoidingView>
        </View>
    )
  }
}


FeedDetail.navigationOptions = ({navigation}) => ({
  headerTitle: '댓글',
  // headerLeft: <Button title='뒤로' color='#fff' onPress={() => navigation.goBack()} />,
  headerStyle: { backgroundColor: '#30333C' },
  headerTintColor: 'white'
});

const mapStateToProps = ({permissions}) => ({
  user: permissions.user
})

export default connect(mapStateToProps, actions)(FeedDetail)
