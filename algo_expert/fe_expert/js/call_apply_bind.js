

Function.prototype.myCall = function (thisContext, ...args) {
    // Write your code here.
    let sym = Symbol('target')
    thisContext[sym] = this;
    let result = thisContext[sym](...args)
    delete thisContext[sym];
    return result;
};

Function.prototype.myApply = function (thisContext, args = []) {
    // Write your code here.
    let sym = Symbol('target')
    thisContext[sym] = this;
    let result = thisContext[sym](...args)
    delete thisContext[sym];
    return result;
};

Function.prototype.myBind = function (thisContext, ...args) {
    // Write your code here.
    return (...rest) => {
        let sym = Symbol('target')
        thisContext[sym] = this;
        let result = thisContext[sym](...args, ...rest);
        delete thisContext[sym];
        return result;
    }
};