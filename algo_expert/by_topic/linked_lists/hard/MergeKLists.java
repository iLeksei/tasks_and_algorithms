import java.util.Comparator;
import java.util.PriorityQueue;

void main(String[] args) {

}


public ListNode mergeKLists(ListNode[] lists) {
    PriorityQueue<ListNode> q = new PriorityQueue<>(Comparator.comparingInt((ListNode a) -> a.val));
    for (ListNode node: lists) {
        while (node != null) {
            q.offer(node);
            node = node.next;
        }
    }
    ListNode head = q.poll();
    ListNode tail = head;
    if (head == null) return null;
    while (tail != null) {
        tail.next = q.poll();
        tail = tail.next;
    }
    return head;
}

public class ListNode {
    int val;
    ListNode next;

    ListNode() {
    }

    ListNode(int val) {
        this.val = val;
    }

    ListNode(int val, ListNode next) {
        this.val = val;
        this.next = next;
    }
}

public ListNode mergeKLists2(ListNode[] lists) {
    if(lists == null || lists.length == 0){
        return null;
    }
    return mergeListHelper(lists, 0, lists.length -1);
}
public ListNode mergeListHelper(ListNode[] lists, int start, int end){
    if(start == end){ // handles the base case
        return lists[start];
    }
    int mid = start + (end - start) /2;
    ListNode left = mergeListHelper(lists, start, mid);
    ListNode right = mergeListHelper(lists, mid + 1, end);
    return mergeList(left, right);
}
public ListNode mergeList(ListNode left,  ListNode right){
    ListNode res = new  ListNode(-1);
    ListNode curr = res;
    while(left != null || right != null){
        if(left == null){
            curr.next = right;
            right = right.next;
        }
        else if(right == null){
            curr.next = left;
            left = left.next;
        }
        else if(left.val < right.val){
            curr.next = left;
            left = left.next;
        }
        else {
            curr.next = right;
            right = right.next;
        }
        curr = curr.next;
    }
    return res.next;
}