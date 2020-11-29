const postman = require('postman-request');

const MBkey = '...this is an api key';

const geocode = (address, callback) => {
  const url = `http://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=${MBkey}&limit=1`;

  postman({ url: url, json: true }, (error, resp) => {
    if (error) {
      callback('Unable to connect to location servces!', undefined);
    } else if (resp.body.features.length === 0) {
      callback('Unable to find location. Try another search.', undefined);
    } else {
      callback(undefined, {
        latitude: resp.body.features[0].center[0],
        longitude: resp.body.features[0].center[1],
        location: resp.body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
