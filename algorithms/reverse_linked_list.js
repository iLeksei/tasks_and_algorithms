class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // functions to be implemented
    // add(element)
    // insertAt(element, location)
    // removeFrom(location)
    // removeElement(element)

    // Helper Methods
    // isEmpty
    // size_Of_List
    // PrintList

    add(element) {
        var node = new LinkedListNode(element);

        // to store current node
        var current;

        // if list is Empty add the
        // element and make it head
        if (this.head == null)
            this.head = node;
        else {
            current = this.head;

            // iterate to the end of the
            // list
            while (current.next) {
                current = current.next;
            }
            // add node
            current.next = node;
        }
        this.size++;
    }

    printList() {
        console.log("######################\n");
        let curr = this.head;
        let str = "";
        while (curr) {
            str += "{ value: " + curr.element + ", next: " + (curr.next ? curr.next.element : null) + " }\n";
            curr = curr.next;
        }
        // while (curr) {
        //     str += curr.element + " ";
        //     curr = curr.next;
        // }
        console.log(str);
        console.log("######################\n");
    }

}

class LinkedListNode {
    constructor(element) {
        this.element = element;
        this.next = null
    }
}

const linkedList_1 = new LinkedList();
linkedList_1.add(1);
linkedList_1.add(2);
linkedList_1.add(3);

linkedList_1.printList();


// A -> B -> C  =>> C -> B -> A
const reverse_linked_list = (list) => {
    let curr = list.head;
    let previous = null;

    while(curr !== null) {
        // console.log("curr: " + JSON.stringify(curr));
        // console.log("prev: " + JSON.stringify(previous));
        let nextNode = JSON.parse(JSON.stringify(curr.next));
        curr.next = previous;
        previous = curr;
        curr = nextNode;
    }
    list.head = previous;
}

reverse_linked_list(linkedList_1);
linkedList_1.printList();