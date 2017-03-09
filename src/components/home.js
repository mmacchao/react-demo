/**
 * Created by 6396000799 on 2017/3/8.
 */
import React, {Component} from 'react'
export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      btnText: '注册',
      username: '',
      password: '',
    }
    this.togglePage = this.togglePage.bind(this)
  }
  togglePage(btnText) {
    this.setState({btnText})
  }
  handleInput(key, e) {
    this.setState({[key]: e.target.value})
  }
  submit() {
    let {username, password: pwd} = this.state
    window.state.users.push({username, pwd})
  }
  render() {
    let state = this.state
    return (
      <div>
        {/*头部*/}
        <div>
          <a href="#" onClick={this.togglePage.bind(this, '注册')}>注册</a>
          <a href="#" onClick={this.togglePage.bind(this, '登陆')}>登陆</a>
        </div>
        {/*主体*/}
        <div>
          <p>
            <input type="text"
                   placeholder="用户名"
                   value={state.username}
                   onInput={this.handleInput.bind(this, 'username')}/><br/>
          </p>
          <p>
            <input type="password"
                   placeholder="密码"
                   value={state.password}
                   onInput={this.handleInput.bind(this, 'password')}/>
          </p>
          <p><button onClick={this.submit.bind(this)}>{state.btnText}</button></p>
        </div>
      </div>
    )
  }
}
