/**
 *     You're given a Linked List with at least one node. Write a function
 *     that returns the middle node of the Linked List. If there are two middle
 *     nodes (i.e. an even length list), your function should return the second
 *     of these nodes.
 *
 *     Each LinkedList node has an integer value as well as
 *     a next node pointing to the next node in the list or to
 *     None / null if it's the tail of the list.
 *
 *     Sample Input
 *      linkedList = 2 -> 7 -> 3 -> 5
 *     Sample Output
 *     3 -> 5
 *      The middle could be 7 or 3,
 *      we return the second middle node
 */

// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// todo
function middleNode(linkedList) {
    let nodesCounter = 1;
    let current = linkedList;
    let middle = current;

    while (current.next !== null) {
        ++nodesCounter;
        if (Math.ceil((nodesCounter / 2)) > Math.ceil((nodesCounter / 2))) {
            middle = current
        }
        current = current.next;
    }

    return middle;
}

// 1 -> 2 -> 3 -> 4 -> 5   result: 3
let l1 = new LinkedList(1)
let l2 = new LinkedList(2)
let l3 = new LinkedList(3)
let l4 = new LinkedList(4)
let l5 = new LinkedList(5)
l1.next = l2;
l2.next = l3;
l3.next = l4;
l4.next = l5;
console.log(middleNode(l1));