// Write a program that outputs the string representation of numbers from 1 to n.

// But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

// Example:

// n = 15,

// Return:
// [
//     "1",
//     "2",
//     "Fizz",
//     "4",
//     "Buzz",
//     "Fizz",
//     "7",
//     "8",
//     "Fizz",
//     "Buzz",
//     "11",
//     "Fizz",
//     "13",
//     "14",
//     "FizzBuzz"
// ]


/**
 * https://leetcode.com/problems/fizz-buzz/
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  var arr = []
  for (var i = 0; i < n; i++) {
    if ((i + 1) % 15 === 0) {
      arr[i] = 'FizzBuzz'
    } else if ((i + 1) % 3 === 0) {
      arr[i] = 'Fizz'
    } else if ((i + 1) % 5 === 0) {
      arr[i] = 'Buzz'
    } else {
      arr[i] = i + 1 + ''
    }
  }

  return arr
};