import React, {useState, useEffect, useContext} from 'react'
import { Context } from './ContextProvider.js'

export default function Form(){

    const {currencies, currency, currencyValue, getConversion} = useContext(Context)

    function handleSubmit(e){
        e.preventDefault()
        getConversion(currency)
    }

    return(
        <div className="form-wrapper">
            <form className="form-form" onSubmit={handleSubmit}>
                Select Currency(s)
                {currencyValue}
                <button>Convert</button>
            </form>
        </div>
    )

}