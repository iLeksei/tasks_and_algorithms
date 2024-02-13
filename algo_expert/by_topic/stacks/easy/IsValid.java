import java.util.HashMap;
import java.util.Map;
import java.util.Stack;

void main(String[] args) {
    System.out.println(isValid("(){}}{")); // false
    System.out.println(isValid("((")); // false
    System.out.println(isValid("([{}])")); // true
    System.out.println(isValid("()[]")); // true
    System.out.println(isValid("([]])")); // false
}

private boolean isValid(String s) {
    if (s.length() < 2) return false;
    Stack<Character> stack = new Stack<>();
    int idx = 1;
    stack.push(s.charAt(0));
    Map<Character, Character> brackets = new HashMap<>();
    brackets.put(')', '(');
    brackets.put(']', '[');
    brackets.put('}', '{');

    while (idx < s.length()) {
        Character currentChar = s.charAt(idx);
        if (!brackets.containsKey(currentChar)) {
            stack.push(currentChar);
        } else {
            if (stack.isEmpty()) return false;
            Character bracket = stack.pop();
            if (!brackets.get(currentChar).equals(bracket)) return false;
        }
        idx++;
    }
    return stack.isEmpty();
}