void main(String[] args) {
    System.out.println(repeatedSubstringPattern("ababab")); // true
}

private static boolean repeatedSubstringPattern(String s) {
    int i = 0;
    int j = i + 1;
    int len = s.length();
    while (j < s.length() / 2 + 1) {
        if (s.substring(i, j).repeat(len / j).equals(s)) {
            return true;
        } else {
            j++;
//            len-=2;
        }
    }
    return false;
}