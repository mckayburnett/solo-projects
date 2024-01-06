import React, {useState, useEffect, useContext} from 'react'
import { Context } from './ContextProvider.js'

export default function Form(){

    const {currencies} = useContext(Context)
    const tester = (currencies.map(currency => {
        return <input type="radio" value={currency} placeholder={currency} name={currency} onClick={(e) => console.log(e.target.value)}></input>
    }))
    console.log(tester)

    return(
        <div className="form-wrapper">
            <form className="form-form">
                Select Currency(s)
                <input 
                    className="form-input-currencies"
                    type="radio"
                    name="currencies"
                    placeholder="Select Currency"
                    value={currencies}
                >
                </input>
                {tester}
            </form>
        </div>
    )

}