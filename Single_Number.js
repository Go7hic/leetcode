// Given an array of integers, every element appears twice except for one. Find that single one.

// Note:
// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
// 用位运算解决，位运算参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
       var length = nums.length,
        i,
        result = 0;
    if (length === 1) {
        return nums[0];
    }
    for (i = 0; i < length; i++) {
        result = result ^ nums[i];
    }
    return result;
};
