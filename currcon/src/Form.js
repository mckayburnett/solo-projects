import React, {useState, useEffect, useContext} from 'react'
import { Context } from './ContextProvider.js'

export default function Form(){

    const {currencies, currency, setCurrency, currencyValue, getConversion, runFunc, setRunFunc, handleSubmit, handleReset, baseValue} = useContext(Context)


    return(
        <div className="form-wrapper">
            <form className="form-form">
                <h3 className="form-selectBase">Select Base Currency</h3>
                {baseValue}
                <h3 className="form-selectCurrency">Select Currency(s)</h3>
                <div className="form-currencyValue-container">{currencyValue}</div>
                {!runFunc ? (currency.length > 0 ? <button className="form-button" type="button" onClick={handleSubmit}>Convert</button> : <button className="form-button" type="button" disabled={true} onClick={handleSubmit}>Convert</button> )  : <button className="form-button" type="button" onClick={handleReset}>Reset</button>}
                <h3>Selected: {currency.length < 2 ? currency : currency.join(' - ')}</h3>
            </form>
        </div>
    )

}