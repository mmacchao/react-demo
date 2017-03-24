/**
 * Created by 6396000799 on 2017/3/20.
 */
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import Index from './index'
import Public from './public'
import Me from './me'
import Footer from './footer'

// export default () => (
//   <Router>
//     <Route path="/" component={Index}></Route>
//   </Router>
//   // <div>21414</div>
// )

export default class Home extends React.Component {
  state = {
    username: 'test'
  }
  constructor(props) {
    super(props)
  }
  render() {
    const {state} = this.props
    log(this.props, state)
    const {username} = getState().username
    return (
      <Router>
        <div>
          <Route exact path="/" component={Index}></Route>
          <Route path="/public" component={Public}></Route>
          <Route path="/me" component={Me}></Route>
          <Footer></Footer>
        </div>
      </Router>
    )
  }
}
