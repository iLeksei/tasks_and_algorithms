
// greatest common divisor
function gcd(a, b) {
    const first = a > b ? a : b;
    const second = a < b ? a : b;

    const divisor = first % second;
    if (divisor === 0) {
        return b;
    } else {
        return gcd(first, divisor);
    }
}

const result = gcd(90, 30);
console.log(result);