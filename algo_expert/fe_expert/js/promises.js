Promise.myRace = function (promises) {
    // Write your code here.
    return new Promise((resolve, reject) => {
        promises.forEach(promise => {
            promise.then(resolve).catch(reject);
        })
    })
};

Promise.myAny = function (promises) {
    // Write your code here.
    let rejectCounter = 0;
    return new Promise((resolve, reject) => {
        promises.forEach(promise => {
            promise.then(resolve).catch( err => {
                ++rejectCounter;
                if (rejectCounter === promises.length) {
                    reject("all promises rejected");
                }
            });
        })

    })
};

Promise.myAll = function (promises) {
    // Write your code here.
    let resolvedCounter = 0;
    let results = Array(promises.length);
    return new Promise((resolve, reject) => {
        promises.forEach((promise, idx) => {
            promise.then(data => {
                ++resolvedCounter;
                results[idx] = data;
                if (resolvedCounter === promises.length) resolve(results);
            }).catch(reject)
        })
    })
};

Promise.myAllSettled = function (promises) {
    // Write your code here.
    let handledCounter = 0;
    let results = Array(promises.length);
    return new Promise((resolve, reject) => {
        promises.forEach((promise, idx) => {
            promise.then(data => {
                results[idx] = {
                    status: "fulfilled",
                    value: data,
                };
                ++handledCounter;
                if (handledCounter === promises.length) resolve(results);
            }).catch( err => {
                results[idx] = {
                    status: "rejected",
                    error: err,
                };
                ++handledCounter;
                if (handledCounter === promises.length) resolve(results);
            })
        })
    })
};
