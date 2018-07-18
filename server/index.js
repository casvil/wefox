const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/../dist/WeFox'));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname + '/../dist/WeFox/index.html'));
});

app.listen(process.env.PORT || 8080); // Default Heroku port
