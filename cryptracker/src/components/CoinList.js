import { useState, useContext } from 'react'
import { Context } from '../context/ContextProvider'

export default function CoinList(props){
    
    const {id, name, api_symbol, symbol, market_cap_rank, thumb, large} = props
    const {getById, idData, clickToggle} = useContext(Context)

    function click(){
        getById("coins", id)
        clickToggle("coin")
    }

    return(
        <div className="coinsWrap" onClick={click}>
            <h2 className="coins-name">{name}</h2>
            <img src={`${thumb}`}></img>
        </div>
    )
}