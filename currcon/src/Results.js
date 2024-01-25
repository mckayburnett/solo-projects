import {useState, useEffect, useContext} from 'react'
import { Context } from './ContextProvider.js'

export default function Results(props){

    const {currency, getConversion, converted, runFunc} = useContext(Context)

    function scroll() {
      window.scrollTo({ top: 9999, behavior: "smooth" })
      console.log('firing')
    }

    const rates = runFunc && converted && converted.rates ? (
        Object.values(converted.rates).map((data, i) => (
          <h3 className="results-rates-currency"key={currency[i]}>{currency[i]} : {data < 1 ? <span className="results-rates-dataRed">{data}</span>: <span className="results-rates-dataGreen">{data}</span>}</h3>
        )) 
      ) : "... loading";

      scroll()
    return(
        <div className="results-wrapper">
            <h3 className="results-date">Date/Time updated: {converted.date}</h3>
            <h3 className="results-base">Base: {converted.base} 1</h3>
            <div className="results-rates-container">{rates}</div>
        </div>
    )
}