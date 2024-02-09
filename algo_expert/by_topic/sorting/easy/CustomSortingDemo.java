import java.util.Arrays;
import java.util.Comparator;
import java.util.List;

void main(String[] args) {
    Interval i1 = new Interval(4, 7);
    Interval i2 = new Interval(3, 4);
    Interval i3 = new Interval(1, 2);
    List<Interval> intervals = Arrays.asList(i1, i2, i3);
    intervals.sort(Comparator.naturalOrder());
    System.out.println(intervals);
}

private record Interval(int from, int to) implements Comparable<Interval> {

    @Override
    public int compareTo(Interval o) {
        return this.from - o.from;
    }

    @Override
    public String toString() {
        return STR."""
            \{this.from} -> \{this.to}""";
    }
}
