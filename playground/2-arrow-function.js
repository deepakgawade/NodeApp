// const square = function (x) {
//   return x * x;
// };

// const square = (x) => {
//   return x * x;
// };

const square = (x) => x * x;
console.log(square(4));

const events = {
  name: "New year party",
  guestlist: ["Andrew", "Jane", "mike"],
  printguestList: function () {
    console.log("Guest list for " + this.name);
    this.guestlist.forEach((guest) => {
      console.log(guest + "is attending" + this.name);
    });
  },
};

events.printguestList();
