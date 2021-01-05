var express = require("express");

var app = express();

// Create link to Angular build directory
var distDir = __dirname + "/dist/fakeid/";
app.use(express.static(distDir));
app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: 'dist/<name-on-package.json>/'}
  );
  });
app.listen(process.env.PORT || 8080);