/**
 * Created by 6396000799 on 2017/3/8.
 */
import React, {Component} from 'react'
import Home from './home.js'
import Footer from './footer'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {msg: 'hello world 你好 世界'}
  }
  render() {
    return (
      <div>
        <Home/>
        <Footer/>
      </div>
    )
  }
}
export default App
