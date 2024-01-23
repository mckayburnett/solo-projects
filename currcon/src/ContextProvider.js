import React, {useState, useEffect} from 'react'
import axios from 'axios'

export const Context = React.createContext()

export default function ContextProvider(props){

    const currencies = ['ADA', 'AED', 'AFN', 'ALL', 'AMD', 'ANG', 'AOA', 'ARB', 'ARS', 'AUD', 'AWG', 'AZN', 'BAM', 'BBD', 'BDT', 'BGN', 'BHD', 'BIF', 'BMD', 'BNB', 'BND', 'BOB', 'BRL', 'BSD', 'BTC', 'BTN', 'BWP', 'BYN', 'BYR', 'BZD', 'CAD', 'CDF', 'CHF', 'CLF', 'CLP', 'CNY', 'COP', 'CRC', 'CUC', 'CUP', 'CVE', 'CZK', 'DAI', 'DJF', 'DKK', 'DOP', 'DOT', 'DZD', 'EGP', 'ERN', 'ETB', 'ETH', 'EUR', 'FJD', 'FKP', 'GBP', 'BEL', 'GGP', 'GHS', 'GIP', 'GMD', 'GNF', 'GTQ', 'GYD', 'HKD', 'HNL', 'HRK', 'HTG', 'HUF', 'IDR', 'ILS', 'IMP', 'INR', 'IQD', 'IRR', 'ISK', 'JEP', 'JMD', 'JOD', 'JPY', 'KES', 'KGS', 'KHR', 'KMF', 'KPW', 'KRW', 'KWD', 'KYD', 'KZT', 'LAK', 'LBP', 'LKR', 'LRD', 'LSL', 'LTC', 'LTL', 'LVL', 'LYD', 'MAD', 'MDL', 'MGA', 'MKD', 'MMK', 'MNT', 'MOP', 'MRO', 'MUR', 'MVR', 'MWK', 'MXN', 'MYR', 'MZN', 'NAD', 'NGN', 'NIO', 'NOK', 'NPR', 'NZD', 'OMR', 'OP', 'PAB', 'PEN', 'PGK', 'PHP', 'PKR', 'PLN', 'PYG', 'QAR', 'RON', 'RSD', 'RUB', 'RWF', 'SAR', 'SBD', 'SCR', 'SDG', 'SEK', 'SGD', 'SHP', 'SLL', 'SOL', 'SOS', 'SRD', 'STD', 'SVC', 'SYP', 'SZL', 'THB', 'TJS', 'TMT', 'TND', 'TOP', 'TRY', 'TTD', 'TWD', 'TZS', 'UAH', 'UGX', 'USD', 'UYU', 'UZS', 'VEF', 'VND', 'VUV', 'WST', 'XAF', 'XAG', 'XAU', 'XCD', 'XDR', 'XOF', 'XPD', 'XPF', 'XPT', 'XRP', 'YER', 'ZAR', 'ZMK', 'ZMW', 'ZWL']

    const [currency, setCurrency] = useState("")
    const [base, setBase] = useState("USD")
    const [runFunc, setRunFunc] = useState(false)


    console.log('test', runFunc)

    const currencyValue = (currencies.map(val => {
        return (
            
            currency.includes(val) ? 
            <div className="form-currencyValue" key={val}>
                {runFunc ? 
                <button type="button"  disabled = {true} className="form-currencyAbbrev-blue"key={val + "label"} onClick={(e) => setCurrency((prev) => [...prev, e.target.textContent])}>{val}</button>
                :
                <button type="button"  className="form-currencyAbbrev-blue"key={val + "label"} onClick={(e) => setCurrency((prev) => [...prev, e.target.textContent])}>{val}</button>
                }
            </div>
            :
            <div className="form-currencyValue" key={val}>
                {runFunc ? 
                <button type="button"  disabled = {true} className="form-currencyAbbrev"key={val + "label"} onClick={(e) => setCurrency((prev) => [...prev, e.target.textContent])}>{val}</button>
                :
                <button type="button" className="form-currencyAbbrev"key={val + "label"} onClick={(e) => setCurrency((prev) => [...prev, e.target.textContent])}>{val}</button>
                }           
            </div>
        )
    }))


    const [clicked, setClicked] = useState(0)
    const baseValue = 
        <div className="form-baseValue"> 
            <select onChange={(e) => setBase(e.target.value)} onClick={() => setClicked(prev => prev + 1)}>
                {clicked === 0 ? 
                <option key="USD">USD</option>
                :
                currencies.map(currency => {
                    return <option key={currency}>{currency}</option>
                })
                }
            </select>
        </div>
    

    const [converted, setConverted] = useState({})

    function getConversion(base, ...currencies){
        axios.get(`https://api.fxratesapi.com/latest?currencies=${currencies}&base=${base}`)
            .then(res => setConverted(res.data))
            .catch(err => console.log(err))
    }


    function handleSubmit(e){
        e.preventDefault()
        getConversion(base, currency)
        setRunFunc(true)
    }
    function handleReset(e){
        const scrollPosition = window.scrollY || window.pageYOffset;
        window.location.reload();
        window.onload = () => {
            window.scrollTo(0, scrollPosition);
        }
    }

    return(
        <Context.Provider
            value={{
                currencies,
                currency,
                setCurrency,
                currencyValue,
                base,
                setBase,
                baseValue,
                getConversion, 
                converted,
                runFunc,
                setRunFunc,
                handleSubmit,
                handleReset
            }}
        >
            {props.children}
        </Context.Provider>
    )
}