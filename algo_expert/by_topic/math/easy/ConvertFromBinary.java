void main(String[] args) {
    System.out.println(convertFromBinary("101")); // 5
    System.out.println(convertFromBinary("111")); // 7
}

int convertFromBinary(String binaryNum) {
    int result = 0;
    for (int i = 0; i < binaryNum.length(); i++) {
        result = result * 2 + binaryNum.charAt(i) - '0';
    }
    return result;
}
