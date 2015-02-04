var express = require('express')
var app = express()
var fs = require('fs')

app.set('port', (process.env.PORT || 8080))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  filedata = fs.readFileSync("index.html").toString();
  response.send("Hello World!  here is the file data: "+filedata)
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
