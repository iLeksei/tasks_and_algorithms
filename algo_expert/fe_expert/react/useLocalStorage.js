import React, {useState, useEffect} from 'react';

function useLocalStorage(key, initialValue) {
    // Write your code here.
    const [_value, _setValue] = useState(() => {
        let existedValue = JSON.parse(localStorage.getItem(key));
        if (existedValue == null) {
            return initialValue;
        }
        return existedValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(_value))
    }, [key, _value])

    return [_value, _setValue]
}