// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

// let age = 40;

// if (age >= 65) {
//   console.log('Senior Citizens')
// } else if (age > 30) {
//   console.log('Citizens')
// } else if (age >= 18) {
//   console.log('Majors')
// } else if (age < 18) {
//   console.log('Minors')
// }

// let sum = 0;

// for (let i = 1; i <= 5; i++) {
//   sum = sum + i;
// }

// console.log('Value of sum', sum);

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }


// let i = 0;

// while (i <= 3) {
//   console.log(i);
//   i++
// }

// for (let i = 0; i <= 10; i++) {
//   if (i === 5) {
//     continue;
//   }
//   console.log(i);
// }

// let numbers = [-2, 5, -1, 7, 0];
// let count = 0;

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > 0) {
//     count++;
//   }
// }

// console.log(count);


// for (let i = 10; i > 0; i--) {
//   console.log(i);
// }

// for (let i = 1; i < 20; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

// let num = 0;

// if (num > 0) {
//   console.log('Positive number');
// } else if (num < 0) {
//   console.log('Negative number');
// } else if (num === 0) {
//   console.log('Zero');
// }

// sum = 0;

// for (let i = 1; i < 10; i++) {
//   if (i % 2 === 0) {
//     sum = sum + i;
//   }
// }
// console.log(sum);

// let stars = '';

// for (let i = 0; i <= 4; i++) {
//   stars = stars + "*";
//   console.log(stars);
// }
//============================================
// count = 0;

// for (let i = 1; i <= 30; i++) {
//   if (i % 3 === 0) {
//     count++;
//   }
// }
// console.log(count);

// for (let i = 0; i <= 30; i++) {
//   if (i % 3 === 0) {
//     console.log('Fizz');
//   } else {
//     console.log(i);
//   }
// }

let a = 10;
let b = 25;
let c = 15;

for (i = 20; i >= 0; i--) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

let stars = "****";

for (let i = 4; i >= 1; i--) {
  stars = stars.slice(0, -1);
  console.log(stars);
}