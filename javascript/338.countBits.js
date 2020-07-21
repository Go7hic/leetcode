// Given a non negative integer number num. For every numbers i in the range 0 ≤ i ≤ num calculate the number of 1's in their binary representation and return them as an array.

// Example:
// For num = 5 you should return [0,1,1,2,1,2].
// 这道题给我们一个整数n，然我们统计从0到n每个数的二进制写法的1的个数，

/**
 * https://leetcode.com/problems/counting-bits/
 * @param {number} num
 * @return {number[]}
 */
var countBits = function (num) {
  if (num === 0) return [0];
  var result = [0], len, count = 0;
  while (true) {
    len = result.length;
    for (var i = 0; i < len; i++) {
      result.push(result[i] + 1);
      count++;
      if (count >= num)
        return result;
    }
  }
};