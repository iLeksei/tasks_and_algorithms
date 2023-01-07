import React, {useEffect, useState, useRef} from 'react';

const CRYPTO_PRICES_API_BASE_URL =
    'https://api.frontendexpert.io/api/fe/cryptocurrencies';

const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        return response.json();
    } catch (error) {
        console.error(error.stack)
    }
    return null;
}

export default function CryptoPrices() {
    // Write your code here.
    const [data, setData] = useState(null);
    const pageRef = useRef(0);

    useEffect(() => {
        (async function onMount() {
            let data = await fetchData(CRYPTO_PRICES_API_BASE_URL);
            setData(data);
        })()
    }, [])

    const renderData = (data = []) => {
        return data?.map((crypto, idx) => (
            <tr key={`${crypto}-${idx}`}>
                <th>{crypto.name}</th>
                <td>{crypto.price}</td>
                <td>{crypto.marketCap}</td>
            </tr>
        ));
    }

    const clickNext = async () => {
        if (!data?.hasNext) return;
        let nextPage = pageRef.current += 1;
        const newData = await fetchData(CRYPTO_PRICES_API_BASE_URL + `?page=${nextPage}`)
        setData(newData);
    };

    const clickBack = async () => {
        if (pageRef.current === 0) return;
        let prevPage = pageRef.current -= 1;
        const newData = await fetchData(CRYPTO_PRICES_API_BASE_URL + `?page=${prevPage}`)
        setData(newData);
    };

    return (
        <>
            <table>
                <caption>Crypto Prices</caption>
                <thead>
                <tr>
                    <th>Coin</th>
                    <th>Price</th>
                    <th>Market Cap</th>
                </tr>
                </thead>
                <tbody>
                {
                    renderData(data?.coins)
                }
                </tbody>
            </table>
            <button onClick={clickBack} disabled={pageRef.current === 0}>
                Back
            </button>
            <button onClick={clickNext} disabled={!data?.hasNext}>
                Next
            </button>
        </>
    );
}