import java.util.ArrayList;
import java.util.Comparator;
import java.util.Map;

void main(String[] args) {

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

public ListNode sortList(ListNode head) {
    ArrayList<Map.Entry<Integer, ListNode>> list = new ArrayList<>();
    ListNode currentNode = head;

    while (currentNode != null) {
        list.add(Map.entry(currentNode.val, currentNode));
        currentNode = currentNode.next;
    }
    list.sort(Comparator.comparing((Map.Entry<Integer, ListNode> a) -> a.getKey()));
    currentNode = list.getFirst().getValue();
    ListNode newHead = currentNode;
    int idx = 1;
    while (idx < list.size()) {
        currentNode.next = list.get(idx).getValue();
        currentNode = currentNode.next;
    }
    return newHead;
}

public ListNode sortList2(ListNode head) {
    if (head == null || head.next == null) {
        return head;
    }
    ListNode middle = findPivotNode(head);
    ListNode lefthead = head;

    ListNode righthead = middle.next;
    middle.next = null;

    ListNode left = sortList(lefthead);
    ListNode right = sortList(righthead);

    return mergetwoLists(left, right);
}

ListNode findPivotNode(ListNode head) {
    ListNode slow = head;
    ListNode fast = head.next;
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;

    }
    return slow;
}

ListNode mergetwoLists(ListNode lefthead, ListNode righthead) {
    ListNode t1 = lefthead;
    ListNode t2 = righthead;
    ListNode tempNode = new ListNode(-1);

    ListNode temp = tempNode;
    while (t1 != null && t2 != null) {
        if (t1.val <= t2.val) {
            temp.next = t1;
            temp = t1;
            t1 = t1.next;
        } else {
            temp.next = t2;
            temp = t2;
            t2 = t2.next;
        }
    }
    if (t1 != null) {
        temp.next = t1;
    } else {
        temp.next = t2;
    }

    return tempNode.next;
}