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
      error_msg: '',
      success_msg: '',
      canRegister: '',
    }
    this.togglePage = this.togglePage.bind(this)
    this.handleFocus = this.handleFocus.bind(this)
  }
  togglePage(btnText) {
    this.setState({btnText})
  }
  handleInput(key, e) {
    this.setState({[key]: e.target.value})
  }
  handleFocus() {
    this.setState({error_msg: ''})
  }
  handleBlur = () => {
    fetch(`/user?username=${this.state.username}`)
      .then(res => res.json())
      .then(res => {
        if(res.res) {
          this.setState({canRegister: '用户名已存在'})
        } else this.setState({canRegister: '可以注册'})
      })
  }
  submit() {
    if(this.state.btnText === '注册') {
      if(this.state.canRegister === '用户名已存在') return
      let {username, password: pwd} = this.state
      fetch('/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, pwd})
      })
        .then(res => res.json())
        .then(res => {
          if(res.res) {
            this.setState({success_msg: '注册成功', error_msg: ''})
            window.sessionStorage.setItem('username', username)
          } else {
            this.setState({success_msg: '', error_msg: '注册失败'})
          }
        })
        .catch(err => console.error(err))
    }
  }
  componentDidMount() {
    const username = window.sessionStorage.getItem('username')
    if(username) this.setState({success_msg: '欢迎回家', error_msg: ''})
  }
  render() {
    let state = this.state
    const {canRegister, error_msg, success_msg} = this.state
    const template = (
      <div className="box">
        {/*主体*/}
        <div>
          <p>
            <input type="text"
                   placeholder="用户名"
                   value={state.username}
                   onFocus={this.handleFocus}
                   onBlur={this.handleBlur}
                   onInput={this.handleInput.bind(this, 'username')}/>
            <span>{canRegister}</span>
          </p>
          <p>
            <input type="password"
                   placeholder="密码"
                   value={state.password}
                   onFocus={this.handleFocus}
                   onInput={this.handleInput.bind(this, 'password')}/>
          </p>
          <p><button onClick={this.submit.bind(this)}>{state.btnText}</button></p>
        </div>
      </div>
    )
    const tip = (
      <div className="box">
        <p><span className="u-error">{state.error_msg}</span></p>
        <p><span className="u-success">{state.success_msg}</span></p>
      </div>
    )
    return template
  }
}
