const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const part = nums.slice(2, 8);

const remove = nums.splice(2, 8, 77);

console.log(remove);

const together = nums.join("it's a number");
console.log(together);
