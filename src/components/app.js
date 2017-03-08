/**
 * Created by 6396000799 on 2017/3/8.
 */
import React, {Component} from 'react'
class app extends Component {
  constructor(props) {
    super(props)
    this.state = {msg: 'hello world 你好 世界'}
  }
  render() {
    return (
      <div>{this.state.msg}</div>
    )
  }
}
export default app
