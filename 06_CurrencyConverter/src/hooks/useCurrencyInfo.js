import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(()=>{
        fetch(`https://v6.exchangerate-api.com/v6/39b3b0ebfeb99e624713fc0e/latest/${currency}.json`)
        .then((res)=> res.json())
        .then((res)=> setData(res[currency]))
        console.log(data);

    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;