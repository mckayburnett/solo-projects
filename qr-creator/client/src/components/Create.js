import React, {useState, useContext, useEffect} from 'react'
import Saved from './Saved.js'
import { Context } from '../context/Context.js'


export default function Create(props){

    const { create, userState, showLast, setShowLast } = useContext(Context)

    const initInputs = {
        url: encodeURI(""),
        name: ""
    }
    const [inputs, setInputs] = useState(initInputs)
    const [uri, setUri] = useState("")
    const encoded = encodeURI(uri)
    const lastCode = userState.codes[userState.codes.length - 1]

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
                type="url"
                value={url}
                onChange={handleChange}
                placeholder="URL"
            ></input>
            <button className="create-form-button">Create QR</button>
            { showLast  &&
                <div className="saved-savedCodes">    
                <h3 className="saved-codeName">{lastCode?.name && lastCode.name}</h3>
                <img className="saved-img" src={`https://api.qrserver.com/v1/create-qr-code/?data=${lastCode?.url && lastCode.url}&size=150x150`} alt="img"/>
            </div>
            }
        </form>
    )
}