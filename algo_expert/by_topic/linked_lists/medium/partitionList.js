/**
 * Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.
 * You should preserve the original relative order of the nodes in each of the two partitions.
 *
 * Example 1:
 * Input: head = [1,4,3,2,5,2], x = 3
 * Output: [1,2,2,4,3,5]
 *
 * Example 2:
 * Input: head = [2,1], x = 2
 * Output: [1,2]
 *
 * Constraints:
 * The number of nodes in the list is in the range [0, 200].
 * -100 <= Node.val <= 100
 * -200 <= x <= 200
 */

class ListNode {
    val
    next
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

/**
 1    1 < 4      left: 1
 4    4 > 3      right: 4
 3    3 = 3      right 4 -> 3
 2    2 < 3      left 1 -> 2
 5    5 > 3      right: 4 -> 3 -> 5
 2    2 < 3      left: 1 -> 2 -> 2
 -----------
 left.next = right
 return head;
 */
function partition(head, x) {
    let leftHead = null;
    let leftPart = null;
    let rightHead = null;
    let rightPart = null;
    let currentNode = head;

    while (currentNode !== null) {
        if (currentNode.val < x) {
            if (!leftHead) {
                leftHead = currentNode;
                leftPart = leftHead;
            } else {
                leftPart.next = currentNode;
                leftPart = leftPart.next;
            }
        } else {
            if (!rightHead) {
                rightHead = currentNode;
                rightPart = currentNode;
            } else {
                rightPart.next = currentNode;
                rightPart = rightPart.next;
            }
        }
        currentNode = currentNode.next;
    }
    if (rightPart) rightPart.next = null;
    if (leftPart) leftPart.next = rightHead;
    return leftHead || rightHead;
};

let l5 = new ListNode(5);
let l4 = new ListNode(4);
let l3 = new ListNode(3);
let l2_2 = new ListNode(2);
let l2 = new ListNode(2);
let head = new ListNode(1);
head.next = l4;
l4.next = l3;
l3.next = l2
l2.next = l5;
l5.next = l2_2;
// console.log(JSON.stringify(partition(head, 3))); //

console.log(JSON.stringify(partition(new ListNode(1), 1))); //
