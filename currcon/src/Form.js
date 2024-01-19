import React, {useState, useEffect, useContext} from 'react'
import { Context } from './ContextProvider.js'

export default function Form(){

    const {currencies, currency, setCurrency, currencyValue, getConversion, runFunc, setRunFunc, handleSubmit, handleReset, baseValue} = useContext(Context)


    return(
        <div className="form-wrapper">
            <form className="form-form" onSubmit={handleSubmit}>
                Select Base Currency
                {baseValue}
                Select Currency(s)
                {currencyValue}
                {!runFunc ? <button>Convert</button> : <button onClick={handleReset}>Reset</button>}
                
            </form>
        </div>
    )

}