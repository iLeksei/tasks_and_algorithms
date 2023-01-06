function createDom(root) {
    // Write your code here.
    let node = document.createElement(root.type);
    for (let attrName in root.attributes) {
        node.setAttribute(attrName, root.attributes[attrName])
    };

    root.children?.forEach(child => {
        node.append(typeof child === "string" ? child : createDom(child));
    })

    return node;
}

createDom({
    type: "p",
    children: [
        "hello ",
        {
            type: "strong",
            children: ["world!"]
        }
    ]
});