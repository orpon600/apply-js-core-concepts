// array value
// function getSumOfAnArray(numbers) {
//   for (let i = 0; i < numbers.length; i++) {
//     const index = i;
//     const element = numbers[index];
//     console.log(index, element);
//   }
// }

// const myNumbers = [12, 65, 45, 78, 32, 45, 91];
// getSumOfAnArray(myNumbers);

// sum
function getSumOfAnArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    const index = i;
    const element = numbers[index];
    sum = sum + element;
    // console.log(index,element,sum);
  }
  return sum;
}

// const myNumbers = [12, 65, 45, 78, 32, 45, 91];
// getSumOfAnArray(myNumbers);

// odd number

function getOddNumberArray(numbers) {
  const oddNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    const index = i;
    const element = numbers[index];
    if (element % 2 === 1) {
      console.log(index, element);
      oddNumbers.push(element);
    }
  }
  return oddNumbers;
}

const myNumbers = [12, 65, 45, 78, 32, 45, 91];
const oddNumbers = getOddNumberArray(myNumbers);
console.log(oddNumbers);
const oddNumbersSum = getSumOfAnArray(oddNumbers);

console.log("odd number sum", oddNumbersSum);
