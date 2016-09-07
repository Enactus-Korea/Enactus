import React, { PropTypes } from 'react'
import { View } from 'react-native'
// import { connect } from 'react-redux'
import styles from './styles'
import { NewPost } from './components'
// import * as actions from './actions'


const Post = (props) => {
  // const { addNewCounter, counters, decrement, increment } = props
  return (
    <View style={styles.container}>
      <NewPost />
    </View>
  )
}

// Post.displayName = 'Post'

// Post.propTypes = {
//   addNewCounter: PropTypes.func.isRequired,
//   counters: PropTypes.object.isRequired,
//   increment: PropTypes.func.isRequired,
//   decrement: PropTypes.func.isRequired
// }
//
export default Post

// connect(
//   (state) => ({
//     counters: state.app.counters
//   }),
//   (dispatch) => ({
//     addNewCounter: () => dispatch(actions.newCounter()),
//     increment: (id) => dispatch(actions.increment(id)),
//     decrement: (id) => dispatch(actions.decrement(id)),
//   })
// )(Post)
