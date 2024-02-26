void main(String[] args) {
    System.out.println(reverseWords("Mr Ding")); // "rM gniD"
    System.out.println(reverseWords("I love u")); // "I evol u"
}

public String reverseWords(String s) {
    StringBuilder sb = new StringBuilder();
    int i = 0;
    int prevWordIdx = 0;
    int nextWordIdx = 0;

    while (i < s.length()) {
        // find last letter idx in word
        while (i < s.length() && !Character.isWhitespace(s.charAt(i))) {
            i++;
        }
        nextWordIdx = i;
        i = i - 1;

        // add in reverse order letters
        while (i >= prevWordIdx) {
            sb.append(s.charAt(i));
            i--;
        }

        // add spaces
        while (nextWordIdx < s.length() && Character.isWhitespace(s.charAt(nextWordIdx))) {
            nextWordIdx++;
            sb.append(' ');
        }

        // set idx for next word
        i = nextWordIdx;
        prevWordIdx = nextWordIdx;
    }

    return sb.toString();
}