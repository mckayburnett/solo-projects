import React, {useState, useContext, useEffect} from 'react'
import Saved from './components/Saved.js'


export default function Create(props){

    const [uri, setUri] = useState("")
    const encoded = encodeURI(uri)
    console.log(encoded)

    return(
        <h1>Create</h1>
    )
}