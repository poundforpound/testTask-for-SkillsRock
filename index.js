// Task 1
function isPalindrome(str) {
  const value = str.toLowerCase();
  for (let i = 0; i < value.length / 2; i++) {
    if (value[i] != value[value.length - 1 - i]) {
      return false;
    } else {
      return true;
    }
  }
}
console.log(isPalindrome('А роза упала на лапу Азора'));
console.log(isPalindrome('Привет'));
// Task 2
function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log('FizzBuzz');
    } else if (i % 3 == 0) {
      console.log('Fizz');
    } else if (i % 5 == 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}
fizzBuzz();

//Task 3
function chunkArray(array, size) {
  let result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3));
