const hero = {
  name: "Bruce Wayne",
  age: 27,
  job: "superhero",
  loveInterest: "Catwoman",
  friends: ["Clark Kent", "Berry Allen", "John Washington", "Arthur Curry"],
  address: "Gotham City",
  gmail: "iambatman@gmail.com",
};

// const loveInterest = hero.loveInterest;
// const gmail = hero.gmail;
const { gmail, loveInterest } = hero;
// const loveInterest = hero.loveInterest;
console.log(loveInterest, gmail);
// console.log();

const friends = [
  "Clark Kent",
  "Berry Allen",
  "John Washington",
  "Arthur Curry",
];
const [first, next, ...rest] = friends;
console.log(rest);

const complexObject = {
  name: "abc",
  info: {
    address: "Chittagong",
    leader: "Jubayer Asif",
  },
};

const { leader } = complexObject.info;
console.log(leader);
