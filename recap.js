// 1. variable
var myName = "khan";

//math operation: +, --, *, /
//shorthand: +=, --, *=, /=
// ++, --

// 2. Array
var friends = ["abul", "babul", "cabul", "ebul"];

//index
var thirdfriend = friends[2];
friends[3] = "dambool";

// 3. conditionals
// >, <, >=, <=, ==, ===, !=, !==

if (friends.length < 2) {
  console.log("fokir tor kono friend nai");
} else {
}

// 4. loop
var number = 0;
while (number <= 6) {
  console.log(number);
  number++;
}

for (var i = 0; i <= 10; i++) {
  console.log("interation", i);
}

// 5. function

function isMoonUp(time) {
  if (time > 7) {
    return true;
  }
}

// 6. Object

var jantus = {
  height: 60,
  romanticism: "heavy",
  bapperTaka: "borolox",
};
