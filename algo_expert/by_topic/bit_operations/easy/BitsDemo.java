void main(String[] args) {
    System.out.println(getBit(9, 3)); // 1001 -> 1
    System.out.println(setBit(9, 2)); // 1001 -> -> 1101 -> 13
    System.out.println(clearBit(13, 2)); // 1101 -> -> 1001 -> 9
    System.out.println(toggleBit(9, 1)); // 1001 -> -> 1011 -> 11
}

private int getBit(int num, int bit) {
    return (num & (1 << bit)) > 0 ? 1 : 0;
}

private int setBit(int num, int bit) {
    return (num | (1 << bit));
}

private int clearBit(int num, int bit) {
    return num & ~(1 << bit);
}

private int toggleBit(int num, int bit) {
    return num ^ (1 << bit);
}