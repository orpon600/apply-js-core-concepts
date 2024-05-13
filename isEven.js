// // even
// console.log(4 / 2);
// console.log(44 / 2);
// console.log(80 / 2);
// console.log(466 / 2);

// // odd
// console.log(51 / 2);
// console.log(77 / 2);
// console.log(89 / 2);
// console.log(993 / 2);

// even
// vag ses ber korar jonno
// console.log(4 % 2);
// console.log(44 % 2);
// console.log(80 % 2);
// console.log(466 % 2);

// odd
// vag ses ber korar jonno
// console.log(7 % 2);
// console.log(77 % 2);
// console.log(89 % 2);
// console.log(993 % 2);

// function isEven(number) {
//   const remainder = number % 2;
//   console.log(remainder);
// }
// isEven(48);

// function isOdd(number) {
//   const remainder = number % 2;
//   if (remainder === 0) {
//     console.log("number is even");
//   } else {
//     console.log("number is odd");
//   }
// }
// isOdd(303);
// isOdd(1280);

function isOdd(number) {
  const remainder = number % 2;
  if (remainder === 0) {
    return true;
  } else {
    return false;
  }
}
const myNumberIsEven = isOdd(303);
console.log(myNumberIsEven);
const herNumberIsEven = isOdd(1280);
console.log(herNumberIsEven);
