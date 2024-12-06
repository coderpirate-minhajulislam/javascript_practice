const user = {
  username: "Minhaz",
  price: 99,

  welcomeMassage: function () {
    console.log(`${this.username}, welcome to website`);
  },
};

// user.welcomeMassage()
// user.username = "Minhajul Islam"
// user.welcomeMassage()
// console.log(this);

// const addTow = (num1, num2) =>
//   num1 +
//   num2    // arrow function

// console.log(addTow(5, 8));

(function test() {
  console.log(`Hi Minhaz`);
})();
((name) => {
  console.log(`Hi Minhajul islam ${name}`);
})('Minhajul Vai');
