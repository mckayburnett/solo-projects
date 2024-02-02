import {useContext} from 'react'
import { Context } from './ContextProvider.js'

export default function Hamburger(props){

    const { hamClicked, setHamClicked } = useContext(Context)
    
    return(
        <>
            { !hamClicked ?
            <div className="hamburger" onClick={() => setHamClicked(true)}>
                <div className="burger burger1"></div>
                <div className="burger burger2"></div>
                <div className="burger burger3"></div>
            </div>
            :
            <></>}
        </>
    )
}