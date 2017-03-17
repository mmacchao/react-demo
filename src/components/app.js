/**
 * Created by 6396000799 on 2017/3/8.
 */
import React, {Component} from 'react'
import Home from './home.js'
import Me from './me'
import Public from './public'
import Footer from './footer'
import {Route, BrowserRouter as Router, Link} from 'react-router-dom'
export default () => (
  <Router>
    <div>
      <div className="box">
        <Route exact path="/" component={Home}></Route>
        <Route path="/public" component={Public}></Route>
        <Route path="/me" component={Me}></Route>
      </div>
      <Footer/>
    </div>
  </Router>
)
// class App extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {msg: 'hello world 你好 世界'}
//   }
//   render() {
//     return (
//
//     )
//   }
// }
