const Sum = (num1, num2, callback) => {
  num = num1 + num2;
  callback(num);
};

Sum(1, 2, (num) => {
  console.log(num * num);
});
