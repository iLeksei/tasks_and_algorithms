
/**
*     Write a function that takes in a string made up of parentheses ((
*     and )). The function should return an integer representing the
*     length of the longest balanced substring with regards to parentheses.
*
*     A string is said to be balanced if it has as many opening parentheses as it
*     has closing parentheses and if no parenthesis is unmatched. Note that an
*     opening parenthesis can't match a closing parenthesis that comes before it,
*     and similarly, a closing parenthesis can't match an opening parenthesis that
*     comes after it.
*
* Sample Input
* string = "(()))("
*
* Sample Output
* 4 * The longest balanced substring is "(())".
*/

/**
 * time: N
 * space: N
 */
function longestBalancedSubstring(string) {
    let stack = [];
    let i = 0;
    let maxLength = 0;
    let currentLength = 0;

    while (i < string.length) {

        if (!stack.length && string[i] === ")") {
            i++;
            maxLength = maxLength > currentLength ? maxLength : currentLength;
            currentLength = 0;
            continue;
        }

        if (stack.length && string[i] === ")" && string[i + 1] === "(") {
            stack.pop();
            currentLength++;
            maxLength = maxLength > currentLength ? maxLength : currentLength;
            currentLength = 0;
            i++;
            continue;
        }

        if (string[i] === "(") {
            stack.push(i);
            i++;
            continue;
        }

        if (string[i] === ")") {
            stack.pop();
            currentLength++;
            i++;
        }

    }

    return maxLength > currentLength ? maxLength : currentLength;
}

console.log(longestBalancedSubstring("(()))()")) // 2 (())
console.log(longestBalancedSubstring("(()))(()((()))")) // 3 (())
console.log(longestBalancedSubstring(")(()))()")) // 2 (())
console.log(longestBalancedSubstring(")(()))()(((())))((")) // 4 (((())))
console.log(longestBalancedSubstring("((()((")) // 1 ()
console.log(longestBalancedSubstring(")))(")) //
