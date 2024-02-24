import React, {useState, useContext, useEffect} from 'react'

export const Functionality = React.createContext()

export default function ContextProvider(props){
    //-----Navbar-----
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
    //----------------
    return(
        <Functionality.Provider
            value={{
                dropdownCoursesVisible, setDropdownCoursesVisible,
                dropdownFinanceVisible, setDropdownFinanceVisible,
                handleMouseEnter,
                handleMouseLeave
            }}
        >
            {props.children}
        </Functionality.Provider>
    )
}