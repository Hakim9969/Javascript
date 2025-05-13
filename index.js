// 1. Create a program that prints all even numbers between 1 and 100 using a for loop.
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
// 2. Write a function that checks if a given number is prime using a while loop.
function isPrime(num) {
  if (num <= 1) return false;

  let i = 2;
  while (i <= Math.sqrt(num)) {
    if (num % i === 0) return false;
    i++;
  }
  return true;
}
console.log(isPrime(7));  // true
console.log(isPrime(10)); // false
// 3. Create a nested loop to print a multiplication table from 1 to 10.
for (let i = 1; i <= 10; i++) {
  let row = '';
  for (let j = 1; j <= 10; j++) {
    row += (i * j).toString().padStart(4); // Format output
  }
  console.log(row);
}
// 4. Write a program that iterates through an array of objects and filters based on certain properties.
const people = [
  { name: "Alice", age: 25, isStudent: true },
  { name: "Bob", age: 30, isStudent: false },
  { name: "Charlie", age: 22, isStudent: true },
  { name: "David", age: 27, isStudent: false },
];

// Filter only students under 26
const filtered = people.filter(person => person.isStudent && person.age < 26);

filtered.forEach(person => {
  console.log(`${person.name} is a student under 26.`);
});
