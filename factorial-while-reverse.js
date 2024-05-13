function factorial(number) {
  let num = number;
  let result = 1;
  while (num >= 1) {
    result = result * num;
    num--;
  }
  return result;
}

const outpot = factorial(9);
console.log(outpot);
