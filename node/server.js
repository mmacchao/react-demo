/**
 * Created by 6396000799 on 2017/3/14.
 */
const express = require('express')
const app = express()
app.get('/', (req, res) => {
  res.send("hello world")
})

const server = app.listen(4000, () => {
  // const host = se
})
