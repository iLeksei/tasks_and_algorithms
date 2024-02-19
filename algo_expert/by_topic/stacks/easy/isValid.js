/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * An input string is valid if:
 *
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * Every close bracket has a corresponding open bracket of the same type.
 * Example 1:
 * Input: s = "()"
 * Output: true
 *
 * Example 2:
 * Input: s = "()[]{}"
 * Output: true
 *
 * Example 3:
 * Input: s = "(]"
 * Output: false
 *
 * Constraints:
 * 1 <= s.length <= 104
 * s consists of parentheses only '()[]{}'.
 */

function isValid(s) {
    let stack = [s[0]];
    let idx = 1;
    let brackets = {
        ")": "(",
        "]": "[",
        "}": "{"
    }

    while(stack.length > 0) {
        if (!(s[idx] in brackets)) {
            stack.push(s[idx]);
            idx++;
            continue;
        }
        let char = stack.pop();
        if (brackets[char] !== s[idx]) return false;
        idx++;
    }

    return true;
};