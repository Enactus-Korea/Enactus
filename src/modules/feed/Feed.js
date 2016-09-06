import React, { PropTypes } from 'react'
import { View } from 'react-native'
// import { connect } from 'react-redux'
import styles from './styles'
import { Post } from './components'
// import * as actions from './actions'


const Feed = (props) => {
  // const { addNewCounter, counters, decrement, increment } = props
  return (
    <View style={styles.container}>
      <Post />
    </View>
  )
}

// Feed.displayName = 'Feed'

// Feed.propTypes = {
//   addNewCounter: PropTypes.func.isRequired,
//   counters: PropTypes.object.isRequired,
//   increment: PropTypes.func.isRequired,
//   decrement: PropTypes.func.isRequired
// }
//
export default Feed

// connect(
//   (state) => ({
//     counters: state.app.counters
//   }),
//   (dispatch) => ({
//     addNewCounter: () => dispatch(actions.newCounter()),
//     increment: (id) => dispatch(actions.increment(id)),
//     decrement: (id) => dispatch(actions.decrement(id)),
//   })
// )(Feed)
