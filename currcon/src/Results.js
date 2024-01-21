import {useState, useEffect, useContext} from 'react'
import { Context } from './ContextProvider.js'

export default function Results(props){

    const {currency, getConversion, converted, runFunc} = useContext(Context)

    const rates = runFunc && converted && converted.rates ? (
        Object.values(converted.rates).map((data, i) => (
          <h3 key={currency[i]}>{currency[i]} : {data < 1 ? <span className="results-rates-dataRed">{data}</span>: <span className="results-rates-dataGreen">{data}</span>}</h3>
        ))
      ) : "... loading";

      console.log(converted.rates)
      
    return(
        <div className="results-wrapper">
            <h3>Date/Time updated: {converted.date}</h3>
            <h3>Base: {converted.base} 1</h3>
            <div>{rates}</div>
        </div>
    )
}