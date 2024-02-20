

void main(String[] args) {
    ListNode l5 = new ListNode(5);
    ListNode l4 = new ListNode(4);
    ListNode l3 = new ListNode(3);
    ListNode head1 = new ListNode(1);
    ListNode head2 = new ListNode(2);
    l3.setNext(l4);
    l4.setNext(l5);
    head2.setNext(l3);
    head1.setNext(l4);
    // headA: 1 -> 4 -> 5, headB: 2 -> 3 -> 4 -> 5
    // a: 1,    b: 2
    // a: 4,    b: 3
    // a: 5,    b: 4
    // a: null, b: 5
    // a: 2,    b: null
    // a: 3,    b: 1
    // a: 4,    b: 4
    System.out.println(getIntersectionNode(head1, head2).toString());
}

private ListNode getIntersectionNode(ListNode headA, ListNode headB) {
    if (headA == null || headB == null) return null;
    ListNode a = headA;
    ListNode b = headB;

    while (a != b) {
        a = a == null ? headB : a.next;
        b = b == null ? headA : b.next;
    }
    return a;
}

private class ListNode {
    private int val;
    private ListNode next;
    ListNode(int val) {
        this.val = val;
    }

    public void setNext(ListNode next) {
        this.next = next;
    }

    @Override
    public String toString() {
        return STR."""
                val: \{this.val}, next: \{this.next}""";
    }
}
