/**
 * Created by 6396000799 on 2017/3/20.
 */
import React from 'react'
export default class Head extends React.Component {
  state = {}
  constructor(props) {
    super(props)
  }
  render() {
    let style = {
      'marginLeft': '20px'
    }
    return (
      <div className="clearfix">
        <a className="pull-right" href="#" style={style}>注册</a>
        <a className="pull-right" href="#">登陆</a>
      </div>
    )
  }
}
