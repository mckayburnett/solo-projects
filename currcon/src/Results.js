import {useState, useEffect, useContext} from 'react'
import { Context } from './ContextProvider.js'

export default function Results(props){

    const {currency, getConversion, converted, runFunc} = useContext(Context)

    console.log(currency)
    console.log(converted.rates)

    return(
        <div className="results-wrapper">
            <h3>Base: {converted.base}</h3>
            <h3>Date: {converted.date}</h3>

        </div>
    )
}