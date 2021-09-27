const performance = require('perf_hooks').performance;


// O(N)
const fib = (num = 1, memo = {}) => {
    if (num in memo) return memo[num];
    if (num <= 2) return 1;
    memo[num]  = fib(num - 1, memo) + fib(num - 2, memo);
    return memo[num];
}

const result1 = fib(8);
const result2 = fib(9);
const result3 = fib(10);
console.log(result1 + " + " + result2 + " = " +  result3);

let start = performance.now();
const result4 = fib(55);
console.log("result time: " + (performance.now() - start));