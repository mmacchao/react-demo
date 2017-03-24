/**
 * Created by 6396000799 on 2017/3/13.
 */
const log = console && console.log
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')


const app = express()
app.use(express.static(__dirname))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect('mongodb://localhost/zma')
const db = mongoose.connection


db.on('error', console.error.bind(console, 'connection failed'))
db.once('open', () => {
  // 创建schema
  const userSchema = new mongoose.Schema({
    username: String,
    pwd: String
  })
  const commentSchema = new mongoose.Schema({
    username: String,
    msg: String
  })
  // 创建model
  const User = mongoose.model('user', userSchema)
  const Comment = mongoose.model('comment', commentSchema)
  // 注册
  app.post('/register', (req, res) => {
    log(req.body)
    const user = new User(req.body)
    user.save(err => {
      if(err) obj = {res: false, message: 'register fail'}
      else obj = {res: true, message: 'register success'}
      res.send(obj)
    })
  })
    // 获取用户名
  app.get('/user', (req, res) => {
    User.find((err, users) => {
      const username = req.query.username
      let obj = {}
      let isExist = users.some(user => {
        if(user.username && user.username === username) return true
      })
      if(isExist) obj = {res: true, username}
      else obj = {res: false, username: ''}
      res.send(obj)
    })
  })

  // 登陆
  app.post('/login', (req, res) => {
    User.find(req.body, (err, users) => {
      log(users)
      let obj = {}
      if(users.length) obj = {res: true, message: ''}
      else obj = {res: false, message: ''}
      res.send(obj)
    })
  })

  // 添加评论
  app.post('/comment', (req, res) => {
    const comment = new Comment(req.body)
    comment.save()
    res.send({res: true, message: '添加成功'})
  })
  app.get('/comment', (req, res) => {
    let commentList = []
    Comment.find((err, comments) => {
      commentList = comments.map(item => {
        return {msg: item.msg}
      })
      res.send(commentList)
    })
  })

    // const user = new User({name: })
  // })
  // const kittySchema = new mongoose.Schema({
  //   name: String
  // })
  // kittySchema.methods.speak = function() {
  //   const greeting = this.name ?
  //   "Meow name is " + this.name :
  //     "I don't have a name"
  //   console.log(greeting)
  // }
  //
  // const Kitten = mongoose.model('kitten', kittySchema)
  //
  // var silence = new Kitten({name: 'Silence'})
  // // console.log(silence.name)
  // // silence.save()
  // // silence.speak()
  //
  // const fluffy = new Kitten({name: 'fluffy'})
  // // fluffy.speak()
  // // fluffy.save((err, fluffy) => {
  // //   fluffy.speak()
  // // })
  //
  // Kitten.find((err, kittens) => {
  //   if(err) return console.error(err)
  //   // console.log(kittens)
  // })
  //
  // Kitten.find({name: /^fluff/}, () => {})
  // app.get('/', (req, res) => {
  //   res.send("hello world")
  // })
// app.post()

})

const server = app.listen(3002, () => {
  const host = server.address().address
  const port = server.address().port
  console.log(host, port)
})



