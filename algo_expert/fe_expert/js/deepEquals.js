function deepEquals(valueOne, valueTwo) {
    // Write your code here.
    if (typeof valueOne !== typeof valueTwo) return false;
    if (Number.isNaN(valueOne)) return Number.isNaN(valueTwo);
    if (valueOne === null || valueTwo === null) return valueTwo === valueOne;
    if (!Array.isArray(valueOne) && Array.isArray(valueTwo)) return false;

    if (Array.isArray(valueOne)) {
        if (!Array.isArray(valueTwo)) return false;
        if (valueOne.length !== valueTwo.length) return false;
        return valueOne.every((element, idx) => {
            return deepEquals(element, valueTwo[idx])
        })
    }

    if (typeof valueOne === "object") {
        let valueOneKeys = Object.keys(valueOne);
        if (valueOneKeys.length !== Object.keys(valueTwo).length) return false;
        return valueOneKeys.every((key) => {
            if (!valueTwo[key]) return false;
            return deepEquals(valueOne[key], valueTwo[key]);
        })
    }

    return valueOne === valueTwo;
}