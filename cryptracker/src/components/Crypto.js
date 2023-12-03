import React, { useState, useContext } from 'react'
import { Context } from '../context/ContextProvider'
import Coins from './Coins.js'
import Nfts from './Nfts.js'
import SpecCoin from './SpecCoin.js'
import SpecNft from './SpecNft.js'



export default function Crypto(){

    const {searchData, idData, coinToggle, nftToggle} = useContext(Context)

    const coins = searchData.coins?.length > 0 && searchData.coins.map(coin => {
        return(
            <Coins {...coin}/>
        )
    })

    const nfts = searchData.nfts?.length > 0 && searchData.nfts.map(nft => {
        return(
            <Nfts {...nft}/>
        )
    })

    return(
        <>
            { coinToggle ?
                <SpecCoin coin={idData}/>
            : nftToggle ?
                <SpecNft nft={idData}/>
            :
            <div className="cryptoWrap">
                <h1 className="crypto-title">Search Results</h1>
                <div className="crypto-coinsComponent">
                    {coins}
                </div>
                <div className="crypto-nftsComponent">
                    {nfts}
                </div>
            </div> 
            }
        </>
    )
}