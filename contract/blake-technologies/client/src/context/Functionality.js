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
    //-----AuthForm-----
    const initState = {
        user: JSON.parse(localStorage.getItem("user")) || {},
        token: localStorage.getItem("token") || "",
    }
    const [userState, setUserState] = useState(initState)
    const [err, setErr] = useState("")
    const initAuth = {email: "", password: ""}
    const [auth, setAuth] = useState(initAuth)
    function handleChangeAuth(e){
        const {name, value} = e.target
        setAuth(prev => ({
            ...prev,
            [name] : value
        }))
    }
    function handleAuthSubmit(e){
        e.preventDefault();
        login(auth);
        setAuth(initAuth)
    }
    function login(credentials){
        axios.post('/auth/login', credentials)
            .then(res => {
                const {user, token} = res.data
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                setUserState(prev => ({
                    ...prev,
                    user,
                    token
                }))
                getAllStudents();
            })
            .catch(err => setErr(err.response.data.errMsg))
    }
    function logout(){
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setUserState({
            user: {},
            token: "",
        })
    }
    //-----Employee Portal-----
    const [students, setStudents] = useState([])
    async function getAllStudents(){
        try{
            const res = await userAxios.get('/api/student')
            setStudents(prev => ({
                ...prev,
                students: res.data
            }))
        }catch(err){
            console.log(err.response.data)
        }
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
        //post addStudent right here
        console.log(inputs)
        setInputs(initInputs)
    }
    const [sendClicked, setSendClicked] = useState(false);
    async function addStudent(newStudent){
        try{
            const res = await axios.post('/')
        }catch(err){

        }
    }

    
    //-----------------

    //-----Courses-----
    const [iosButton, setIosButton] = useState(false);
    const [webButton, setWebButton] = useState(false);
    //----------------
    return(
        <Functionality.Provider
            value={{
                ...userState,
                auth, setAuth,
                handleChangeAuth,
                handleAuthSubmit,
                logout,
                getAllStudents,
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