/**
 * Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.
 * The first node is considered odd, and the second node is even, and so on.
 * Note that the relative order inside both the even and odd groups should remain as it was in the input.
 * You must solve the problem in O(1) extra space complexity and O(n) time complexity.
 *
 * Example 1:
 * Input: head = [1,2,3,4,5]
 * Output: [1,3,5,2,4]
 *
 * Example 2:
 * Input: head = [2,1,3,5,6,4,7]
 * Output: [2,3,6,7,1,5,4]
 *
 * Constraints:
 * The number of nodes in the linked list is in the range [0, 104].
 * -106 <= Node.val <= 106
 */

class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


function oddEvenList(head) {
    let isOdd = true;
    let oddsHead = null;
    let oddsList = null;
    let evensHead = null;
    let evensList = null;

    while (head !== null) {
        if (isOdd) {
            if (!oddsHead) {
                oddsHead = head;
                oddsList = oddsHead;
            } else {
                oddsList.next = head;
                oddsList = oddsList.next;
            }
        } else {
            if (!evensHead) {
                evensHead = head;
                evensList = evensHead;
            } else {
                evensList.next = head;
                evensList = evensList.next;
            }
        }
        isOdd = !isOdd;
        head = head.next;
    }

    if (evensList) evensList.next = null;
    if (oddsList) oddsList.next = evensHead;
    return oddsHead || evensHead;
};

let l5 = new ListNode(5);
let l4 = new ListNode(4);
let l3 = new ListNode(3);
let l2 = new ListNode(2);
let head = new ListNode(1);
head.next = l2;
l2.next = l3;
l3.next = l4;
l4.next = l5;
console.log(JSON.stringify(oddEvenList(head))); // 1 -> 3 -> 5 -> 2 -> 4

function oddEvenList2(head) {

    if (!head?.next) return head

    let odd = head
    let even = head.next
    let evenHead = even

    while (even?.next) {
        odd.next = even.next
        odd = odd.next
        even.next = odd.next
        even = even.next
    }

    odd.next = evenHead

    return head
};