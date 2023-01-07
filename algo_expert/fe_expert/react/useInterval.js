import React, {useEffect, useRef} from 'react';

function useInterval(callback = () => {}, delay) {
    // Write your code here.
    let intervalId = useRef()
    let callbackRef = useRef(callback);

    useEffect(() => {
        callbackRef.current = callback;
    }, [callback])

    useEffect(() => {
        if (!delay) {
            clearInterval(intervalId.current);
            return;
        }
        intervalId.current = setInterval(() => {callbackRef.current()}, delay);
        return () => {
            clearInterval(intervalId.current);
        }
    }, [delay])
}
