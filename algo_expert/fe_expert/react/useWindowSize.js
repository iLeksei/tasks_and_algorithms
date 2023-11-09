import React, {useEffect, useState} from 'react';

function useWindowSize() {
    // Write your code here.
    const [windowSize, setWindowSize] = useState({ height: window.innerHeight, width: window.innerWidth })

    useEffect(() => {
        const onResize = () => {
            setWindowSize({ width: window.innerWidth, height: window.innerHeight, })
        }

        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize)
    }, [])

    return windowSize;
}