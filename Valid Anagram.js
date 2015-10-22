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
