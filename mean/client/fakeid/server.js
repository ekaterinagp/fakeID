var express = require("express");
const path = require('path');

var app = express();

// Create link to Angular build directory
var distDir = __dirname + "/dist/fakeid/";
app.use(express.static(distDir));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/fakeid/index.html'));
  });

app.listen(process.env.PORT || 8080);