
//
// You're given an array of unique strings. Write a function that returns an
// array containing the shortest unique prefix for each string.
//
// For example, given the strings ["algoexpert", "algorithm"], the
// shortest prefixes that uniquely identify each string are
// ["algoe", "algor"].
//
// If a string strA is entirely contained in another string
// strB, then there is no completely unique prefix for
// strA, and thus its shortest unique prefix should be its entire
// self. For example, given the strings ["food", "foodie"], the
// shortest prefixes to uniquely identify each string would be
// ["food", "foodi"]. In this example, "food"'s shortest unique
// prefix must be "food" (the entire string), since it's entirely contained in
// "foodie". It follows that "foodie" can't have just "food" as its shortest
// unique prefix.
//
//
// Your function should return the prefixes in the corresponding order of the input
// strings (i.e., the index of each prefix should be the same as the index of its corresponding
// string).
//
//
// Sample Input #1
//     strings = [
//         "algoexpert",
//         "algorithm",
//     ]
// Sample Output #1
//     [
//         "algoe",
//         "algor"
//     ]
//
// Sample Input #2
//     strings = [
//         "hello",
//         "world",
//         "he",
//         "foo",
//         "worldly",
//         "food",
//         "algoexpert"
//     ]
// Sample Output #2
//     [
//         "hel",
//         "world",
//         "he",
//         "foo",
//         "worldl",
//         "food",
//         "a"
//     ]
//
// Sample Input #3
//     strings = [
//         "foo",
//         "food",
//         "foods",
//         "foodie"
//     ]
// Sample Output #3
//     [
//         "foo",
//         "food",
//         "foods",
//         "foodi"
//     ]


function shortestUniquePrefixes(strings) {
    // Write your code here.
    return [];
}
