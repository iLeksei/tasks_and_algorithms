void main(String[] args) {
    System.out.println(reverseWords("the sky is blue")); // blue is the sky
}

private String reverseWords(String s) {
    int i = 0;
    StringBuilder result = new StringBuilder();
    StringBuilder temp = new StringBuilder();
    int len = s.length();
    while(i < len) {
        while (i != len && s.charAt(i) != ' ') {
            temp.append(s.charAt(i));
            i++;
        }
        result.insert(0, temp);
        temp.setLength(0);
        while (i != len && s.charAt(i) == ' ') {
            i++;
        }
        if (i < len && !result.isEmpty()) {
            result.insert(0, " ");
        }
    }
    return result.toString();
};