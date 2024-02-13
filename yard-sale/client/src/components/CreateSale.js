import React, { useContext, useState, useEffect } from 'react'
import { Context } from './ContextProvider.js'

export default function CreateSale(props){

    const { stateClicked, setStateClicked, cityClicked, setCityClicked, streetClicked, setStreetClicked, zipcodeClicked, setZipcodeClicked, locationComplete, setLocationComplete, initLocation, location, setLocation, initItem, item, setItem } = useContext(Context)

    function handleChange(e){
        const { name, value } = e.target
        e.target.parentElement.className === "createSale-form-location" ? 
        setLocation(prev => ({
            ...prev,
            [name]: value
        }))
        :
        setItem(prev => ({
            ...prev,
            [name]: value
        }))
    }
    //console.log(navigator.mediaDevices)

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
                    onChange={handleChange}
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
                    onChange={handleChange}
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
                    onChange={handleChange}
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
                    onChange={handleChange}
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
{/*Add Items*/}
            {locationComplete && 
            <>
            <p className="createSale-form-items-location">{location.street} {location.city}, {location.state} {location.zipcode}</p>
            <form className="createSale-form-items">
                <h3>Create Yard Sale Items</h3>
                <input
                    className="createSale-form-items-name"
                    name="name"
                    value={item.name}
                    placeholder="Item Name"
                    onChange={handleChange}
                />
                <input
                    className="createSale-form-items-description"
                    name="description"
                    value={item.description}
                    placeholder="Description (optional)"
                    onChange={handleChange}
                />
                <input
                    className="createSale-form-items-price"
                    name="price"
                    value={item.price}
                    placeholder="Price"
                    type="number"
                    onChange={handleChange}
                />
                <input
                    className="createSale-form-items-picture"
                    name="picture"
                    value={item.picture}
                    placeholder="Upload Picture"
                    type="file"
                    onChange={handleChange}
                />
                <button type="button">Submit Item</button>
            </form>
            </>
            }
        </div>
    )
}