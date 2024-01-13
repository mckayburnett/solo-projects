import {useState, useEffect, useContext} from 'react'
import { Context } from './ContextProvider.js'

export default function Results(props){

    const {currency, getConversion, converted, runFunc} = useContext(Context)

    const rates = runFunc && converted && converted.rates ? (
        Object.values(converted.rates).map((data, int) => (
          <h3 key={currency[int]}>{currency[int]} and {data}</h3>
        ))
      ) : "... loading";
      
    return(
        <div className="results-wrapper">
            <h3>Base: {converted.base}</h3>
            <h3>Date/Time updated: {converted.date}</h3>
           
                <h3>{rates}</h3>
            
            
        </div>
    )
}