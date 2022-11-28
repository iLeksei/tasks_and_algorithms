const dfsRecursivePreOrder = (node, arr = []) => {
    if(node) {
        arr.push(node.value);
        if(node.left) dfsRecursivePreOrder(node.left, arr);
        if(node.right) dfsRecursivePreOrder(node.right, arr);
    }
    return arr;
}

const dfsRecursiveInOrder = (node, arr = []) => {
    if(node){
        if(node.left) dfsRecursiveInOrder(node.left, arr);
        arr.push(node.value);
        if(node.right) dfsRecursiveInOrder(node.right, arr);
    }
    return arr;
}

const dfsRecursivePostOrder = (node, arr = []) => {
    if(node) {
        if(node.left) dfsRecursivePostOrder(node.left, arr);
        if(node.right) dfsRecursivePostOrder(node.right, arr);
        arr.push(node.value);
    }
    return arr;
}

const tree = {
    value: 1,
    left: {
        value: 2,
        left: {
            value: 4,
            left: {
                value: 8,
            },
            right: {
                value: 9
            }
        },
        right: {
            value: 5,
            left: {
                value: 10,
            },
        },
    },
    right: {
        value: 3,
        left: {
            value: 6,
        },
        right: {
            value: 7,
        },
    }
}

const result = dfsRecursivePreOrder(tree);
console.log(result)