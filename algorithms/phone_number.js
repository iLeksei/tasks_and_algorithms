/*
*   |   1    |     2    |    3    |
*   |        |    abc   |   def   |
*    -------- ---------- ---------
*   |   4    |     5    |    6    |
*   |  ghi   |    jkl   |   mno   |
*    -------- ---------- ---------
*   |   7    |     8    |    9    |
*   |  pqrs  |    tuv   |   wxyz  |
*    -------- ---------- ---------
*   |        |     0    |         |
*   |        |          |         |
* */

// example: "1(800) 356 9377 => 1(800) flowers
// given phone: 3662277 and words: ["foo", "bar", "baz", "foobar", "emo", "cap", "car", "cat"];
// task: return all words that phone can include itself

const get_letter_num_map = () => {
    let letter_num_map = new Map();
    //2
    letter_num_map.set("a", 2)
    letter_num_map.set("b", 2)
    letter_num_map.set("c", 2)
    //3
    letter_num_map.set("d", 3)
    letter_num_map.set("e", 3)
    letter_num_map.set("f", 3)
    //4
    letter_num_map.set("g", 4)
    letter_num_map.set("h", 4)
    letter_num_map.set("i", 4)
    //5
    letter_num_map.set("j", 5)
    letter_num_map.set("k", 5)
    letter_num_map.set("l", 5)
    //6
    letter_num_map.set("m", 6)
    letter_num_map.set("n", 6)
    letter_num_map.set("o", 6)
    //7
    letter_num_map.set("p", 7)
    letter_num_map.set("q", 7)
    letter_num_map.set("r", 7)
    letter_num_map.set("s", 7)
    //8
    letter_num_map.set("t", 8)
    letter_num_map.set("u", 8)
    letter_num_map.set("v", 8)
    //8
    letter_num_map.set("w", 9)
    letter_num_map.set("x", 9)
    letter_num_map.set("y", 9)
    letter_num_map.set("z", 9)
    return letter_num_map;
}

const get_words = (phone = "", words = []) => {
    if (!phone || !words) return [];
    let letter_num_map = get_letter_num_map();
    let result = [];
    for (let i = 0; i < words.length; i++) {
        let word_mums = words[i].split("")
            .map( letter => letter_num_map.get(letter) || letter)
            .join("");
        if (phone.indexOf(word_mums) !== -1) {
            result.push(words[i]);
        }
        console.log(words[i], word_mums)
    }
    return result;
}

let result = get_words("3662277", ["foo", "bar", "baz", "foobar", "emo", "cap", "car", "cat"]);
console.log("result: " + JSON.stringify(result))
