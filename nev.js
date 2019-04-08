var express = require('express')


var port = 9090 

var app = express()



app.use(express.static('./game'))

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:' + port + '\n')
})