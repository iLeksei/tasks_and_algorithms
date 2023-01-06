function correspondingNode(tree1, tree2, node1) {
    // Write your code here.
    let path = [];
    let childNode = node1;
    let parentNode = childNode.parentNode;
    let childCounter = 0;

    while (parentNode !== null) {
        childCounter = 0;
        for (let child of parentNode?.children) {
            if (child === childNode) break;
            ++childCounter;
        }
        path.unshift(childCounter);
        childNode = parentNode;
        parentNode = parentNode.parentNode;
    }

    let result = tree2;
    for (let childIdx of path) {
        result = result?.children[childIdx];
    }
    return result;
}

const dom1 = document.createElement("div");
dom1.innerHTML = `
    <main>
        <h1>Heading</h1>
        <div>
            <h2>test1</h2>
            <p>test2 <em>emphasis</em></p>
        </div>
    </main>
`;

const dom2 = document.createElement("main");
dom2.innerHTML = `
    <article>
        <h1>Heading2</h1>
        <section>
            <img href="" alt="image"/>
            <h3>test5 <strong>strong</strong></h3>
        </section>
    </article>
`;

correspondingNode(dom1, dom2, dom1.querySelector("h2")) //image!