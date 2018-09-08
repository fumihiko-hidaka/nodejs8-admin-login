const express = require('express');

const app = express();
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index')
});

app.get('/policy', (req, res) => {
  res.render('privacy')
});

app.listen(process.env.PORT || 8080);
