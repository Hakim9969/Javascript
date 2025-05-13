// 4. Write a program that iterates through an array of objects and filters based on certain properties.
const people = [
  { name: "Alice", age: 25, isStudent: true },
  { name: "Bob", age: 30, isStudent: false },
  { name: "Charlie", age: 22, isStudent: true },
  { name: "David", age: 27, isStudent: false },
];

// Filter only students under 25
const filtered = people.filter(person => person.isStudent && person.age < 26);
const students=people.filter(student => student.isStudent);

filtered.forEach(person => {
  console.log(`${person.name} is a student under 26.`);
});

students.forEach(student => {
  console.log(`${student.name} is a student`);
});
