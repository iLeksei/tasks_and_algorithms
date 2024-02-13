import java.util.Stack;
import java.util.stream.Collectors;

void main(String[] args) {
    System.out.println(backspaceCompare("ab#c", "ad#c"));
}

public boolean backspaceCompare(String s, String t) {
    String str1 = backspaceString(s);
    String str2 = backspaceString(t);
    return str1.equals(str2);
}

private static String backspaceString(String str) {
    Stack<Character> stack = new Stack<>();

    for (int i = 0; i < str.length(); i++) {
        Character currChar = str.charAt(i);
        if (currChar.equals('#')) {
            if (!stack.isEmpty()) stack.pop();
        } else {
            stack.push(currChar);
        }
    }
    return stack.stream().collect(
            Collectors.reducing("", (str1, str2) -> str2 + "" + str1)).toString();
}
