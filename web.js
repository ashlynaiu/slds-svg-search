var gzippo = require('gzippo');
var express = require('express');
var app = express();
app.use(gzippo.staticGzip("" + __dirname + "/dist"));

app.get('/*', function(req, res){
  res.sendFile(__dirname + '/dist/index.html');
});

app.listen(process.env.PORT || 5000);