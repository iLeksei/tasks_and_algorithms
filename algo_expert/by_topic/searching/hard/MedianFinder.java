import java.util.Collections;
import java.util.PriorityQueue;

void main(String[] args) {
    MedianFinderClazz clazz = new MedianFinderClazz();
    clazz.addNum(-1); // [-1]
    System.out.println(clazz.findMedian());
    clazz.addNum(-2); // [-2, -1]
    System.out.println(clazz.findMedian());
    clazz.addNum(-3); // [-3, -2, -1]
    System.out.println(clazz.findMedian());
    clazz.addNum(-4); // [-4, -3, -2, -1]
    System.out.println(clazz.findMedian());
    clazz.addNum(-5); // [-5, -4, -3, -2, -1]
    System.out.println(clazz.findMedian());
}

/**
 *  space: O(N)
 *  time: add: log(N)
 *        find: O(1)
 */
class MedianFinderClazz {
    private PriorityQueue<Integer> minHeap;
    private PriorityQueue<Integer> maxHeap;
    private boolean isOdd = false;

    public MedianFinderClazz() {
        this.minHeap = new PriorityQueue<>();
        this.maxHeap = new PriorityQueue<>(Collections.reverseOrder());
    }

    public void addNum(int num) {
        if (isOdd) {
            minHeap.offer(num);
            maxHeap.offer(minHeap.poll());
        } else {
            maxHeap.offer(num);
            minHeap.offer(maxHeap.poll());
        }
        isOdd = !isOdd;
    }

    public double findMedian() {
        if (isOdd) return minHeap.peek();
        return (maxHeap.peek() + minHeap.peek()) / 2d;
    }
}

