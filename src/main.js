/**
 * Created by 6396000799 on 2017/3/8.
 */
import React from 'react'
import {render} from 'react-dom'
import App from './components/app'
import 'bootstrap/dist/css/bootstrap.min.css'
import './main.less'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

window.log = window.console.log
window.state = {
  users: []
}
window.log = window.console.log
const defaultState = {
  username: '',
}
const reducer = (state = {}, action = {}) => {
  switch(action.type) {
    case 'SET_NAME': return Object.assign({}, state, action.username)
  }
}

// 创建store
const store = createStore(reducer, defaultState)
// 创建listener
const listener = () => {
  render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById('app')
    )
}
store.subscribe(listener)
listener()



/*
const Counter = ({value, onIncrement, onDecrement}) => (
  <div>
    <h1>{value}</h1>
    <button onClick={onIncrement}>加1</button>
    <button onClick={onDecrement}>减1</button>
  </div>
)

const reducer = (state = 0, action) => {
  switch(action.type) {
    case 'INCREMENT': return state + 1
    case 'DECREMENT': return state - 1
    default: return state
  }
}
const store = createStore(reducer)

const listener = () => {
  render(<Counter
    value={store.getState()}
    onIncrement={() => store.dispatch({type: 'INCREMENT'})}
    onDecrement={() => store.dispatch({type: 'DECREMENT'})}
  />, document.getElementById('app'))
}

store.subscribe(listener)
listener()
*/
