const express = require('express');

const app = express();

app.get('', (req, res) => {
  res.send('HELLO express...');
});

app.get('/help', (req, res) => {
  res.send('Youre at the help page');
});

app.get('/about', (req, res) => {
  res.send('Welcome to the About Page');
});

app.get('/weather', (req, res) => {
  res.send('Welcome to the Weather Page');
});

app.listen(3000, () => {
  console.log('Server started on port 3000...');
});
