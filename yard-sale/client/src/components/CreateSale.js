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
                <button type="button" onClick = {() => setStateClicked(false)}>Next</button>
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
                <button type="button" onClick = {() => setCityClicked(false)}>Next</button>
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
                <button type="button" onClick = {() => setStreetClicked(false)}>Next</button>
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
                 <button type="button" onClick = {() => setZipcodeClicked(false)}>Next</button>
                </>
                }
                {!zipcodeClicked && !locationComplete &&
                <>
                    <div className="createSale-form-location-info">
                        <h3>state</h3>
                        <h3>city</h3>
                        <h3>street</h3><span></span><h3>zipcode</h3>
                    </div>
                    <button type="button" onClick={() => setLocationComplete(true)}>Submit</button>
                </>}
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