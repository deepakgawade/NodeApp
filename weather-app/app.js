const axios = require("axios");
//var createfech = require("http-client").createFetch;
var API_KEY = "5fd2b18518fd014e54a46bc68d82682f";

axios
  .get(
    "https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=" +
      API_KEY
  )
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    console.log("successfuly executed");
  });
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
