import java.util.Arrays;

public class CoinChange {

    public static void main(String[] args) {
        System.out.println(coinChange(new int[]{1, 2, 5, 10}, 18)); // 4
        System.out.println(coinChange(new int[]{1, 2, 5}, 10)); // 2
        System.out.println(coinChange(new int[]{1, 2, 5}, 11)); // 3
    }

    public static int coinChange(int[] coins, int amount) {
        int[] table = new int[amount + 1];
        Arrays.fill(table, Integer.MAX_VALUE);
        table[0] = 0;

        for (int i = 1; i < table.length; i++) {
            for (int coin: coins) {
                if (coin <= i && table[i - coin] != Integer.MAX_VALUE) {
                    table[i] = Math.min(table[i], table[i - coin] + 1);
                }
            }
        }
        return table[amount] != Integer.MAX_VALUE ? table[amount] : -1;
    }
}
