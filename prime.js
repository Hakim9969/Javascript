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
console.log(isPrime(13));//true
console.log(isPrime(14)); //false