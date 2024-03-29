import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const Context = React.createContext()

export default function ContextProvider(props){

    //nav
    const [searchData, setSearchData] = useState([])
    async function navSearch(e){
        setCoinToggle(false)
        try{
            const res = await axios.get(`https://api.coingecko.com/api/v3/search?query=${e}`)
            setSearchData(res.data)
            console.log(searchData)
        }catch(err) {
            console.log(err)
        }
        console.log("firing")
    }

    //crypto
    const [idData, setIdData] = useState([])
    async function getById(e, i){
        try{
            const res = await axios.get(`https://api.coingecko.com/api/v3/${e}/${i}`)
            setIdData(res.data)
        }catch(err){
            console.log(err)
        }
    }

    
    const [coinToggle, setCoinToggle] = useState(false)
    
    function clickToggle(e){
        e === "coin" && setCoinToggle(!coinToggle)
    }
    function back(){
        setCoinToggle(false);
        setSearchData([])
        setIdData([])
        window.location.reload();
    }
    //coinspec
    const [marketToggle, setMarketToggle] = useState(false)
    function openMarket(){
        setMarketToggle(true)
    }
    function closeMarket(){
        setMarketToggle(false)
        setCoinToggle(true)
    }
  
    return(
        <Context.Provider
            value={{
                searchData,
                navSearch,
                idData,
                getById,
                clickToggle,
                coinToggle,
                back,
                marketToggle,
                openMarket, 
                closeMarket
            }}
        >
            {props.children}
        </Context.Provider>
    )
}
