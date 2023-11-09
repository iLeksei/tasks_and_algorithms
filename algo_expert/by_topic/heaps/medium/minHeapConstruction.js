//
// Implement a MinHeap class that supports:
//
// Building a Min Heap from an input array of integers.
// Inserting integers in the heap.
// Removing the heap's minimum / root value.
// Peeking at the heap's minimum / root value.
//
// Sifting integers up and down the heap, which is to be used when inserting
// and removing values.
//
// Note that the heap should be represented in the form of an array.
//
// If you're unfamiliar with Min Heaps, we recommend watching the
// Conceptual Overview section of this question's video explanation before
// starting to code.
//
// Sample Usage
//  array = [48, 12, 24, 7, 8, -5, 24, 391, 24, 56, 2, 6, 8, 41]
//
// // All operations below are performed sequentially.
//  MinHeap(array): - // instantiate a MinHeap (calls the buildHeap method and populates the heap)
//  buildHeap(array): - [-5, 2, 6, 7, 8, 8, 24, 391, 24, 56, 12, 24, 48, 41]
//  insert(76): - [-5, 2, 6, 7, 8, 8, 24, 391, 24, 56, 12, 24, 48, 41, 76]
//  peek(): -5
//  remove(): -5 [2, 7, 6, 24, 8, 8, 24, 391, 76, 56, 12, 24, 48, 41]
//  peek(): 2
//  remove(): 2 [6, 7, 8, 24, 8, 24, 24, 391, 76, 56, 12, 41, 48]
//  peek(): 6
//  insert(87): - [6, 7, 8, 24, 8, 24, 24, 391, 76, 56, 12, 41, 48, 87]



class MinHeap {
    constructor(array) {
        this.heap = this.buildHeap(array);
    }

    buildHeap(array) {
        // Write your code here.
    }

    siftDown() {
        // Write your code here.
    }

    siftUp() {
        // Write your code here.
    }

    peek() {
        // Write your code here.
    }

    remove() {
        // Write your code here.
    }

    insert(value) {
        // Write your code here.
    }
}