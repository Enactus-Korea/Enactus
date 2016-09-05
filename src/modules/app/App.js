import React, { PropTypes } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import styles from './styles'
import { Counters, Counter } from './components'
// [부가]components/index.js에서 묶어준 것을 하나씩 불어주는 것이다.
// 외적인 폼만 정리된 것을 불러온다 (counters에는 따른 기능이 없음)
import * as actions from './actions'

/**
5.[추가하기]
4에서 불러온 것들을 renderCounters에 연결하여 실행함
decrementFn={() => decrement(id)} 는
actions.js에서 정의한 decrement func를 실행한다는 것임
이를 받는 것은 components/Counter.js
*/
const renderCounters = (counters, decrement, increment) => {
  return Object.keys(counters).map((id) => {
    const value = counters[id]
    return (
      <Counter
        key={id}
        decrementFn={() => decrement(id)}
        incrementFn={() => increment(id)}>
        {value}
      </Counter>
    )
  })
}
//counters[id]는 카운트 되는 id값이다. {value} 은 {children}과 같음 (자식임)
// decrementFn는 액션에서 정의해준 decrement(id)가 실행된다.
// Component와 연결되는 기능들을 설정해주는 것이다.

const App = (props) => {
  const {
    addNewCounter,
    counters,
    decrement,
    increment
  } = props

  return (
    <View style={styles.container}>
      <Counters addFn={addNewCounter}>
        {renderCounters(counters, decrement, increment)}
      </Counters>
    </View>
  )
}

App.displayName = 'App'

/**
  4.[추가하기] 불러올 것들 App.propTypes로 정리해주기

 PropTypes.func.isRequired => 액션에서 정의한 함수를 불러오고
 PropTypes.object.isRequired => reducer에서 정의한 counters 오브젝트 불러오고
 App.js에서 사용하는 addNewCounter,counters,increment,decrement는
 actions.js와 reducer.js에 있는 것과 동일하게 됨
*/
App.propTypes = {
  addNewCounter: PropTypes.func.isRequired,
  counters: PropTypes.object.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired
}

export default connect(
  (state) => ({
    counters: state.app.counters
  }),
  //[추가하기]state.app.counters => reducer에 있는 counter
  (dispatch) => ({
    addNewCounter: () => dispatch(actions.newCounter()),
    increment: (id) => dispatch(actions.increment(id)),
    decrement: (id) => dispatch(actions.decrement(id)),
  })
  //[추가하기] actions.js에 있는 func를 묶음
)(App)
