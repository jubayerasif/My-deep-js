const ages = [12, 14, 16, 13, 17];
const ages2 = [15, 16, 12];
const ages3 = [22, 36, 25, 75, 45];
const allAges = ages.concat(ages2).concat([5]).concat(ages3);
const allAges2 = [...ages, ...ages2, 5, ...ages3];
console.log(allAges);
console.log(allAges2);

const ceo = 108;
const manager = 85;
const stuff = 45;
const totalS = [108, 85, 45];

const maximum = Math.max(ceo, manager, stuff);
const maximum2 = Math.max(...totalS);
console.log(maximum);
console.log(maximum2);
