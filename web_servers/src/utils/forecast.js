var axios = require("axios");

var API_KEY = "5fd2b18518fd014e54a46bc68d82682f";

const forecast = (lat, lon, callback) => {
  axios
    .get(
      "https://api.openweathermap.org/data/2.5/weather?lat=" +
        lat +
        "&lon=" +
        lon +
        "&appid=" +
        API_KEY
    )
    .then(function (response) {
      // var data = JSON.parse(response);
      console.log(response.data.main.temp);
      var degree = response.data.main.temp - 273.15;
      console.log(
        "It looks like " +
          parseFloat(degree).toFixed(2) +
          " degree outside in loss angeles"
      );
      callback(undefined, parseFloat(degree).toFixed(2));
    })
    .catch(function (error) {
      console.log(error);
      callback(error, undefined);
    })
    .then(function () {
      console.log("successfuly executed");
    });
};

module.exports = forecast;
