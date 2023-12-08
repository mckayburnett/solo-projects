import React, { useState, useContext } from 'react'
import { Context } from '../context/ContextProvider'
import CoinList from './CoinList.js'
import CoinSpec from './CoinSpec.js'


export default function Crypto(){

    const {searchData, idData, coinToggle, nftToggle, back, marketToggle} = useContext(Context)

    const coins = searchData.coins?.length > 0 && searchData.coins.map(coin => {
        return(
            <CoinList {...coin}/>
        )
    })
    return(
        <>
            { coinToggle ?
                <CoinSpec coin={idData}/>
            :
            !coinToggle && !marketToggle ?
            <div className="cryptoWrap">
                {searchData?.coins?.length > 0 && <h2 className="crypto-searchResults">SEARCH RESULTS</h2>}
                <div className="crypto-coinsComponent">
                    {coins}
                </div>
            </div> 
            :
            <></>
            }
        </>
    )
}