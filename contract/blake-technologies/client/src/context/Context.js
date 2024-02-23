import React, {useState, useContext, useEffect} from 'react'

export const Context = React.createContext()

export default function ContextProvider(props){

const [dropdownCoursesVisible, setDropdownCoursesVisible] = useState(false); //variable for courses dropdown menu
    const [dropdownFinanceVisible, setDropdownFinanceVisible] = useState(false); //variable for finance dropdown menu
    function handleMouseEnter(e){ //checks which dropdown to affect based off classname
        e.target.className === "nav-container-menus-courses" && setDropdownCoursesVisible(true);
        e.target.className === "nav-container-menus-finance" && setDropdownFinanceVisible(true);
    }
    function handleMouseLeave(e){ //checks which dropdown to affect based off classname
        e.target.className === "nav-container-menus-courses" && setDropdownCoursesVisible(false);
        e.target.className === "nav-container-menus-finance" && setDropdownFinanceVisible(false);
    }

    return(
        <Context.Provider
            value={{
                dropdownCoursesVisible, setDropdownCoursesVisible,
                dropdownFinanceVisible, setDropdownFinanceVisible,
                handleMouseEnter,
                handleMouseLeave
            }}
        >
            {props.children}
        </Context.Provider>
    )
}