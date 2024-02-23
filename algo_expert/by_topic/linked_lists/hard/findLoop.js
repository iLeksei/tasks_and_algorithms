//     Write a function that takes in the head of a Singly Linked List that contains
//     a loop (in other words, the list's tail node points to some node in the list
//     instead of -None- / -null-). The function should return
//     the node (the actual node--not just its value) from which the loop originates
//     in constant space.
//
//     Each -LinkedList- node has an integer -value- as well as
//     a -next- node pointing to the next node in the list.
//
// -Sample Input-
// --head- = 0-> 1-> 2-> 3-> 4-> 5-> 6 -// the head node with value 0-
//                        ^         v
//                        9 <- 8 <- 7
// -Sample Output-
// -4 -> 5 -> 6 -// the node with value 4-
// ^         v
// 9 <- 8 <- 7


// This is an input class. Do not edit.
class LinkedList {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

/**
 * time: O(N)
 * space: O(N)
 */
function findLoop(head) {
    let visited = new Set();
    let currentNode = head;
    while (currentNode.next !== null) {
        if (currentNode.next && visited.has(currentNode.next.val)) {
            return true;
        }
        visited.add(currentNode.val);
        currentNode = currentNode.next;
    }
    return false;
}

function findLoop2(head) {
    let slow_pointer = head, fast_pointer = head;
    while (fast_pointer?.next) {
        slow_pointer = slow_pointer.next;
        fast_pointer = fast_pointer.next.next;
        if (slow_pointer === fast_pointer) return true;

    }
    return false;
}

let l4 = new LinkedList(4);
let l3 = new LinkedList(3);
let l2 = new LinkedList(2);
let head = new LinkedList(1);
head.next = l2;
l2.next = l3;
l3.next = l4;
l4.next = l2;
console.log(findLoop2(head))