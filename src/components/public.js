/**
 * Created by 6396000799 on 2017/3/17.
 */
import React from 'react'
import {Redirect} from 'react-router-dom'
export default class Public extends React.Component {
  state = {
    msg: '',
    username: '',
    isSuccess: false,
    redirectToMe: false,
  }
  constructor(props) {
    super(props)
  }
  submit = () => {
    let {msg, username} = this.state
    fetch('/comment', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({msg, username})
    })
      .then(res => res.json())
      .then(res => {
        this.setState({isSuccess: res.res, redirectToMe: true})
        log(this.state.redirectToMe)
      })
      .catch(err => log(err))
  }
  inputHandler = (e) => {
    this.setState({msg: e.target.value})
  }
  componentDidMount = () => {
    let username = window.sessionStorage.getItem('username')
    username = username || 'test'
    this.setState({username})
  }
  render() {
    const {redirectToMe} = this.state
    log(redirectToMe)
    if(redirectToMe) {
      return (
        <Redirect push to="/me"></Redirect>
      )
    }
    return (
      <div>
        <textarea className="form-control" type="text" placeholder="请发表文章" onInput={this.inputHandler}/>
        <button className="btn btn-default" onClick={this.submit}>发表</button>
      </div>
    )
  }
}
