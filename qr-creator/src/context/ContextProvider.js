import React, { useState } from 'react'
import axios from 'axios'

export const Context = React.createContext()

export default function ContextProvider(props){


    
    return(
        <Context.Provider
            value={{
               
            }}
        >
            {props.children}
        </Context.Provider>
    )
}
