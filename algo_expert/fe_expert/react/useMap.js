import React, {useState, useRef} from 'react';

/**
    Write a useMap custom hook that works as a wrapper around
    the native JavaScript Map object. The function takes in a single
    optional intialValue
    parameter, which is passed directly to the Map constructor
    during the initial render.

    The useMap function should create a Map on mount and return
    an object with the following properties:

    map: The underlying Map object.

    set(key, value): A function to add a new key-value pair to
    the Map or to override the value of an existing key.

    delete(key): A function to delete a key from the Map if it
    exists.

    clear(): A function to clear out all entries from the map.

    All three of the returned functions (set, delete, and clear) should be
    static, meaning that the same function should be returned on every render
    for a given usage of useMap in a component instance. However,
    the map itself does not need to be static. Calling any of these functions
    should cause the component instance to rerender.
*/



function useMap(initialValue) {
    // Write your code here.
    const [_state, forceUpdate] = useState(true)
    const _map = useRef(new Map(initialValue));
    const handlersRef = useRef({
        set: (key, value) => {
            _map.current.set(key, value);
            forceUpdate( s => !s);
        },
        delete: (key) => {
            _map.current.delete(key);
            forceUpdate( s => !s);
        },
        clear: () => {
            _map.current.clear();
            forceUpdate( s => !s);
        }
    });

    return {
        map: _map.current,
        set: handlersRef.current.set,
        delete: handlersRef.current.delete,
        clear: handlersRef.current.clear,
    }
}
