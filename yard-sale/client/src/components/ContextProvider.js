import React, {useState, useEffect} from 'react'

export const Context = React.createContext()

export default function ContextProvider(props){

    //hamburger component
    const [hamClicked, setHamClicked] = useState(false)

    //create sale component
    const [stateClicked, setStateClicked] = useState(true)
    const [cityClicked, setCityClicked] = useState(true)
    const [streetClicked, setStreetClicked] = useState(true)
    const [zipcodeClicked, setZipcodeClicked] = useState(true)
    const [locationComplete, setLocationComplete] = useState(false)


    return(
        <Context.Provider
            value={{
                hamClicked, setHamClicked,
                stateClicked, setStateClicked,
                cityClicked, setCityClicked,
                streetClicked, setStreetClicked,
                zipcodeClicked, setZipcodeClicked,
                locationComplete, setLocationComplete,
                
            }}
        >
            {props.children}
        </Context.Provider>
    )
}