/**
 * Invert a binary tree.

     4
   /   \
  2     7
 / \   / \
1   3 6   9
to
     4
   /   \
  7     2
 / \   / \
9   6 3   1
Trivia:
This problem was inspired by this original tweet by Max Howell:
Google: 90% of our engineers use the software you wrote (Homebrew), but you can’t invert a binary tree on a whiteboard so fuck off.

*
*  */

var invertTree = function(root) {
    swap(root);
    return root;

    function swap(node){
        if(node !== null){
            var tmp = node.left;//把左边的值先存起来
            node.left = node.right; // 然后把左边的值设为右边的值
            node.right = tmp; // 再把右边的值设置左边一开始的值
            swap(node.left);// 在下一棵树循环这个操作
            swap(node.right);
        }
    }
};
