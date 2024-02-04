/**
 *         You're given a two-dimensional array (a matrix) of potentially unequal height
 *         and width containing letters; this matrix represents a boggle board. You're
 *         also given a list of words.
 *
 *         Write a function that returns an array of all the words contained in the
 *         boggle board. The final words don't need to be in any particular order.
 *
 *         A word is constructed in the boggle board by connecting adjacent
 *         (horizontally, vertically, or diagonally) letters, without using any single
 *         letter at a given position more than once; while a word can of course have
 *         repeated letters, those repeated letters must come from different positions in
 *         the boggle board in order for the word to be contained in the board. Note that
 *         two or more words are allowed to overlap and use the same letters in the
 *         boggle board.
 *
 *     Sample Input
 *     board = [
 *       ["t", "h", "i", "s", "i", "s", "a"],
 *       ["s", "i", "m", "p", "l", "e", "x"],
 *       ["b", "x", "x", "x", "x", "e", "b"],
 *       ["x", "o", "g", "g", "l", "x", "o"],
 *       ["x", "x", "x", "D", "T", "r", "a"],
 *       ["R", "E", "P", "E", "A", "d", "x"],
 *       ["x", "x", "x", "x", "x", "x", "x"],
 *       ["N", "O", "T", "R", "E", "-", "P"],
 *       ["x", "x", "D", "E", "T", "A", "E"],
 *     ],
 *     words = [
 *       "this", "is", "not", "a", "simple", "boggle",
 *       "board", "test", "REPEATED", "NOTRE-PEATED",
 *      ]
 *
 *     Sample Output
 *     ["this", "is", "a", "simple", "boggle", "board", "NOTRE-PEATED"]
 * * The words could be ordered differently.
 */

class DoubleLinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }

    add(value) {
        let current = this.next;
        let nextNode = null;
        if (current === null) {
            nextNode = new DoubleLinkedList(value);
            this.next = nextNode;
            nextNode.prev = this;
            return this.next;
        }

        while (current.next !== null) {
            current = current.next;
        }
        nextNode = new DoubleLinkedList(value);
        nextNode.size = this.size;
        current.next = nextNode;
        nextNode.prev = current;
        return current.next;
    }

    getFirst() {
        let current = this;
        while (current.prev !== null) {
            current = current.prev;
        }
        return current;
    }

    getLast() {
        let current = this;
        while (current.next !== null) {
            current = current.next;
        }
        return current;
    }

    findNext(value) {
        let current = this;
        while (current && current.value !== value) {
            current = current.next;
        }
        return current;
    }

    removeLast() {
        let current = this;
        let prev = null;
        while (current.next !== null) {
            prev = current;
            current = current.next;
        }
        if (prev !== null) {
            prev.next = null;
        }
        return current;
    }

    size() {
        let queue = [this];
        let size = 0;
        while (queue.length > 0) {
            let node = queue.shift();
            size++;
            if (node.next !== null) queue.push(node.next)
        }

        if (this.prev !== null) {
            queue.push(this.prev);
        }
        while (queue.length > 0) {
            let node = queue.shift();
            size++;
            if (node.prev !== null) queue.push(node.prev)
        }

        return size;
    }
}

class Cell extends DoubleLinkedList {
    constructor(value, position) {
        super(value);
        this.position = position;
    }

    add(value, position) {
        this.next = super.add(value);
        this.next.position = position;
        return this.next;
    }
}

class CellsMap extends Map {
    constructor(entries = []) {
        super(entries);
    }

    hasCell(value) {
        let entries = super.entries();
        for (const [key, entryValue] of entries) {
            if (entryValue === value) return true;
        }
        return false;
    }

    getLast() {
        let last = null;
        for (const [key, value] of this) {
            last = {key, value};
        }
        return last;
    }

    removeLast() {
        let last = this.getLast();
        super.delete(last.key);
    }
}

function boggleBoard(board, words) {
    let result = [];

    for (const word of words) {
        for (let rowIdx = 0; rowIdx < board.length; rowIdx++) {
            for (let colIdx = 0; colIdx < board[rowIdx].length; colIdx++) {
                if (result.includes(word)) continue;
                if (word[0] !== board[rowIdx][colIdx]) continue;
                let temp = traverse(rowIdx, colIdx, board, word);
                if (temp && temp.size === word.length) result.push(word);
            }
        }
    }

    return result;
}

function traverse(rowIdx, colIdx, board, word, idx = 0, history = new CellsMap()) {
    if (word[idx] !== board[rowIdx][colIdx]) return null;
    if (history.size === word.length) return history;

    // for a case when we got a dead end, but have another way with that same letter
    if (
        history.getLast() &&
        history.getLast().value === board[rowIdx][colIdx] &&
        history.getLast().value !== word[idx - 1]
    ) {
        history.removeLast();
    }

    //hit
    if (word[idx] === board[rowIdx][colIdx]) {
        history.set(`${rowIdx}${colIdx}`, board[rowIdx][colIdx]);
    }

    //top
    if (
        board[rowIdx - 1] &&
        board[rowIdx - 1][colIdx] &&
        board[rowIdx - 1][colIdx] === word[idx + 1] &&
        !history.has(`${rowIdx - 1}${colIdx}`)
    ) {
        traverse(rowIdx - 1, colIdx, board, word, idx + 1, history)
    }

    //top-left
    if (
        board[rowIdx - 1] &&
        board[rowIdx - 1][colIdx - 1] &&
        board[rowIdx - 1][colIdx - 1] === word[idx + 1] &&
        !history.has(`${rowIdx - 1}${colIdx - 1}`)
    ) {
        traverse(rowIdx - 1, colIdx - 1, board, word, idx + 1, history)
    }

    //top-right
    if (
        board[rowIdx - 1] &&
        board[rowIdx - 1][colIdx + 1] &&
        board[rowIdx - 1][colIdx + 1] === word[idx + 1] &&
        !history.has(`${rowIdx - 1}${colIdx + 1}`)
    ) {
        traverse(rowIdx - 1, colIdx + 1, board, word, idx + 1, history)
    }

    //bottom
    if (
        board[rowIdx + 1] &&
        board[rowIdx + 1][colIdx] &&
        board[rowIdx + 1][colIdx] === word[idx + 1] &&
        !history.has(`${rowIdx + 1}${colIdx}`)
    ) {
        traverse(rowIdx + 1, colIdx, board, word, idx + 1, history)
    }

    //bottom-left
    if (
        board[rowIdx + 1] &&
        board[rowIdx + 1][colIdx - 1] &&
        board[rowIdx + 1][colIdx - 1] === word[idx + 1] &&
        !history.has(`${rowIdx + 1}${colIdx - 1}`)
    ) {
        traverse(rowIdx + 1, colIdx - 1, board, word, idx + 1, history)
    }
    //bottom-right
    if (
        board[rowIdx + 1] &&
        board[rowIdx + 1][colIdx + 1] &&
        board[rowIdx + 1][colIdx + 1] === word[idx + 1] &&
        !history.has(`${rowIdx + 1}${colIdx + 1}`)
    ) {
        traverse(rowIdx + 1, colIdx + 1, board, word, idx + 1, history)
    }

    //left
    if (
        board[rowIdx][colIdx - 1] &&
        board[rowIdx][colIdx - 1] === word[idx + 1] &&
        !history.has(`${rowIdx}${colIdx - 1}`)
    ) {
        traverse(rowIdx, colIdx - 1, board, word, idx + 1, history)
    }

    //right
    if (
        board[rowIdx][colIdx + 1] &&
        board[rowIdx][colIdx + 1] === word[idx + 1] &&
        !history.has(`${rowIdx}${colIdx + 1}`)
    ) {
        traverse(rowIdx, colIdx + 1, board, word, idx + 1, history)
    }

    return history;
}

console.log(boggleBoard([
        ["t", "h", "i", "s", "i", "s", "a"],
        ["s", "i", "m", "p", "l", "e", "x"],
        ["b", "x", "x", "x", "x", "e", "b"],
        ["x", "o", "g", "g", "l", "x", "o"],
        ["x", "x", "x", "D", "T", "r", "a"],
        ["R", "E", "P", "E", "A", "d", "x"],
        ["x", "x", "x", "x", "x", "x", "x"],
        ["N", "O", "T", "R", "E", "-", "P"],
        ["x", "x", "D", "E", "T", "A", "E"],
    ],
    [
        "this", "is", "not", "a", "simple", "boggle",
        "board", "test", "REPEATED", "NOTRE-PEATED",
    ]
))