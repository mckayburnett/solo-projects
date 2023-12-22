import React, {useState, useContext, useEffect} from 'react'
import Saved from './Saved.js'
import { Context } from '../context/Context.js'


export default function Create(props){

    const { create, userState, showLast, setShowLast, lastCode, getUserCodes } = useContext(Context)

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
        getUserCodes()
        setInputs(initInputs)
        setShowLast(true)
    }
    const { name, url } = inputs
    
    return(
        <form onSubmit={handleSubmit} className="create-form">
            <input className="create-form-name"
                name="name"
                type="text"
                value={name}
                onChange={handleChange}
                placeholder="Name your code"
            ></input>
            <input className="create-form-url"
                name="url"
                type="text"
                value={url}
                onChange={handleChange}
                placeholder="URL"
            ></input>
            <button className="create-form-button">Create QR</button>
            { showLast && 
                <div className="create-created">    
                <h1 className="create-codeName">{lastCode?.name && lastCode.name}</h1>
                <img className="create-img" src={`https://api.qrserver.com/v1/create-qr-code/?data=${lastCode?.url && lastCode.url}&size=150x150`} alt="img"/>
                <h3 className="create-codeName">Code successfully created! Now viewable in Saved section</h3>
            </div>
            }
        </form>
    )
}