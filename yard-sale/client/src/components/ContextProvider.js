import React, {useState, useEffect} from 'react'

export const Context = React.createContext()

export default function ContextProvider(props){

    //hamburger component
    const [hamClicked, setHamClicked] = useState(false)

    //create sale component location
    const [stateClicked, setStateClicked] = useState(true)
    const [cityClicked, setCityClicked] = useState(true)
    const [streetClicked, setStreetClicked] = useState(true)
    const [zipcodeClicked, setZipcodeClicked] = useState(true)
    const [locationComplete, setLocationComplete] = useState(false)
    const initLocation = {
        state: "",
        city: "",
        street: "",
        zipcode: "",
    }
    const [location, setLocation] = useState(initLocation)

    //create sale component item
    const initItem = {
        name: "",
        price: "",
        description: "",
        picture: ""
    }
    const [item, setItem] = useState(initItem)

    return(
        <Context.Provider
            value={{
                hamClicked, setHamClicked,
                stateClicked, setStateClicked,
                cityClicked, setCityClicked,
                streetClicked, setStreetClicked,
                zipcodeClicked, setZipcodeClicked,
                locationComplete, setLocationComplete,
                initLocation,
                location, setLocation,
                initItem,
                item, setItem,
                
            }}
        >
            {props.children}
        </Context.Provider>
    )
}