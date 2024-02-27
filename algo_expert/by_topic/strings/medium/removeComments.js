/*
Given a C++ program, remove comments from it.
The program source is an array of strings source where source[i] is the ith line of the source code.
This represents the result of splitting the original source code string by the newline character '\n'.
In C++, there are two types of comments, line comments, and block comments.
The string "//" denotes a line comment,
which represents that it and the rest of the characters to the right of it in the same line should be ignored.
The string "/!*" denotes a block comment,
which represents that all characters until the next (non-overlapping) occurrence of "*!/" should be ignored.
(Here, occurrences happen in reading order: line by line from left to right.)
To be clear, the string "/!*!/" does not yet end the block comment, as the ending would be overlapping the beginning.
The first effective comment takes precedence over others.

For example, if the string "//" occurs in a block comment, it is ignored.
Similarly, if the string "/!*" occurs in a line or block comment, it is also ignored.
If a certain line of code is empty after removing comments, you must not output that line:
    each string in the answer list will be non-empty.

There will be no control characters, single quote, or double quote characters.

For example, source = "string s = "/!* Not a comment. *!/";" will not be a test case.
Also, nothing else such as defines or macros will interfere with the comments.
It is guaranteed that every open block comment will eventually be closed,
so "/!*" outside of a line or block comment always starts a new comment.

Finally, implicit newline characters can be deleted by block comments.
Please see the examples below for details.
After removing the comments from the source code, return the source code in the same format.


Example 1:
Input: source = [
    "/!*Test program *!/",
    "int main()",
    "{ ",
    "  // variable declaration ",
    "int a, b, c;",
    "/!* This is a test",
    "   multiline  ",
    "   comment for ",
    "   testing *!/",
    "a = b + c;",
    "}"
    ]
Output: ["int main()","{ ","  ","int a, b, c;","a = b + c;","}"]
Explanation: The line by line code is visualized as below:
    /!*Test program *!/
    int main()
{
    // variable declaration
    int a, b, c;
    /!* This is a test
       multiline
       comment for
       testing *!/
    a = b + c;
}
The string /!* denotes a block comment, including line 1 and lines 6-9. The string // denotes line 4 as comments.
The line by line output code is visualized as below:
int main()
{ 
    int a, b, c;
    a = b + c;
}

Example 2:
Input: source = ["a/!*comment", "line", "more_comment*!/b"]
Output: ["ab"]
Explanation: The original source string is "a/!*comment\nline\nmore_comment*!/b",
where we have bolded the newline characters.
After deletion, the implicit newline characters are deleted,
leaving the string "ab", which when delimited by newline characters becomes ["ab"].

Constraints:
1 <= source.length <= 100
0 <= source[i].length <= 80
source[i] consists of printable ASCII characters.
Every open block comment is eventually closed.
There are no single-quote or double-quote in the input.*/

function removeComments(source) {
    if (!source && source.length === 0) return [];
    let result = [];
    let hasBlockComment = false;
    let startCommentIdx = -1;
    let endCommentIdx = -1;
    let prevEntry = "";
    let temp = "";

    for (let entry of source) {
        if (entry.includes("//")) {
            startCommentIdx = entry.indexOf("//");
            temp = entry.slice(0, startCommentIdx);
            if (temp.length > 0) {
                result.push(temp);
            }
            startCommentIdx = -1;
            continue;
        }

        if (hasBlockComment) {
            endCommentIdx = entry.lastIndexOf("*/");
            if (endCommentIdx !== -1) {
                temp = prevEntry + entry.slice(endCommentIdx + 2);
                if (temp.length > 0) {
                    result.push(temp);
                }
                temp = "";
                prevEntry = "";
                endCommentIdx = -1;
                startCommentIdx = -1;
                hasBlockComment = false;
            }
            continue;
        }

        startCommentIdx = entry.indexOf("/*");
        if (startCommentIdx !== -1) {
            endCommentIdx = entry.lastIndexOf("*/");
            if (endCommentIdx !== -1) {
                temp = entry.slice(0, startCommentIdx) + entry.slice(endCommentIdx + 2)
                if (temp.length > 0) {
                    result.push(temp);
                }
                temp = "";
                startCommentIdx = -1;
                endCommentIdx = -1;
                continue;
            } else {
                prevEntry = entry.slice(0, startCommentIdx);
                startCommentIdx = -1;
                hasBlockComment = true;
                continue;
            }

        }
        result.push(entry);
    }

    return result;
};

function removeComments2(source) {
    const code = source.join('\n')
    const isBlockStart = (str, i) => str[i] === '/' && str[i + 1] === '*'
    const isBlockEnd = (str, i) => str[i] === '*' && str[i + 1] === '/'
    const isLineStart = (str, i) => str[i] === '/' && str[i + 1] === '/'
    const isNewLine = (str, i) => str[i] === '\n'
    let i = 0;
    let result = "";

    while (i < code.length) {
        if (isBlockStart(code, i)) {
            i += 2
            while (!isBlockEnd(code, i) && i < code.length) i++
            i += 2
        } else if (isLineStart(code, i)) {
            i += 2
            while (!isNewLine(code, i) && i < code.length) i++
        } else {
            result += code[i++]
        }
    }

    return result.split('\n').filter(Boolean)
};

console.log(removeComments(["a/*comment", "line", "more_comment*/b"])) // ["ab"]
console.log(removeComments2([
    "/*Test program */", "int main()",
    "{ ",
    "  // variable declaration ",
    "int a, b, c;",
    "/* This is a test",
    "   multiline  ",
    "   comment for ",
    "   testing */",
    "a = b + c;",
    "}"
])) // ["int main()","{ ","  ","int a, b, c;","a = b + c;","}"]