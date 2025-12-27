const TOTAL_ROUNDS = 15;

let fizz = 0;
let buzz = 0;
let fizzBuzz = 0;
let numbers = 0;

console.clear();
console.log("🎮 FizzBuzz Game Started");
console.log("Enter one number per round.");
console.log("------------------------");

for (let round = 1; round <= TOTAL_ROUNDS; round++) {
  const input = Number(prompt(`Round ${round}: Enter a number`));

  if (Number.isNaN(input)) {
    console.log(`Round ${round}: ❌ Invalid input`);
    numbers++;
    continue;
  }

  if (input % 3 === 0 && input % 5 === 0) {
    console.log(`Round ${round}: FizzBuzz`);
    fizzBuzz++;
  } else if (input % 3 === 0) {
    console.log(`Round ${round}: Fizz`);
    fizz++;
  } else if (input % 5 === 0) {
    console.log(`Round ${round}: Buzz`);
    buzz++;
  } else {
    console.log(`Round ${round}: ${input}`);
    numbers++;
  }
}

console.log("------------------------");
console.log("📊 Final Results");
console.log("Fizz:", fizz);
console.log("Buzz:", buzz);
console.log("FizzBuzz:", fizzBuzz);
console.log("Turn Back Numbers:", numbers);
console.log("🏁 Game Over");
