import { connect } from 'react-redux'
import { NavRoot } from './components'
import { push, pop } from './actions'

function mapStateToProps (state) {
  return{
    navigation: state.navReducer
  }
}
NavRoot.displayName = 'Nav'
export default connect(mapStateToProps,{
  pushRoute: (route) => push(route),
  popRoute: () => pop()
})(NavRoot)
