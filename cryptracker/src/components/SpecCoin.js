import { useState, useContext } from 'react'
import { Context } from '../context/ContextProvider'

export default function SpecCoin(props){

    const {coin} = props
    console.log(coin)
    const image = coin?.image?.large || coin?.image?.small || coin?.image?.thumb || "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png";
    const description = coin?.description?.en.replace(/<\/?a(?:\s+[\w\-\=\"\']+)?\/?>/g, '')
    return(
        <div className="specCoinWrap">
            <img src={`${image}`} className="specCoin-img"></img>
            <h1 className="specCoin-name">{coin.name}</h1>
            <h3 className="specCoin-description">{description}</h3>
        </div>
    )
}