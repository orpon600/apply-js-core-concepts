function milesToKilometer(miles) {
  const kilometer = miles * 1.609;
  return kilometer;
}

const dadaMiles = 9;
const dadakilometer = milesToKilometer(dadaMiles);
console.log(dadakilometer);

const dadaInches = 144;
const dadaFeet = inchToFeet(dadaInches);
console.log(dadaFeet);
