/**
 * Created by 6396000799 on 2017/3/20.
 */
import React from 'react'
import Head from './welcome-head'
import Login from './login'
export default class Welcome extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <Head></Head>
        <Login login={this.props.login}></Login>
      </div>
    )
  }
}

