import React, { useState, useContext } from 'react'
import { Context } from '../context/ContextProvider'

export default function Nav(){

    const {searchData, navSearch, coinToggle, nftToggle, back, openMarket, marketToggle, closeMarket} = useContext(Context)

    const [search, setSearch] = useState("")
    const [searched, setSearched] = useState(false)

    function handleChange(e){
        setSearch(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault()
        navSearch(search)
        setSearch("")
        setSearched(true)
    }

    return(
        <div className="navWrap">
            <div className="nav-titleWrapper">
                <h1 className="nav-title">CrypTracker</h1>
            </div>
            {searched ? 
            <div className="nav-searchDiv">
                <button className="nav-backButton" onClick={back}>Home</button>
            </div>
            :
            <div className="nav-searchDiv">
                <form onSubmit={handleSubmit} className="nav-form">
                    <div className="nav-search">
                        <input 
                            className="nav-input"
                            type="text"
                            name="search"
                            value={search}
                            onChange={handleChange}
                            placeholder="CryptoCurrency"
                        >
                        </input>
                        <button className="nav-button" type="submit">Search</button>
                    </div>
                </form>
                <h2 className="nav-Description">A fully dynamic application that allows users to stay up-to-date with cryptocurrencies using Market Data and Information from CoinGecko. Data is displayed in all major international currencies, as well as BTC. Search and Discover.</h2>
            </div>
            }
        </div>
            
    )
}