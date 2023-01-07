import React, {useState} from 'react';

function useStateWithHistory(initialState) {
    // Write your code here.
    const [valueData, setValueData] = useState(() => {
        if (initialState != null) return {value: initialState, index: 0};
        return null;
    });
    const [history, setHistory] = useState(initialState != null ? [initialState] : []);

    const setValue = (newValue) => {
        if (!newValue) return;
        setValueData({
            value: newValue,
            index: history.length,
        });
        setHistory( prev => [...prev, newValue]);
    }

    const goBack = () => {
        const prevIndex = valueData.index - 1 < 0 ? 0 : valueData.index - 1;
        setValueData( prev => ({
            index: prevIndex,
            value: history[prevIndex],
        }))
    }

    const goForward = () => {
        const nextIndex = valueData.index + 1 === history.length ? valueData.index : valueData.index + 1;
        setValueData( prev => ({
            index: nextIndex,
            value: history[nextIndex],
        }))
    }

    return [valueData.value, setValue, goBack, goForward, history];
}