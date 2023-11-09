/**
 * Given a non-empty string of lowercase letters and a non-negative integer
    representing a key, write a function that returns a new string obtained by
    shifting every letter in the input string by k positions in the alphabet,
    where k is the key.
    Note that letters should "wrap" around the alphabet; in other words, the
    letter <span>z</span> shifted by one returns the letter <span>a</span>.
 */


function caesarCipherEncryptor(string, key) {
    // Write your code here.
    let arr = string.split("")
    let A_LETTER_CHAR_CODE = 97;
    let Z_LETTER_CHAR_CODE = 122;
    let offset = getOffset(key)

    for (let i = 0; i < arr.length; i++) {
        let currentCharCode = arr[i].charCodeAt();
        let newCharCode = currentCharCode + offset > Z_LETTER_CHAR_CODE ?
            A_LETTER_CHAR_CODE + ((offset + currentCharCode) - Z_LETTER_CHAR_CODE - 1) :
            currentCharCode + offset;
        arr[i] = String.fromCharCode(newCharCode)
    }
    return arr.join("")
}

function getOffset(key) {
    let ABC_LETTERS_AMOUNT = 26;
    if (key > ABC_LETTERS_AMOUNT) {
        return getOffset(key - ABC_LETTERS_AMOUNT)
    }
    return key;
}

caesarCipherEncryptor("abc", 1) // "bcd"
caesarCipherEncryptor("abc", 26) // "bcd"