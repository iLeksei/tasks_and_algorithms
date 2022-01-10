class TreeNode {
    constructor(value, children = []) {
        this.value = value;
        this.children = children;
    }

    add(child) {
        this.children.push(child);
    }
};

const n1 = new TreeNode("n1");
const n2 = new TreeNode("n2");
const n3 = new TreeNode("n3");
const n4 = new TreeNode("n4");
const n5 = new TreeNode("n5");
const n6 = new TreeNode("n6");
const n7 = new TreeNode("n7");
const n8 = new TreeNode("n8");

n1.add(n2);
n1.add(n3);
n2.add(n4);
n2.add(n5);
n3.add(n6);
n3.add(n7);
n3.add(n8);

/**
 *              n1
 *        n2            n3
 *     n4   n5        n6   n7   n8
 */

function dfs(node, searchValue) {
    if (node.value === searchValue ) return node;
    if (!node || !searchValue) { return null };

    for (let i = 0; i < node.children.length; i++) {
        const result = dfs(node.children[i], searchValue);
        if (result && result.value) { return result};
    }
    return null;
}

const result = dfs(n1, "n7");
console.log(result)