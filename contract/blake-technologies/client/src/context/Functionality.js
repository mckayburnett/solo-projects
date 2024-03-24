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
    async function deleteStudent(id){
        try{
            const res = userAxios.delete(`/api/student/${id}`)
            setStudents(prev => ({
                ...prev
            }))
        }catch(err){
            console.log(err)
        }
    }
    function handleDelete(id){
        deleteStudent(id)
        getAllStudents()
    }
    const [viewStudentList, setViewStudentList] = useState(false)
    async function editStudent(id, updates) {
        try {
          console.log(updates); // Log the updates parameter
          const res = userAxios.put(`/api/student/${id}`, updates);
          const updatedStudent = res.data;
          setStudents((prev) => ({
            ...prev,
            students: updatedStudent
          }));
          
        } catch (err) {
          console.log(err);
        }
    }
    const [businesses, setBusinesses] = useState([]);
    async function getAllBusinesses(e){
        try{
            const res = await userAxios.get('/api/business')
            setBusinesses(prev => ({
                ...prev,
                businesses: res.data
            }))
        }catch(err){
            console.log(err.response.data)
        }
    }
    async function addNote(id, note){
        try{
            const res = await userAxios.put(`/api/business${id}/note`, note)
            const updatedBusiness = res.data;
            setBusinesses((prev) => ({
            ...prev,
            businesses: updatedBusiness
            }))
        }catch(err){
            console.log(err.response.data)
        }

    }
    async function deleteBusiness(id){
        try{
            const res = userAxios.delete(`/api/business/${id}`)
            setBusinesses(prev => ({
                ...prev
            }))
        }catch(err){
            console.log(err)
        }
    }
    function handleBusDelete(id){
        deleteBusiness(id)
        getAllBusinesses()
    }
    const [viewBusinessList, setViewBusinessList] = useState(false)
    async function editBusiness(id, updates) {
        try {
          console.log(updates); // Log the updates parameter
          const res = userAxios.put(`/api/business/${id}`, updates);
          const updatedBusiness = res.data;
          setBusinesses((prev) => ({
            ...prev,
            businesses: updatedBusiness
          }));
          
        } catch (err) {
          console.log(err);
        }
    }
    //-----Employee Blog-----
    const initBlog = {
        stylePage: "",
        title: "",
        styleTitle: "",
        subtitle: "",
        styleSubtitle: "",
        author: "",
        date: "",
        content: "",
        styleContent: "",
        img1: "",
        styleImg1: "",
        img2: "",
        styleImg2: "",
        img3: "",
        styleImg3: ""
    }
    const [blogInputs, setBlogInputs] = useState(initBlog)
    function handleBlogChange(e){
       const {name, value} = e.target
        setBlogInputs(prev => ({
            ...prev,
            [name] : value
        }))
    }
    const [toggleStyle, setToggleStyle] = useState(false)
    //-----------------------
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
    const initBusInputs = {
        name: "",
        email: "",
        phoneNumber: "",
        date: "",
        message: "Tell us a little about your business and expectations.",
        note: "Add Employee Note"
    }
    const [busInputs, setBusInputs] = useState(initBusInputs)
    const initInputs = {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        course: "",
        date: "",
        message: "Anything you'd like us to know?",
        note: "Add Employee Note"
    }
    function handleBusChange(e){
        const {name, value} = e.target
        setBusInputs(prev => ({
            ...prev,
            [name] : value
        }))
        console.log(busInputs)
    }
    function handleBusSubmit(e){
        e.preventDefault();
        addBusiness(busInputs);
        setBusInputs(initBusInputs);
    }
    async function addBusiness(newBusiness){
        try{
            const res = await axios.post('/business', {data: newBusiness, uncontacted: true})
            setBusinesses(prev => ({
                ...prev,
                businesses: res.data
            }))
        }catch(err){
            console.log(err)
        }
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
        addStudent(inputs)
        console.log(inputs)
        setInputs(initInputs)
    }
    const [sendClicked, setSendClicked] = useState(false);
    async function addStudent(newStudent){
        try{
            const res = await axios.post('/student', {data: newStudent, uncontacted: true})
            setStudents(prev => ({
                ...prev,
                students: res.data
            }))
        }catch(err){
            console.log(err)
        }
    }

    
    //-----------------

    //-----Courses-----
    const [iosButton, setIosButton] = useState(false);
    const [webButton, setWebButton] = useState(false);
    //----------------

    //-----iOS-----
    const [viewObj, setViewObj] = useState(false);

    //-------------
    return(
        <Functionality.Provider
            value={{
                ...userState,
                auth, setAuth,
                handleChangeAuth,
                handleAuthSubmit,
                logout,
                viewStudentList, setViewStudentList,
                getAllStudents,
                // radio,
                // handleChangeRadio,
                editStudent,
                deleteStudent,
                handleDelete,
                students, setStudents,
                addStudent,
                viewBusinessList, setViewBusinessList,
                getAllBusinesses,
                editBusiness,
                deleteBusiness,
                handleBusDelete,
                businesses, setBusinesses,
                addBusiness,
                handleBusChange,
                handleBusSubmit,
                blogInputs, setBlogInputs,
                handleBlogChange,
                toggleStyle, setToggleStyle,
                scrollToTop,
                showButton, setShowButton,
                homeClick,
                coursesClick,
                slideNum, setSlideNum,
                iosButton, setIosButton,
                webButton, setWebButton,
                inputs, setInputs,
                busInputs, setBusInputs,
                handleChange,
                handleSubmit,
                sendClicked, setSendClicked,
                viewObj, setViewObj
            }}
        >
            {props.children}
        </Functionality.Provider>
    )
}