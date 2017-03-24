/**
 * Created by 6396000799 on 2017/3/8.
 */
import React from 'react'
import {Link} from 'react-router-dom'
export default class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="footer clearfix">
        <Link to="/" className="tab">主页</Link>
        <Link to="/public" className="tab">发表</Link>
        <Link to="/me" className="tab">我</Link>
      </div>
    )
  }
}
