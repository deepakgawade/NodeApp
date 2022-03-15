//const { request } = require("http");
const https = require("https");
var address = "New York";

var token =
  "pk.eyJ1IjoiZGVlcGFrZ2F3YWRlMjIiLCJhIjoiY2wxczU0eDl5MDBvMDNqcXpuM3FzengxZCJ9.pjXojj5HkIVnpfZVoQ5VoQ";

const url =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
  address +
  ".json?access_token=" +
  token;
const call = https.request(url, (response) => {
  //  console.log(response);
  let data = "";
  response.on("data", (chunk) => {
    console.log(chunk);
  });

  response.on("end", () => {});
});
call.end();
