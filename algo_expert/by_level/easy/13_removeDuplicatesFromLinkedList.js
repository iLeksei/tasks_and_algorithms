

class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function removeDuplicatesFromLinkedList(linkedList) {
    const map = new Map();
    let currentNode = linkedList;
    let prevNode = null;

    while (currentNode !== null) {
        if (map.has(currentNode.value) && prevNode !== null) {
            prevNode.next = currentNode.next;
        } else {
            prevNode = currentNode;
        }
        map.set(currentNode.value, true)
        currentNode = currentNode.next;

    }
    // Write your code here.
    return linkedList;
}

function removeDuplicatesFromLinkedList2(linkedList) {
    let curr = linkedList;
    while (curr.next) {
        if (curr.value === curr.next.value) {
            curr.next = curr.next.next;
        } else curr = curr.next;
    }
    return linkedList;
}

const linkedList = {
    value: 1,
    next: {
        value: 1,
        next: {
            value: 2,
            next: {
                value: 3,
                next: {
                    value: 3,
                    next: null,
                }
            }
        }
    }
}

console.log(removeDuplicatesFromLinkedList(linkedList));