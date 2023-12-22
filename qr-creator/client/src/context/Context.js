import React, { useState } from 'react'
import axios from 'axios'

export const Context = React.createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export default function ContextProvider(props){

    const initState = { 
        user: JSON.parse(localStorage.getItem("user")) || {},
        token: localStorage.getItem("token") || "",
        codes: []
    }
    const [userState, setUserState] = useState(initState)
    const [err, setErr] = useState("")

    function signup(credentials){
        axios.post('/auth/signup', credentials)
        .then(res => {
            const { user, token } = res.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            setUserState(prevUserState => ({
                ...prevUserState,
                user,
                token
            }))
            setToggle(true)
            setErr("")
        })
        .catch(err => setErr(err.response.data.errMsg))
    }

    function login(credentials){
        axios.post('/auth/login', credentials)
        .then(res => {
            const { user, token } = res.data
            localStorage.setItem("token", token)
            localStorage.setItem("user" , JSON.stringify(user))
            console.log(user)
            getUserCodes()
            setUserState(prevUserState => ({
                ...prevUserState,
                user, 
                token
            }))
            setToggle(true)
            setErr("")
        })
        .catch(err => setErr(err.response.data.errMsg))
    }

    function getUserCodes(){
        userAxios.get('/api/code/user')
        .then(res => {
            setUserState(prevState => ({
                ...prevState,
                codes: res.data
            }))
        })
        .catch(err => console.log(err))
    }

    function logout(){
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setUserState({
            user: {},
            token: "",
            codes: []
        })
        console.log("fired")
        setToggle(true)
        setErr("")
    }

    async function create(newCode){
        try {
            const res = await userAxios.post('/api/code', newCode)
            setLastCode(res.data)
            getUserCodes()
            setUserState(prev => ({
                ...prev,
                codes: [...prev.codes, res.data]
            }))
        } catch(err) {
            console.log(err)
        }
    }

    function deleteCode(codeId){
        try {
            const res = userAxios.delete(`/api/code/${codeId}`)
            setUserState(prev => ({
                ...prev
            }))
        } catch(err) {
            console.log(err)
        }
    }

    const [toggle, setToggle] = useState(true)
    const [showLast, setShowLast] = useState(false)
    const [lastCode, setLastCode] = useState("")



    return(
        <Context.Provider
            value={{

                ...userState,
                userState,
                signup,
                login,
                logout,
                toggle,
                setToggle,
                create,
                getUserCodes,
                deleteCode,
                showLast,
                setShowLast,
                lastCode,
                setLastCode, 
                err
            }}
        >
            {props.children}
        </Context.Provider>
    )
}
