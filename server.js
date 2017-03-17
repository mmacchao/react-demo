/**
 * Created by 6396000799 on 2017/3/13.
 */
const express = require('express')
const path = require('path')
const app = express()
app.use(express.static(__dirname))

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/zma')
const db = mongoose.connection


db.on('error', console.error.bind(console, 'connection failed'))
db.once('open', () => {
  const kittySchema = new mongoose.Schema({
    name: String
  })
  kittySchema.methods.speak = function() {
    const greeting = this.name ?
    "Meow name is " + this.name :
      "I don't have a name"
    console.log(greeting)
  }

  const Kitten = mongoose.model('kitten', kittySchema)

  var silence = new Kitten({name: 'Silence'})
  // console.log(silence.name)
  // silence.save()
  // silence.speak()

  const fluffy = new Kitten({name: 'fluffy'})
  // fluffy.speak()
  // fluffy.save((err, fluffy) => {
  //   fluffy.speak()
  // })

  Kitten.find((err, kittens) => {
    if(err) return console.error(err)
    // console.log(kittens)
  })

  Kitten.find({name: /^fluff/}, () => {})
  app.get('/', (req, res) => {
    res.send("hello world")
  })
// app.post()

})

const server = app.listen(3002, () => {
  const host = server.address().address
  const port = server.address().port
  console.log(host, port)
})



