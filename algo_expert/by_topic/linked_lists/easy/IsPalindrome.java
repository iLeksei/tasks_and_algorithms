import java.util.ArrayList;

void main(String[] args) {

}

private static class ListNode {
    private int val;
    private ListNode next;
    ListNode(int val) {
        this.val = val;
    }
    public void setNext(ListNode next) {
        this.next = next;
    }
}

public boolean isPalindrome(ListNode head) {
    ArrayList<Integer> list = new ArrayList<>();
    ListNode currentNode = head;

    while(currentNode != null) {
        list.add(currentNode.val);
        currentNode = currentNode.next;
    }

    int i = 0;
    int j = list.size() - 1;
    while (i <= j) {
        if (!list.get(i).equals(list.get(j))) return false;
        i++;
        j--;
    }
    return true;
}