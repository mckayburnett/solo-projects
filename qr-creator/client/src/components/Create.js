import React, {useState, useContext, useEffect} from 'react'
import Saved from './Saved.js'


export default function Create(props){

    const [uri, setUri] = useState("")
    const encoded = encodeURI(uri)
    console.log(encoded)

    function handleChange(e){
        setUri(e.targe.value)
    }
    function handleSubmit(e){
        e.preventDefault()
        console.log(uri)
    }

    return(
        <form onSubmit={handleSubmit}>
            <input
                name="input"
                type="text"
                onChange={handleChange}
            ></input>
            <button>Create QR</button>
        </form>
    )
}