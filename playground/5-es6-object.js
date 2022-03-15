// const userName = "Ravina";
// const age = ;

const user = {
  uname: "Ravina",
  age: undefined,
  location: "Bordeux",
};

console.log(user);

const { uname = "jdshfjhf", age = 21 } = user; //if value is undefined then it will take the constatnt value
console.log(uname);
console.log(age);
