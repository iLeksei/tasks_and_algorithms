const performance = require('perf_hooks').performance;

// O(2**N)
const fib = (num = 1) => {
    if (num <= 2) return 1;
    return fib(num - 1) + fib(num - 2);
}

const result1 = fib(8);
const result2 = fib(9);
const result3 = fib(10);
console.log(result1 + " + " + result2 + " = " +  result3);

let start = performance.now();
const result4 = fib(30);
console.log("result time: " + (performance.now() - start));