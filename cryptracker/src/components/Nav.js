import React, { useState, useContext } from 'react'
import { Context } from '../context/ContextProvider'

export default function Nav(){

    const {searchData, navSearch} = useContext(Context)

    const [search, setSearch] = useState("")

    function handleChange(e){
        setSearch(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault()
        navSearch(search)
    }
    const whoo = ">>>"

    return(
        <div className="navWrap">
            <h1 className="nav-title">CrypTracker</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    className="nav-search"
                    type="text"
                    name="search"
                    value={search}
                    onChange={handleChange}
                    placeholder="Search"
                >
                </input>
                <button className="nav-button">{whoo}</button>
            </form>
            
        </div>
            
    )
}