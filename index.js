var express = require('express')
var app = express();
var fs = require('fs')
var os = require('os')

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  filedata = fs.readFileSync("index.html").toString()
  filedata += " " + os.type() + " " + os.arch() 
  response.send(filedata)
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
