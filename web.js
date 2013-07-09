var express = require('express');
var fs = require ('fs');
var app = express.createServer(express.logger());
var inputfile = "index.html"


app.get('/', function(request, response) {
  
  fs.readFile(inputfile, function (err, data) {
      if (err) throw err;
      reponse.send(data);
  }
  // response.send("Hello World 4");
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
