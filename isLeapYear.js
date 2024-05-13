// function isLeapYear(year) {
//   const remainder = year % 4;
//   if (remainder === 0) {
//     console.log("your year is leap year", year);
//   } else {
//     console.log("your year is not a leap year", year);
//   }
// }

// isLeapYear(1933);
// isLeapYear(1960);

// function isLeapYear(year) {
//   const remainder = year % 4;
//   if (remainder === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// const isMyLeapYear = isLeapYear(1933);
// console.log("my year:", isMyLeapYear);

// const isHerLeapYear = isLeapYear(1960);
// console.log("Her year:", isHerLeapYear);

function isLeapYear(year) {
  const remainder = year % 4;
  if (remainder === 0) {
    return true;
  } else {
    return false;
  }
}

const isMyLeapYear = isLeapYear(1933);
console.log("my year:", isMyLeapYear);

const isHerLeapYear = isLeapYear(1960);
console.log("Her year:", isHerLeapYear);
