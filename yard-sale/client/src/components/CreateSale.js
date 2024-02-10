import React, { useContext, useState, useEffect } from 'react'

export default function CreateSale(props){

    const [stateClicked, setStateClicked] = useState(true)
    const [cityClicked, setCityClicked] = useState(true)
    const [streetClicked, setStreetClicked] = useState(true)
    const [zipcodeClicked, setZipcodeClicked] = useState(true)
    const [locationComplete, setLocationComplete] = useState(false)

    return (
        <div className="createSale-wrapper">
            <form className="createSale-form-location">
                {stateClicked && 
                <>
                <input 
                    className="createSale-form-location-state"
                    name="state"
                    value=""
                    placeholder="State"
                />
                <button type="button" className="createSale-form-location-state-button" onClick = {() => setStateClicked(false)}>Next</button>
                </>
                }
                {!stateClicked && cityClicked && 
                <>
                <input 
                    className="createSale-form-location-city"
                    name="city"
                    value=""
                    placeholder="City"
                />
                <button type="button" className="createSale-form-location-city-button" onClick = {() => setCityClicked(false)}>Next</button>
                </>
                }
                {!cityClicked && streetClicked && 
                <>
                <input 
                    className="createSale-form-location-street"
                    name="street"
                    value=""
                    placeholder="Street"
                />
                <button type="button" className="createSale-form-location-street-button" onClick = {() => setStreetClicked(false)}>Next</button>
                </>
                }
               {!streetClicked && zipcodeClicked && 
               <>
               <input 
                    className="createSale-form-location-zipcode"
                    name="zipcode"
                    value=""
                    placeholder="Zipcode"
                />
                 <button type="button" className="createSale-form-location-zipcode-button" onClick = {() => setZipcodeClicked(false)}>Next</button>
                </>
                }
                {!zipcodeClicked && !locationComplete &&
                <div className="createSale-form-location-info-wrapper">
                    <div className="createSale-form-location-info">
                        <h3>state</h3>
                        <h3>city</h3>
                        <h3>street and zipcode</h3>
                        <h4>Correct?</h4>
                    </div>
                    <button type="button" className="createSale-form-location-info-button-yes" onClick={() => setLocationComplete(true)}>Yes</button>
                    <button type="button" className="createSale-form-location-info-button-no" onClick={() => window.location.reload()}>No</button>
                </div>}
            </form>
            {locationComplete && 
            <>
            <p>street city, zipcode state (underlined)</p>
            <form className="createSale-form-items">
                <h3>Create Yard Sale Items</h3>
                <input
                    className="createSale-form-items-name"
                    name="name"
                    value=""
                    placeholder="Item Name"
                />
                <input
                    className="createSale-form-items-price"
                    name="price"
                    value=""
                    placeholder="Price"
                    type="number"
                />
                <input
                    className="createSale-form-items-picture"
                    name="picture"
                    value=""
                    placeholder="Upload Picture"
                    type="file"
                />
                <button type="button">Submit Item</button>
            </form>
            </>
            }
        </div>
    )
}