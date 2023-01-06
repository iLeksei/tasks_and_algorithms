/**
    Write a debounce function that takes in a required
    callback function, a required delay in
    milliseconds, and an optional immediate boolean, which defaults
    to false.

    Calling debounce(callback, delay) should return a new
    "debounced" version of the callback function, which takes in the same
    parameters as the callback, and which, when executed, should call the
    callback after delay milliseconds have passed since the last
    call to this debounced function.

    For example, repeatedly calling a debounced function which had a delay of
    3000ms every second would never call the underlying callback function,
    because the delay of 3000ms would never elapse since the last call.

    If the immediate argument is true, then the first
    call to the debounced function should immediately execute the underlying
    callback function. However, the callback function shouldn't be able to
    execute again until delay milliseconds have passed since the
    last call to the debounced function.

    In this case, repeatedly calling a debounced function which had a delay of
    3000ms every second would call the underlying callback function once
    immediately after the first call, and then never again, because the delay of
    3000ms would never elapse since the last call.

    Note that the underlying callback functions should have the
    this context of the debounced-function callers. For example, in
    the following code snippet, the underlying callback should be called with
    the this context of the object:
*/


function debounce(callback, delay, immediate = false) {
    // Write your code here.
    let timeoutId = null;
    return function (...args) {
        clearTimeout(timeoutId);
        let callImmediate = immediate && !timeoutId;
        timeoutId = setTimeout(() => {
            timeoutId = null;
            if (!immediate) callback.apply(this, args);
        }, delay);
        if (callImmediate) callback.apply(this, args);
    }
}