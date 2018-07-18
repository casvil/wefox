const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('../dist/WeFox'));

app.get('*', function(req, res) {
  res.sendFile(path.join('../dist/WeFox/index.html'));
});

app.listen(process.env.PORT || 8080); // Default Heroku port
