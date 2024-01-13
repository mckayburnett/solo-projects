import React, {useState, useEffect, useContext} from 'react'
import { Context } from './ContextProvider.js'

export default function Form(){

    const {currencies, currency, setCurrency, currencyValue, getConversion, runFunc, setRunFunc} = useContext(Context)

    function handleSubmit(e){
        e.preventDefault()
        getConversion(currency)
        setRunFunc(true)
    }
    function handleReset(e){
        e.preventDefault()
        setCurrency("")
        setRunFunc(false)
    }

    return(
        <div className="form-wrapper">
            <form className="form-form" onSubmit={handleSubmit}>
                Select Currency(s)
                {currencyValue}
                {!runFunc ? <button>Convert</button> : <button onClick={handleReset}>Reset</button>}
                
            </form>
        </div>
    )

}