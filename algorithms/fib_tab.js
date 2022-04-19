
// O(N) time

const fibTab = (n) => {
    let table = Array(n + 1).fill(0);
    table[1] = 1;
    for (let i = 0; i <= n; i++) {
        table[i + 1]+=table[i];
        table[i + 2]+=table[i];
    }
    return table[n];
}

console.log(fibTab(7));

function findFibTab(num) {
    if (!num) { return null };
    let table = Array(num).fill(1);

    for (let i = 2; i < table.length; i++) {
        table[i] = table[i - 1] + table[i - 2];
    }
    return table[table.length - 1]
}

console.log(findFibTab(7));