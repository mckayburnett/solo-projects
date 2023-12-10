import millitaryImg from './millitaryImg.png'
import flagImg from './flagImg.png'
import ballistix from './ballistix.webp'
import appStore from './appStore.png'
import gun from './gun.png'

function App() {

  function redirectToApp(){
    window.location.replace("https://apps.apple.com/us/app/ballistix/id6469571043")
  }
  //redirect https://apps.apple.com/us/app/ballistix/id6469571043

  return (
    <div className="app-wrapper">
      <h1 className="app-name">Ballistix</h1>
      <div className="app-redirecting">
        <h1 className="app-redirecting-string">Redirecting</h1>
        <h1 className="app-redirecting-dots">. . . .</h1>
      </div>
      <img className="app-gun" src={gun}></img>
      <div className="app-redirect">
        {/* <img src={appStore}className="app-redirect-button"></img> */}
        <button className="app-redirect-button" onClick={redirectToApp}><img src={appStore} className="app-redirect-img"></img></button>
        <p>Redirect to App Store</p>
      </div>
      <img src={ballistix} className="app-ballistix"></img>
      <img src={ballistix} className="app-ballistix-two"></img>
      <img src={millitaryImg} className="app-millitary"></img>
    </div>
  );
}

export default App;
