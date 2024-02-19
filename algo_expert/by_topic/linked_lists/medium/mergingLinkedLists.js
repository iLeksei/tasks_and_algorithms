
    
//     You're given two Linked Lists of potentially unequal length. These Linked
//     Lists potentially merge at a shared intersection node. Write a function
//     that returns the intersection node or returns None /
//     null if there is no intersection.
//
//     Each LinkedList node has an integer value as well as
//     a next node pointing to the next node in the list or to
//     None / null if it's the tail of the list.
//
//     Note: Your function should return an existing node. It should not modify
//     either Linked List, and it should not create any new Linked Lists.
//
// Sample Input
// linkedListOne = 2 -> 3 -> 1 -> 4
// linkedListTwo = 8 -> 7 -> 1 -> 4
//
// Sample Output
// 1 -> 4 // The lists intersect at the node with value 1


// This is an input class. Do not edit.
class LinkedList {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}


function mergingLinkedLists(list1, list2) {
    let head = null;
    let tail = null;
    let smallestNode = Infinity;

    while (list1 !== null || list2 !== null) {
        if (list2 === null || (list1 !== null && list1.val < list2.val)) {
            smallestNode = list1;
            list1 = list1.next;
        } else {
            smallestNode = list2;
            list2 = list2.next;
        }

        if (!head) {
            head = smallestNode;
            tail = head;
        } else {
            tail.next = smallestNode;
            tail = tail.next;
        }
    }

    return head;
}

// let l3 = new LinkedList(3);
let l2 = new LinkedList(2);
let list1 = new LinkedList(1);
list1.next = l2;
// l2.next = l3;
//
// let l5 = new LinkedList(5);
let l4 = new LinkedList(4);
let list2 = new LinkedList(1);
list2.next = l4;
// l4.next = l5;
console.log(JSON.stringify(mergingLinkedLists(list1, list2)));