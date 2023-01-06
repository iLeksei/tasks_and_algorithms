/**
    Write a MyPromise class based on the native Promise built-in class.

    An instance of the MyPromise class will always have one of
    three states: 'pending', 'fulfilled', or
    'rejected'. This state should be accessible through the
    state getter method.

    When a MyPromise is in the fulfilled or rejected state, it will
    have a value which should be accessible through the
    value getter method. A pending promise should always have the
    value of null.

    The MyPromise constructor takes in an executor function, which
    takes two callbacks: resolve and reject. This
    executor function should run immediately. Both of the callbacks passed to
    the executor function take in a value, which when called will set the value
    of the MyPromise as well as update the state based on which
    callback was called (resolve sets it to fulfilled, while
    reject sets it to rejected). If the executor function throws an
    error, the MyPromise should be rejected with the error value.
    For simplicity, you can assume only one of these callbacks will ever be
    called, and it will never be called more than once.

    An instance of the MyPromise class should have two public
    methods: then and catch with the following
    functionality:
      - then(onFulfilled, onRejected): Runs one of the callbacks
        after the MyPromise has settled. If the
        MyPromise is fulfilled, the value should be passed to the
        onFulfilled callback. If the MyPromise is
        rejected, the value should be passed to the
        onRejected callback. The then method should
        return a new MyPromise that resolves to the value as returned
        by either onFulfilled or onRejected. If either
        onFulfilled or onRejected throws an error, the
        returned MyPromise should be rejected with that error value.

      - catch(onRejected): Runs the onRejected callback
        after the MyPromise has been rejected. The value should be
        passed to the onRejected callback. The
        catch method should return a new MyPromise that
        resolves to the value returned by onRejected. If
        onRejected throws an error, the returned
        MyPromise should be rejected with that error value.

    Both then and catch return new
    MyPromise
    objects, meaning these methods should be chainable with the next call in the
    chain not running until the previous call completes. None of these callbacks
    should run until all other code in the call stack completes (i.e. they
    should be treated as microtasks by the event loop).

    If multiple calls to then and/or catch are made on
    the same MyPromise, their callback functions should be invoked
    in the order that then and catch were called (see
    sample usage #2).

    All of the callback functions to then and
    catch are optional. If the required callback is not passed, a
    new MyPromise
    should be returned with the previous value and state.

    Your code should not use the native Promise object in any way.
*/


const PROMISE_STATE = {
    PENDING: "pending",
    FULFILLED: "fulfilled",
    REJECTED: "rejected",
}

class MyPromise {
    // Write your code here.
    #state = PROMISE_STATE.PENDING;
    #value = null;
    #fulfilledCb = null;
    #rejectedCb = null;

    constructor(executorFunc) {
        // Write your code here.
        try {
            executorFunc(
                value => this.#resolve(value),
                value => this.#reject(value)
            );
        } catch (error) {
            this.#reject(error);
        }
    }

    then(onFulfilled, onRejected) {
        // Write your code here.
        return new MyPromise((resolve, reject) => {

            const handleResolved = () => {
                if (!onFulfilled) return resolve(this.#value);

                queueMicrotask(() => {
                    try {
                        const value = onFulfilled(this.#value);
                        resolve(value);
                    } catch (error) {
                        reject(error)
                    }
                })
            }

            const handleRejected = () => {
                queueMicrotask(() => {
                    if (!onRejected) return reject(this.#value);

                    try {
                        const value = onRejected(this.#value);
                        resolve(value);
                    } catch (error) {
                        reject(error);
                    }
                })
            }
            if (this.#state === PROMISE_STATE.PENDING) {
                this.#fulfilledCb = handleResolved;
                this.#rejectedCb = handleRejected;
                return;
            }

            if (this.#state === PROMISE_STATE.FULFILLED) {
                handleResolved();
                return;
            }

            if (this.#state === PROMISE_STATE.REJECTED) {
                handleRejected();
                return;
            }
        })
    }

    catch(onRejected) {
        // Write your code here.
        return this.then(null, onRejected)
    }

    get state() {
        // Write your code here.
        return this.#state;
    }

    get value() {
        // Write your code here.
        return this.#value;
    }

    #resolve(value) {
        this.#state = PROMISE_STATE.FULFILLED;
        this.#value = value;
        if (this.#fulfilledCb) this.#fulfilledCb()
    }

    #reject(value) {
        this.#state = PROMISE_STATE.REJECTED;
        this.#value = value;
        if (this.#rejectedCb) this.#rejectedCb()
    }
}