
function isPrime(num: number): boolean {
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

console.log(isPrime(7)); //true