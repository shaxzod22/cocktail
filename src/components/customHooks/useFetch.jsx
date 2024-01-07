import { useEffect, useState } from "react"

const useFetch = (url) => {
    const [data,setData] = useState([])
    
    useEffect(()=>{
        const getData = async(url)=>{
            try {
                const response = await fetch(url)
                const jsonedData = await response.json()
                setData(jsonedData)
            } catch (error) {
                console.log(error);
            }
        }
        getData(url)
    },[url])
    
    return data
}

export default useFetch
