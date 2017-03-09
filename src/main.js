/**
 * Created by 6396000799 on 2017/3/8.
 */
import React from 'react'
import {render} from 'react-dom'
import App from './components/app'
import 'bootstrap/dist/css/bootstrap.min.css'
import './main.less'

window.state = {
  users: []
}
window.log = window.console.log
render(<App></App>, document.getElementById('app'))

// fetch('../data/tsconfig.json')
//   .then(res => res.json())
//   .then(res => console.log(res))
//   .catch(err => console.error(err))
