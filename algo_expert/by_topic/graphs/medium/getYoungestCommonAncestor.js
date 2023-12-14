
/**
*         You're given three inputs, all of which are instances of an
*         AncestralTree class that have an ancestor property
*         pointing to their youngest ancestor. The first input is the top ancestor in an
*         ancestral tree (i.e., the only instance that has no ancestor--its
*         ancestor property points to None /
*         null), and the other two inputs are descendants in the ancestral
*         tree.
*
*         Write a function that returns the youngest common ancestor to the two
*         descendants.
*
*         Note that a descendant is considered its own ancestor. So in the simple
*         ancestral tree below, the youngest common ancestor to nodes A and B is node A.
*
*     // The youngest common ancestor to nodes A and B is node A.
*       A
*      /
*     B
*
*     Sample Input
*     // The nodes are from the ancestral tree below.
* topAncestor = node A
* descendantOne = node E
* descendantTwo = node I
*                   A
*                /     \
*               B       C
*             /   \   /   \
*            D     E F     G
*          /   \
*         H     I
*
*     Sample Output
*     node B
*/

class AncestralTree {
    constructor(name) {
        this.name = name;
        this.ancestor = null;
    }
}

/**
 * time: logN (traverse subtrees and result arrays)
 * space: logN (result arrays)
 */
function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
    let descendant1Ancestors = traverse(descendantOne);
    let descendant2Ancestors = traverse(descendantTwo);
    console.log(descendant1Ancestors, descendant2Ancestors)
    let highestSubTreeArray = descendant1Ancestors.length > descendant2Ancestors.length ?
        descendant1Ancestors : descendant2Ancestors;
    let smallestSubTreeArray = descendant1Ancestors.length < descendant2Ancestors.length ?
        descendant1Ancestors : descendant2Ancestors;
    let commonAncestor = highestSubTreeArray[0];

    while (smallestSubTreeArray.length !== highestSubTreeArray.length) {
        smallestSubTreeArray.unshift(null);
    }

    for (let i = highestSubTreeArray.length - 1; i >= 0; i--) {
           if (highestSubTreeArray[i] === smallestSubTreeArray[i]) {
               commonAncestor = highestSubTreeArray[i];
           }
    }
    return commonAncestor;
}

function traverse(node) {
    let currentNode = node;
    let result = [];
    while (currentNode.ancestor !== null) {
        result.push(currentNode.ancestor.name);
        currentNode = currentNode.ancestor;
    }
    return result;
}


let a = new AncestralTree("A");
let b = new AncestralTree("B");
let c = new AncestralTree("C");
b.ancestor = a;
c.ancestor = a;
let d = new AncestralTree("D");
let e = new AncestralTree("E");
let f = new AncestralTree("F");
let g = new AncestralTree("G");
d.ancestor = b;
e.ancestor = b;
f.ancestor = c;
g.ancestor = c;
let h = new AncestralTree("H");
let i = new AncestralTree("I");
h.ancestor = d;
i.ancestor = d;
console.log(getYoungestCommonAncestor(a, e, i));