import React, {useState, useContext, useEffect, useRef} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

export const Functionality = React.createContext()

const userAxios = axios.create()
userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export default function ContextProvider(props){
    //-----Epmloyee userAxios state-----
    const initState = {
        user: JSON.parse(localStorage.getItem("user")) || {},
        token: localStorage.getItem("token") || "",
    }
    const [userState, setUserState] = useState(initState)
    const [err, setErr] = useState("")
    function login(credentials){
        axios.post('/auth/login', credentials)
            .then(res => {
                const {user, token} = res.data
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                console.log(user)
            })
            .catch(err => setErr(err.response.data.errMsg))
    }
    const [students, setStudents] = useState([])
    function getAllStudents(){
        userAxios.get('/api/student')
        .then(res => {
            setStudents(prev => ({
                ...prev,
                students: res.data
            }))
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

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
                students, setStudents,
                getAllStudents,
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