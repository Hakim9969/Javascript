// 3. Create a nested loop to print a multiplication table from 1 to 10.
for (let i = 1; i <= 10; i++) {
  let row = '';
  for (let j = 1; j <= 10; j++) {
    row += (i * j).toString().padStart(4);
  }
  console.log(row);
}
