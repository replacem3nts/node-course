const postman = require('postman-request');

const key = 'insert API key here...';

const url = `http://api.weatherstack.com/current?access_key=${key}&query=37.8267,-122.4233`;

postman({ url: url }, (error, resp) => {
  console.log(resp);
});
