import java.util.HashMap;
import java.util.Map;

void main(String[] args) {
    Node n1 = new Node(1);
    Node n10 = new Node(10);
    Node n11 = new Node(11);
    Node n13 = new Node(13);
    Node head = new Node(7);
    head.next = n13;
    n13.next = n11;
    n11.next = n10;
    n10.next = n1;
    n13.random = head;
    n10.random = n11;
    n11.random = n1;
    n1.random = head;
    Node copiedList = copyRandomList(head);
    System.out.println(copiedList);
}

Node copyRandomList(Node head) {
    Map<Node, Integer> nodeRandomIdxMap = new HashMap<>();
    Map<Node, Integer> nodeIdxMap = new HashMap<>();
    Map<Integer, Node> newNodeIdxMap = new HashMap<>();
    int idx = 0;
    Node currentNode = head;
    Node newHead = null;
    Node newList = null;

    while(currentNode != null) {
        nodeIdxMap.put(currentNode, idx);
        currentNode = currentNode.next;
        idx++;
    }

    idx = 0;
    currentNode = head;
    while (currentNode != null) {
        Node newNode = new Node(currentNode.val);
        newNodeIdxMap.put(idx, newNode);
        if (currentNode.random != null) {
            nodeRandomIdxMap.put(newNode, nodeIdxMap.get(currentNode.random));
        };
        if (newHead == null) {
            newHead = newNode;
            newList = newHead;
        } else {
            newList.next = newNode;
            newList = newList.next;
        }
        idx++;
        currentNode = currentNode.next;
    }

    nodeRandomIdxMap.forEach((node, randomNodeIdx) -> {
        node.random = newNodeIdxMap.get(randomNodeIdx);;
    });
    return newHead;
}

public Node copyRandomList2(Node head) {
    if (head == null) return null;
    Map<Node, Node> nodeAndCopiedNodeMap = new HashMap<>();

    // First pass: create a copy of each node without linking random pointers
    Node currentNode = head;
    while (currentNode != null) {
        nodeAndCopiedNodeMap.put(currentNode, new Node(currentNode.val));
        currentNode = currentNode.next;
    }

    // Second pass: link the random pointers in the copied list
    currentNode = head;
    while (currentNode != null) {
        Node newNode = nodeAndCopiedNodeMap.get(currentNode);
        newNode.next = nodeAndCopiedNodeMap.get(currentNode.next);
        newNode.random = nodeAndCopiedNodeMap.get(currentNode.random);
        currentNode = currentNode.next;
    }
    return nodeAndCopiedNodeMap.get(head);
}

private class Node {
    private int val;
    private Node next;
    private Node random;
    Node(int val) {
        this.val = val;
    }

    @Override
    public String toString() {
        return STR."""
                [\{this.val}, \{this.random != null ? this.random.val : null}], \{this.next}""";
    }
}
