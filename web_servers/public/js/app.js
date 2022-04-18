// geocode(req.query.search, (error, data) => {
//   if (error) {
//     res.send({ errorResponse: error });
//     return;
//   }
//   //forecast(22.1991660760527, 78.476681027237);
//   forecast(data[1], data[0], (error, data) => {
//     console.log(req.query);
//     res.send({
//       temperature: data,
//     });
//   });
// });
console.log("Use site to check weather");

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const message = document.querySelector("#message-1");
const message2 = document.querySelector("#message-2");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = search.value;

  fetch("http://localhost:4000/products?search=" + location).then(
    (response) => {
      response.json().then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          console.log(data.location);
          console.log(data.forecast);
          console.log(data.temparature);
          message.innerHTML = data.temparature;
          message2.innerHTML = data.location;
        }
      });
    }
  );
});
