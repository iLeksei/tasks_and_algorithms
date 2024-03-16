void main(String[] args) {
    System.out.println(convertToBinary(5)); // 101
    System.out.println(convertToBinary(-7)); // 111
}

String convertToBinary(int num) {
    if (num == 0) return "";
    if (num < 0)  return "-" + convertToBinary(-num);

    StringBuilder sb = new StringBuilder();
    while (num > 0) {
        sb.append(num % 2);
        num /= 2;
    }
    return sb.reverse().toString();
}