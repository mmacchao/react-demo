/**
 * Created by 6396000799 on 2017/3/8.
 */
import React, {Component} from 'react'
import Home from './home'
import Welcome from './welcome'
export default class App extends Component {
  state = {
    content: null,
    isLogin: false,
  }
  loginHandler = () => {
    this.setState({content: <Home></Home>})
  }
  componentWillMount() {
    // let {isLogin} = this.state
    let isLogin = window.sessionStorage.getItem('isLogin')
    log(isLogin)
    let content = isLogin ? <Home></Home> : <Welcome login={this.loginHandler}></Welcome>
    this.setState({content})
  }
  render() {
    let {content} = this.state
    let template = (
      <div className="container">
        <div className="box">
          {content}
        </div>
      </div>
    )
    return template
  }
}
