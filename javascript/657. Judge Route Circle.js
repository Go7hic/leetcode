/**
 * Initially, there is a Robot at position (0, 0). Given a sequence of its moves, judge if this robot makes a circle, which means it moves back to the original place.

The move sequence is represented by a string. And each move is represent by a character. The valid robot moves are R (Right), L (Left), U (Up) and D (down). The output should be true or false representing whether the robot makes a circle.

Example 1:
Input: "UD"
Output: true
Example 2:
Input: "LL"
Output: false
 */
/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let [v,h] = [0, 0];
    for(c of moves){
        switch(c){
            case 'U': v += 1;break;
            case 'D': v -= 1;break;
            case 'R': h += 1;break;
            case 'L': h -= 1;break;
        }        
    }
    return (v==0 && h==0);
};