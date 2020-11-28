const postman = require('postman-request');

const key = '...some key here...';

const url = `http://api.weatherstack.com/current?access_key=${key}&query=37.765,-122.4233&units=f`;

postman({ url: url, json: true }, (error, resp) => {
  // console.log(resp.body.current);
  const { temperature, feelslike, weather_descriptions } = resp.body.current;
  console.log(
    `${weather_descriptions[0]}. It is currently ${temperature} degrees out. It feels like ${feelslike} degrees out.`
  );
});
