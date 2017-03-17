/**
 * Created by 6396000799 on 2017/3/17.
 */
import React from 'react'
export default class Me extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      msgList: [
        {msg: '1tiao'},
        {msg: '2tiao'},
        {msg: '3tiao'},
        {msg: '4tiao'},
      ]
    }
  }
  componentDidMount() {
    fetch('/comment')
      .then(res => res.json())
      .then(msgList => {
        if(msgList.length)
          this.setState({msgList})
        else this.setState({msgList: [{msg: '空列表'}]})

      })
  }
  render() {
    const {msgList} = this.state
    const list = msgList.map((item, i) => {
      return <li key={i}>{item.msg}</li>
    })
    return (
      <div>
        <ul className="list-unstyled">
          {list}
        </ul>
      </div>
    )
  }
}
