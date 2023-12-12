import React, {useState, useContext, useEffect} from 'react'
import Saved from './Saved.js'


export default function Create(props){

    const [uri, setUri] = useState("")
    const encoded = encodeURI(uri)
    console.log(encoded)

    function handleChange(e){
        console.log(e.targe.value)
    }

    return(
        <form>
            <input
                name="input"
                type="text"
                onChange={handleChange}
            ></input>
            <button>Create QR</button>
        </form>
    )
}