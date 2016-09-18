import { View, Text } from 'react-native';
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import * as actions from './actions'
import { Global } from './components'
import { Intro, Network } from '../panel/components'
import Feed from '../feed/Feed'
import Drawer from 'react-native-drawer'
// import Panel from '../panel/Panel'
import Panel from './components/Panel'



class Root extends Component {
  state={
		drawerOpen: false,
		drawerDisabled: false,
	};
	closeDrawer = () => {
		this._drawer.close()
	};
	openDrawer = () => {
		this._drawer.open()
	};
  _replacePanel (i) {
    const { replacePanel } = this.props
    replacePanel(i)
  }
  _renderPanelContent (key) {
    switch (key) {
      case 'news':
        return <Feed />
      case 'intro':
        return <Intro />
      case 'network':
        return <Network />
    }
  }
  render(){
    return (
      <Drawer
        ref={(ref) => this._drawer = ref}
        type="overlay"
        content={
          <Panel
            {...this.props}
            closeDrawer={this.closeDrawer}
            replacePanel={this._replacePanel}
            renderPanelContent={this._renderPanelContent}
          />
        }
        styles={{main: {shadowColor: '#000000', shadowOpacity: 0.3, shadowRadius: 15}}}
        onOpen={() => {
          console.log('onopen')
          this.setState({drawerOpen: true})
        }}
        onClose={() => {
          console.log('onclose')
          this.setState({drawerOpen: false})
        }}
        tweenDuration={100}
        panThreshold={0.08}
        disabled={this.state.drawerDisabled}
        openDrawerOffset={0.2}
        negotiatePan
        >
        <Global />
      </Drawer>
    )
  }
}
// panOpenMask={0.2} => 추가하면 손으로 열기 가능..ㅎㅎㅎ
Root.displayName = 'Root'
Root.propTypes = {
  replacePanel: PropTypes.func.isRequired
}
export default connect(
  (state) => ({
    panels: state.root
    //constant와 연결
  }),
  (dispatch) => ({
    replacePanel: (index) => dispatch(actions.replacePanel(index))
  })
)(Root)
