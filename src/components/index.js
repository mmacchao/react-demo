/**
 * Created by 6396000799 on 2017/3/20.
 */
import React from 'react'
export default class Index extends React.Component {
  state = {username: 'test'}
  constructor(props) {
    super(props)
  }
  render() {
    let {username} = this.state
    return (
      <div className="text-success">
        欢迎回家, {username}
      </div>
    )
  }
}
