/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
     var previous = node;
     delNode(node.next);
     return;
    
     function delNode(n){
        previous.val = n.val;
         if(n.next === null){
             previous.next = null;
        }else{
             previous = previous.next;
             n = n.next;
          delNode(n);
       }
   }
 };
