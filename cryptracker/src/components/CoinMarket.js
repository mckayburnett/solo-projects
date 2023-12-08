import React, { useState, useContext } from 'react';
import { Context } from '../context/ContextProvider.js'

export default function CoinMarket(props) {
  const { thumb, name, current_price, marketData } = props;
  const { openMarket } = useContext(Context)
  const [selectedData, setSelectedData] = useState('');
  const [selectedInfo, setSelectedInfo] = useState(null);
  const [dropDownToggle, setDropDownToggle] = useState(false)

  const handleChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedData(selectedValue);
    setSelectedInfo(marketData[selectedValue]);
    setDropDownToggle(true)
  };
console.log('selected info', selectedInfo)
console.log('selected data', selectedData)
  const renderData = () => {
    if (selectedInfo !== null) {
      if (typeof selectedInfo === 'object') {
        return (
          <div className="coinMarket-valueDiv">
            <h3 className="coinMarket-selectedData">{selectedData}</h3>
            {Object.entries(selectedInfo).map(([currency, value]) => (
              <p key={currency} className="coinMarket-values">
                {currency}: {value}
              </p>
            ))}
          </div>
        );
      } else {
        return (
          <div className="coinMarket-valueDiv">
            <h3 className="coinMarket-selectedData">{selectedData}</h3>
            <p className="coinMarket-selectedInfo">{selectedInfo}</p>
          </div>
        );
      }
    } else if(selectedInfo === null && dropDownToggle){
        return <p className="coinMarket-selectedData">No Available Data for Selected Data Piece</p>
    } else {
        return <p className="coinMarket-selectedData">Please select a data piece from the dropdown</p>;
    }
  };

  return (
    <div className="coinMarketWrap">
      <img src={thumb} alt={name} className="coinMarket-thumb" />
      <h2 className="coinMarket-name">{name}</h2>
      <img src={thumb} alt={name} className="coinMarket-thumb" />
      <div className="cointMarket-select-wrapper">
      <select value={selectedData} onChange={handleChange} className="coinMarket-select">
        <option value="">Select Data Piece</option>
        {Object.keys(marketData).map((key) => (
          <option key={key} value={key} className="coinMarket-option">
            {key}
          </option>
        ))}
      </select>
      </div>
      {renderData()}
    </div>
  );
}