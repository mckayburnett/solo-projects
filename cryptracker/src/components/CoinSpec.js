import { useState, useContext, useEffect } from 'react'
import { Context } from '../context/ContextProvider'
import CoinMarket from './CoinMarket.js'

export default function CoinSpec(props){
    const {coin} = props;
    const {openMarket, marketToggle} = useContext(Context)
    const [description, setDescription] = useState("");
    const [thumb, setThumb] = useState("")

    useEffect(() => {
        if (coin) {
            const newDescription = coin?.description?.en.replace(/<\/?a(?:\s+[\w\-\=\"\']+)?\/?>/g, '') || "No Description Available";
            setDescription(newDescription);
            const newThumb = coin?.image?.thumb
            setThumb(newThumb)
        }
    }, [coin]);

    const image = coin?.image?.large || coin?.image?.small || coin?.image?.thumb || "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png";
    const homepage = coin?.links?.homepage[0] || "";

    //sending through props
    const marketData = coin.market_data
    const name = coin.name
    // const currentPrice = coin?.market_data?.current_price || "";
    // const value = Object.entries(currentPrice).map(([currency, value]) => (
    //     <option key={currency} value={currency}>
    //         {currency}: {value}
    //     </option>
    // ));
    console.log(marketData)
    return (
        <div className="coinSpecWrap">
            {marketToggle ?
                <> 
                <CoinMarket thumb={thumb} {...marketData} name={name} marketData={marketData}/>
                </>
            :
                <>
                <img className="coinSpec-img" src={`${image}`} alt="Coin"></img>
                <h1 className="coinSpec-name">{coin.name}</h1>
                <a className="coinSpec-link" href={homepage}>{homepage}</a>
                <button className="coinSpec-button" onClick={openMarket}>Market Data</button>
                <div className="coinSpec-description">{description}</div>
                </>
            }
        </div>
    )
}