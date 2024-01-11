import React, {useState, useEffect, useContext} from 'react'
import { Context } from './ContextProvider.js'

export default function Form(){

    const {currencies} = useContext(Context)

    const [currency, setCurrency] =useState("")
    const currencyValue = (currencies.map(currency => {
        return <div><input type="checkbox" value={currency} placeholder={currency} name={currency} onClick={(e) => setCurrency((prev) => [...prev, e.target.value])}></input><label>{currency}</label></div>
    }))
    console.log('currencyValue',currencyValue)
    console.log(currency)

    return(
        <div className="form-wrapper">
            <form className="form-form">
                Select Currency(s)
                {currencyValue}
            </form>
        </div>
    )

}