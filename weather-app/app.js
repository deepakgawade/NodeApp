const axios = require("axios");
//var createfech = require("http-client").createFetch;
var API_KEY = "5fd2b18518fd014e54a46bc68d82682f";

var lat, lon;

//To fetch log and lat of place
axios
  .get(
    "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZGVlcGFrZ2F3YWRlMjIiLCJhIjoiY2wxczU0eDl5MDBvMDNqcXpuM3FzengxZCJ9.pjXojj5HkIVnpfZVoQ5VoQ"
  )
  .then(function (response) {
    // var data = JSON.parse(response);
    console.log(response.data.features[0].center);
    lat = response.data.features[0].center[0];
    lon = response.data.features[0].center[1];
    // var degree = response.data.main.temp - 273.15;
    // console.log(
    //   "It looks like " + parseFloat(degree).toFixed(2) + " degree outside"
    // );

    //to fetch temperatuer at above mention place
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
          "It looks like " + parseFloat(degree).toFixed(2) + " degree outside"
        );
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        console.log("successfuly executed");
      });
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    console.log("successfuly executed");
  });

// //to fetch temperatuer at above mention place
// axios
//   .get(
//     "https://api.openweathermap.org/data/2.5/weather?lat=" +
//       lat +
//       "&lon=" +
//       lon +
//       "&appid=" +
//       API_KEY
//   )
//   .then(function (response) {
//     // var data = JSON.parse(response);
//     console.log(response.data.main.temp);
//     var degree = response.data.main.temp - 273.15;
//     console.log(
//       "It looks like " + parseFloat(degree).toFixed(2) + " degree outside"
//     );
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .then(function () {
//     console.log("successfuly executed");
//   });
// //setting base url
// const API_KEY = "5fd2b18518fd014e54a46bc68d82682f";
// const fetch = createFetch(
//   base(
//     "https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid={API_KEY}"
//   ),
//   accept("application/json"),
//   parse("json")
// );

// fetch().then((response) => {
//   console.log(response.data);
// });
