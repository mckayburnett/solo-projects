import React, {useState, useContext, useEffect} from 'react'
import { Context } from '../context/Context.js'

export default function Saved(props){

    const { codes, userState, getUserCodes } = useContext(Context)

    console.log('saved', userState)
    useEffect(() => {
        getUserCodes()
    }, [])

    return(
        <h1>Saved QR Codes</h1>
    )
}