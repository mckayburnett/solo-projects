import React, { useContext, useState, useEffect } from 'react'
import { Context } from './ContextProvider.js'

export default function CreateSale(props){

    const { stateClicked, setStateClicked, cityClicked, setCityClicked, streetClicked, setStreetClicked, zipcodeClicked, setZipcodeClicked, locationComplete, setLocationComplete, initLocation, location, setLocation } = useContext(Context)
    console.log(location)
    function handleChangeLocation(e){
        const { name, value } = e.target
        setLocation(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <div className="createSale-wrapper">
            <form className="createSale-form-location">
                {stateClicked && 
                <>
                <input 
                    className="createSale-form-location-state"
                    name="state"
                    value={location.state}
                    placeholder="State"
                    onChange={handleChangeLocation}
                />
                <button type="button" className="createSale-form-location-state-button" onClick = {() => setStateClicked(false)}>Next</button>
                </>
                }
                {!stateClicked && cityClicked && 
                <>
                <input 
                    className="createSale-form-location-city"
                    name="city"
                    value={location.city}
                    placeholder="City"
                    onChange={handleChangeLocation}
                />
                <button type="button" className="createSale-form-location-city-button" onClick = {() => setCityClicked(false)}>Next</button>
                </>
                }
                {!cityClicked && streetClicked && 
                <>
                <input 
                    className="createSale-form-location-street"
                    name="street"
                    value={location.street}
                    placeholder="Street"
                    onChange={handleChangeLocation}
                />
                <button type="button" className="createSale-form-location-street-button" onClick = {() => setStreetClicked(false)}>Next</button>
                </>
                }
               {!streetClicked && zipcodeClicked && 
               <>
               <input 
                    className="createSale-form-location-zipcode"
                    name="zipcode"
                    value={location.zipcode}
                    placeholder="Zipcode"
                    onChange={handleChangeLocation}
                />
                 <button type="button" className="createSale-form-location-zipcode-button" onClick = {() => setZipcodeClicked(false)}>Next</button>
                </>
                }
                {!zipcodeClicked && !locationComplete &&
                <div className="createSale-form-location-info-wrapper">
                    <div className="createSale-form-location-info">
                        <h3>{location.city}, {location.state}</h3>
                        <h3>{location.street}</h3> 
                        <h3>{location.zipcode}</h3>
                        <h4>Correct?</h4>
                    </div>
                    <button type="button" className="createSale-form-location-info-button-yes" onClick={() => setLocationComplete(true)}>Yes</button>
                    <button type="button" className="createSale-form-location-info-button-no" onClick={() => window.location.reload()}>No</button>
                </div>}
            </form>
            {locationComplete && 
            <>
            <p className="createSale-form-items-location">{location.street} {location.city}, {location.state} {location.zipcode}</p>
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