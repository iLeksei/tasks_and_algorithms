

function throttle(callback, delay) {
    // Write your code here.
    let timerId = null;
    let prevCallTime = 0;
    let throttledCb = function(...args) {
        let nextDelay = delay - (Date.now() - prevCallTime);
        if (nextDelay > 0) {
            clearTimeout(timerId);
            timerId = setTimeout(() => {
                prevCallTime = Date.now();
                callback.apply(this, args)
            }, nextDelay);
            return;
        }
        prevCallTime = Date.now();
        callback.apply(this, args);
    }

    throttledCb.cancel = () => {
        clearTimeout(timerId);
    }
    return throttledCb;
}