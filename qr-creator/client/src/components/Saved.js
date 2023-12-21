import React, {useState, useContext, useEffect} from 'react'
import { Context } from '../context/Context.js'

export default function Saved(props){

    const { userState, getUserCodes } = useContext(Context)
    const savedCodes = userState.codes.map(code => {
        return (
            <div className="saved-savedCodes">    
                <h3 className="saved-codeName">{code.name}</h3>
                <img className="saved-img" src={`https://api.qrserver.com/v1/create-qr-code/?data=${code.url}&size=150x150`} alt="img"/>
                <button>Delete</button>
            </div>
        )
    })
    console.log('test', savedCodes)
    
    useEffect(() => {
        getUserCodes()
        console.log('saved', userState.codes)
    }, [])

    return(
        <div className="saved-wrapper">
            <h1 className="saved-title">Saved QR Codes</h1>
            <div>{savedCodes}</div>
        </div>
    )
}