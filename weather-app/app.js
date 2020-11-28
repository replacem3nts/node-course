const postman = require('postman-request');

const WSkey = '...weatherstack key';

const WSurl = `http://api.weatherstack.com/current?access_key=${WSkey}&query=34.0544,-118.2439&units=f`;

postman({ url: WSurl, json: true }, (error, resp) => {
  if (error) {
    console.log('Unable to connect to weather service!');
  } else if (resp.body.error) {
    console.log(`${resp.body.error.info}`);
  } else {
    const { temperature, feelslike, weather_descriptions } = resp.body.current;
    console.log(
      `${weather_descriptions[0]}. It is currently ${temperature} degrees out. It feels like ${feelslike} degrees out.`
    );
  }
});

const MBkey = '...mapbox key';

const MBurl = `http://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=${MBkey}&limit=1`;

https: postman({ url: MBurl, json: true }, (error, resp) => {
  if (error) {
    console.log('Unable to connect to geocoding service!');
  } else if (resp.body.message) {
    console.log(`${resp.body.message}`);
  } else {
    const { place_name, center } = resp.body.features[0];
    console.log(`The lat/long of ${place_name} is ${center[0]}, ${center[1]}`);
  }
});
