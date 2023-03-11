/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

var getIntersectionNode = function (headA, headB) {
  let first = headA
  let second = headB
  while (first !== null) {
    second = headB
    while (second !== null) {
      if (first === second) {
        return first
      }
      second = second.next
    }
    first = first.next
  }
  return null
}
