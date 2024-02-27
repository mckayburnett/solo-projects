import React, {useState, useContext, useEffect, useRef} from 'react'

export const Functionality = React.createContext()

export default function ContextProvider(props){
    //-----Navbar-----
       
    //----------------
    //-----Home-----
    const [slideNum, setSlideNum] = useState(0);
    //--------------
    //-----Courses-----
    const [iosButton, setIosButton] = useState(false);
    const [webButton, setWebButton] = useState(false);
    //----------------
    return(
        <Functionality.Provider
            value={{
                slideNum, setSlideNum,
                iosButton, setIosButton,
                webButton, setWebButton,
            }}
        >
            {props.children}
        </Functionality.Provider>
    )
}