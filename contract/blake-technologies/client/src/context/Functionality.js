import React, {useState, useContext, useEffect, useRef} from 'react'
import {useNavigate} from 'react-router-dom'

export const Functionality = React.createContext()

export default function ContextProvider(props){
    //-----Navbar-----
    const navigate = useNavigate(); // Initialize the useNavigate hook
    const homeClick = () => {
        navigate('/')
    }
    const coursesClick = () => {
        navigate('/courses')
    }
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    const [showButton, setShowButton] = useState(false);
      useEffect(() => {
        const handleScroll = () => {
            window.scrollY > 25 ? setShowButton(true) : setShowButton(false);
        };
            window.addEventListener('scroll', handleScroll);
            return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    //----------------

    //-----Home-----
    const [slideNum, setSlideNum] = useState(0);
    //--------------

    //-----Contact-----
    const initInputs = {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        course: "",
        message: ""
    }
    const [inputs, setInputs] = useState(initInputs)
    function handleChange(e){
        const {name, value} = e.target
        setInputs(prev => ({
            ...prev,
            [name] : value
        }))
    }
    function handleSubmit(e){
        e.preventDefault();
        //post request right here
        console.log(inputs)
        window.alert(`Thank you, ${inputs.firstName}, for sending us your information! You should hear back from us soon!`)
        setInputs(initInputs)
    }
    const [sendClicked, setSendClicked] = useState(false);
    //-----------------

    //-----Courses-----
    const [iosButton, setIosButton] = useState(false);
    const [webButton, setWebButton] = useState(false);
    //----------------
    return(
        <Functionality.Provider
            value={{
                scrollToTop,
                showButton, setShowButton,
                homeClick,
                coursesClick,
                slideNum, setSlideNum,
                iosButton, setIosButton,
                webButton, setWebButton,
                inputs, setInputs,
                handleChange,
                handleSubmit,
                sendClicked, setSendClicked,
                
            }}
        >
            {props.children}
        </Functionality.Provider>
    )
}