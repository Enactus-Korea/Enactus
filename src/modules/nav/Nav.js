import React, { PropTypes, Component } from 'react'
import { View, BackAndroid, NavigationExperimental } from 'react-native'
import { connect } from 'react-redux'
import { Home, About } from './components'
import * as actions from './actions'
import styles from './styles'
const { CardStack: NavigationCardStack } = NavigationExperimental

const Nav = (props) => {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  )
}

Nav.displayName = 'Nav'

// function mapStateToProps (state) {
//   return{
//     navigation: state.navReducer
//   }
// }
// NavRoot.displayName = 'Nav'
// export default connect(mapStateToProps,{
//   pushRoute: (route) => push(route),
//   popRoute: () => pop()
// })(NavRoot)


export default connect(
  (state) => ({
    navigation: state.nav.counters
  }),
  (dispatch) => ({
    push: (route) => dispatch(actions.push(route)),
    pop: () => dispatch(actions.pop()),
  })
)(Nav)
