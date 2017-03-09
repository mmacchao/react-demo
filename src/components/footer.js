/**
 * Created by 6396000799 on 2017/3/8.
 */
import React from 'react'
export default class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="footer">
        <a href="#" className="tab">主页</a>
        <a href="#" className="tab">发表</a>
        <a href="#" className="tab">我</a>
      </div>
    )
  }
}
