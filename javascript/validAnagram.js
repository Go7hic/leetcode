/**
 * Valid Anagram
Given two strings s and t, write a function to determine if t is an anagram of s.

For example,
s = "anagram", t = "nagaram", return true.
s = "rat", t = "car", return false.

Note:
You may assume the string contains only lowercase alphabets.

https://leetcode.com/problems/valid-anagram/
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length){
        return false;
    }
    var i, dict = {};
    for(i = 0; i < s.length; i++){
        if(!dict[s[i]]){
            dict[s[i]] = 1;
        }else{
            dict[s[i]]++;
        }
    }
    for(i = 0; i < t.length; i++){
        if(!dict[t[i]] || dict[t[i]] === 0){
            return false;
        }else{
            dict[t[i]]--;
        }
    }
    return true;
};
