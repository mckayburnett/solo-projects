import React, {useState, useContext, useEffect} from 'react'
import { Context } from '../context/Context.js'

export default function Saved(props){

    const { userState, getUserCodes, deleteCode } = useContext(Context)
    const [deleteToggle, setDeleteToggle] = useState(false)

    function deleteClicked(codeId){
        deleteCode(codeId)
        setDeleteToggle(!deleteToggle)
    }

    const savedCodes = userState?.codes?.map(code => {
        return (
            <div className="saved-savedCodes" key={code._id}>    
                <img className="saved-img" src={`https://api.qrserver.com/v1/create-qr-code/?data=${code?.url && code.url}&size=150x150`} alt="img"/>
                <h2 className="saved-codeName">{code?.name && code.name}</h2>
                <button className="saved-button" onClick={() => deleteClicked(code?._id && code._id)}>Delete</button>
            </div>
        )
    })
    
    useEffect(() => {
        getUserCodes()
        console.log('firing')
    }, [deleteToggle])

    return(
        <div className="saved-wrapper">
            <h1 className="saved-title">Saved QR Codes</h1>
            <div className="saved-codePack">{savedCodes}</div>
        </div>
    )
}