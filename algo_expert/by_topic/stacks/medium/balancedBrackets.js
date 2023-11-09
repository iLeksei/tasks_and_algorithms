
    
// Write a function that takes in a string made up of brackets ((,
// [, {, ), ], and
// }) and other optional characters. The function should return a
// boolean representing whether the string is balanced with regards to brackets.
//
//
// A string is said to be balanced if it has as many opening brackets of a
// certain type as it has closing brackets of that type and if no bracket is
// unmatched. Note that an opening bracket can't match a corresponding closing
// bracket that comes before it, and similarly, a closing bracket can't match a
// corresponding opening bracket that comes after it. Also, brackets can't
// overlap each other as in
// [(]).
//
// Sample Input
// string = "([])(){}(())()()"
//
// Sample Output
// true // it's balanced



    // Time: O(n) | Space: O(n) -&gt; where n is the length
    // of the input string
function balancedBrackets(string) {
    const matchingBrackets = {
        ')': '(',
        ']': '[',
        '}': '{'
    }
    const openingBrackets = '([{';
    const stack = [];
    for (const char of string) {
        if (openingBrackets.includes(char)) {
            stack.push(char);
        }
        if (char in matchingBrackets) {
            const matchingBracket = stack.pop();
            if (matchingBracket !== matchingBrackets[char]) return false;
        }
    }  return stack.length === 0;
}
