import React, {useState, useEffect} from 'react'

export const Context = React.createContext()

export default function ContextProvider(props){

    const [hamClicked, setHamClicked] = useState(false)


    return(
        <Context.Provider
            value={{
                hamClicked,
                setHamClicked
            }}
        >
            {props.children}
        </Context.Provider>
    )
}