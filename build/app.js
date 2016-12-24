const path = require('path');
const express = require('express');
const app = express();


app.use(express.static(__dirname));

app.get('/', function (_, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(1337);
