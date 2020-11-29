const path = require('path');
const express = require('express');

const app = express();
const pubDirectoryPath = path.join(__dirname, '../public');

app.set('view engine', 'hbs');
app.use(express.static(pubDirectoryPath));

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather App',
    name: 'Node Course',
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About',
    name: 'Node Course',
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help',
    content: 'Help! I need somebody... Help! Not just anybody...',
  });
});

app.get('/weather', (req, res) => {
  res.send({
    forecast: 'Its gonna be cloudy!',
    location: 'Yo mamas house',
  });
});

app.listen(3000, () => {
  console.log('Server started on port 3000...');
});
