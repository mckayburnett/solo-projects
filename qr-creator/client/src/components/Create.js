import React, {useState, useContext, useEffect} from 'react'
import Saved from './Saved.js'
import { Context } from '../context/Context.js'


export default function Create(props){

    const { create, userState } = useContext(Context)

    const initInputs = {
        url: encodeURI(""),
        name: ""
    }
    const [inputs, setInputs] = useState(initInputs)
    const [uri, setUri] = useState("")
    const encoded = encodeURI(uri)

    function handleChange(e){
        const { name, value } = e.target
        setInputs(prev => ({
            ...prev,
            [name]: value
        }))
    }
    function handleSubmit(e){
        e.preventDefault()
        create(inputs)
    }

    const { name, url } = inputs

    return(
        <form onSubmit={handleSubmit}>
            <input
                name="name"
                type="text"
                value={name}
                onChange={handleChange}
                placeholder="Name your code"
            ></input>
            <input
                name="url"
                type="url"
                value={url}
                onChange={handleChange}
                placeholder="URL"
            ></input>
            <button>Create QR</button>
        </form>
    )
}