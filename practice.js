// function milesToKilometer(hour) {
//   const kilometer = hour * 60;
//   return kilometer;
// }

// const dadaMiles = 9;
// const dadakilometer = milesToKilometer(dadaMiles);
// console.log("min", dadakilometer);

function hourToMinutes(hour) {
  const oneHour = 60;
  const time = hour * oneHour;
  return time;
}

const min = 7;
const mainTwo = hourToMinutes(min);
console.log(mainTwo);
