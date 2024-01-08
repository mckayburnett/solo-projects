import React, {useState, useEffect, useContext} from 'react'
import { Context } from './ContextProvider.js'

export default function Form(){

    const {currencies} = useContext(Context)
    const tester = (currencies.map(currency => {
        return <input type="radio" value={currency} placeholder={currency} name={currency} onClick={(e) => console.log(e.target.value)}></input>
    }))
    console.log('tester',tester)

    return(
        <div className="form-wrapper">
            <form className="form-form">
                Select Currency(s)
                {tester}
            </form>
        </div>
    )

}