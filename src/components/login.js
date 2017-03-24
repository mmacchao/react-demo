/**
 * Created by 6396000799 on 2017/3/20.
 */
import React from 'react'
export default class Demo extends React.Component {
  state = {
    username: '',
    pwd: '',
  }
  constructor(props) {
    super(props)
  }
  submit() {
    const {username, pwd} = this.state
    const {dispatch} = this.props
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username, pwd})
    })
      .then(res => res.json())
      .then(res => {
        if(res.res) {
          window.sessionStorage.setItem('isLogin', true)
          this.props.login()
          dispatch({type: 'SET_NAME', payload: {username}})
        }
      })
      .catch(err => log(err))
  }
  handleInput(name, e) {
    this.setState({[name]: e.target.value.trim()})
  }
  render() {
    const template = (
      <div className="box">
        {/*主体*/}
        <div>
          <p>
            <input type="text"
                   placeholder="用户名"
                   className="form-control"
                   value={state.username}
                   onInput={this.handleInput.bind(this, 'username')}/>
            <span></span>
          </p>
          <p>
            <input type="password"
                   className="form-control"
                   placeholder="密码"
                   value={state.pwd}
                   onInput={this.handleInput.bind(this, 'pwd')}/>
          </p>
          <p><button onClick={this.submit.bind(this)} className="btn btn-default">登陆</button></p>
        </div>
      </div>
    )
    return template
  }
}
