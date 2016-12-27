const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 1337;

app.use(express.static(__dirname));

app.get('/', function (_, res) {
  res.render(path.join(__dirname, 'index.html'));
});

app.listen(PORT, err => {
  if (err) {
    return console.warn('something bad happened', err);
  }

  console.log(`Server is listening on port http://localhost:${PORT}`)
});
