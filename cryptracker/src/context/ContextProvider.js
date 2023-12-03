import React, { useState } from 'react'
import axios from 'axios'

export const Context = React.createContext()

export default function ContextProvider(props){

    //nav
    const [searchData, setSearchData] = useState([])
    async function navSearch(e){
        setCoinToggle(false)
        setNftToggle(false)
        try{
            const res = await axios.get(`https://api.coingecko.com/api/v3/search?query=${e}`)
            setSearchData(res.data)
        }catch(err) {
            console.log(err)
        }
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
    const [nftToggle, setNftToggle] = useState(false)
    function clickToggle(e){
        e === "coin" ? setCoinToggle(!coinToggle) : setNftToggle(!nftToggle)
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
                nftToggle
            }}
        >
            {props.children}
        </Context.Provider>
    )
}
