
// O(n**m) time
// O(m) space
const canSum = (targetSum = 0, numbers = []) => {
    if (targetSum === 0) return true;
    if (targetSum < 0) return false;

    for (const n of numbers) {
        let intermediateResult = targetSum - n;
        if (canSum(intermediateResult, numbers) === true) {
            return true;
        }
    }
    return false
}

console.log(canSum(7, [2,3])) // true
console.log(canSum(7, [5, 3, 4, 7])) // true
console.log(canSum(7, [2,4])) // false
console.log(canSum(8, [2,3,5])) // true
console.log(canSum(333, [3,4])) // false
