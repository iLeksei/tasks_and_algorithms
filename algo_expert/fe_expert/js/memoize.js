/**
    Write a memoize function that takes in a required callback function
    and an optional resolver function. The memoize function returns a
    memoized version of the callback function, which is defined as follows:

    All of the return values of the memoized function are cached. If the memoized callback is
    called with an existing cache key (defined below), then that cached value is returned without
    invoking the callback again.

    The cache key is defined based on the optional resolver function. If a
    resolver function is not provided, then the cache key is the result of passing
    the memoized function arguments to JSON.stringify as an array. If a custom
    resolver function is provided, then the arguments should be individually passed to that
    function instead, and its return value will be the cache key (note that this can be of any
    type).

    The memoized function should also have three methods:
     - clear(): Clears out the cache.
    - delete(...args): Deletes the cache entry corresponding to the passed
    arguments if one exists.
    - has(...args): Returns a boolean of true if the cache has an entry
    corresponding to the passed arguments, otherwise false.

    For simplicity, you don't need to worry about binding a
    this context (i.e., you can assume that the callback doesn't reference
    this).

 */

function memoize(callback, resolver) {
    // Write your code here.
    let cache = new Map();
    const getCachKey = (args) => {
        return resolver != null ? resolver(...args) : JSON.stringify(args);
    }

    const memoizeCb = (...args) => {
        let cacheKey = getCachKey(args);
        if (cache.has(cacheKey)) return cache.get(cacheKey);
        let result = callback(...args);
        cache.set(cacheKey, result);
        return result;
    }

    memoizeCb.clear = () => cache.clear();
    memoizeCb.delete = (...args) => cache.delete(getCachKey(args));
    memoizeCb.has = (...args) => cache.has(getCachKey(args));
    return memoizeCb;
}
