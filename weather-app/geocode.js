var axios = require("axios");

var token =
  "pk.eyJ1IjoiZGVlcGFrZ2F3YWRlMjIiLCJhIjoiY2wxczU0eDl5MDBvMDNqcXpuM3FzengxZCJ9.pjXojj5HkIVnpfZVoQ5VoQ";

const geocode = (address, callback) => {
  var lat, lon;
  //To fetch log and lat of place
  axios
    .get(
      "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
        address +
        ".json?access_token=" +
        token
    )
    .then(function (response) {
      console.log(response.data.features[0].center);
      lat = response.data.features[0].center[1];
      lon = response.data.features[0].center[0];
      callback(undefined, response.data.features[0].center);
    })
    .catch(function (error) {
      console.log(error);
      callback("Connection failed", undefined);
    })
    .then(function () {
      console.log("successfuly executed");
    });
};

module.exports = geocode;
