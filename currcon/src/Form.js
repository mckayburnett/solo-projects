import React, {useState, useEffect, useContext} from 'react'
import { Context } from './ContextProvider.js'

export default function Form(){

    const {currencies, currency, setCurrency, currencyValue, getConversion, runFunc, setRunFunc, handleSubmit, handleReset, baseValue} = useContext(Context)


    return(
        <div className="form-wrapper">
            <form className="form-form">
                <h3 className="form-selectBase">Select Base Currency</h3>
                {baseValue}
                <h3 className="form-selectCurrency">Select Currency(s) -{currency.length < 2 ? currency : currency.join(', ')}-</h3>
                {currencyValue}
                {!runFunc ? <button type="button" onClick={handleSubmit}>Convert</button> : <button type="button" onClick={handleReset}>Reset</button>}
            </form>
        </div>
    )

}