import org.w3c.dom.NodeList;

void main(String[] args) {
    ListNode l5 = new ListNode(5, null);
    ListNode l4 = new ListNode(4, l5);
    ListNode l3 = new ListNode(3, l4);
    ListNode l2 = new ListNode(2, l3);
    ListNode head = new ListNode(1, l2);

    // [1 -> 2 -> 3 -> 4 -> 5] => [5 -> 4 -> 3 -> 2 -> 1]
    System.out.println(reverseLinkedList(head).toString());
}

private class ListNode {
    private Integer val;
    private ListNode next;
    ListNode(Integer val, ListNode next) {
        this.val = val;
        this.next = next;
    }

    @Override
    public String toString() {
        return STR."""
        val: \{this.val}, next -> \{this.next}""";
    }
};

private ListNode reverseLinkedList(ListNode head) {
    ListNode currentNode = head;
    ListNode prevNode = null;
    ListNode nextNode = null;

    while (currentNode != null) {
        nextNode = currentNode.next;
        currentNode.next = prevNode;
        prevNode = currentNode;
        currentNode = nextNode;
    }
    return prevNode;
}