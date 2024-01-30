export default function Hamburger(props){

    console.log(props)
    return(
        <>
            { !props.hamClicked ?
            <div className="hamburger">
                <div className="burger burger1"></div>
                <div className="burger burger2"></div>
                <div className="burger burger3"></div>
            </div>
            :
            <></>}
        </>
    )
}