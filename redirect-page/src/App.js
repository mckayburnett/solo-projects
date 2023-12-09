import millitaryImg from './millitaryImg.png'
import flagImg from './flagImg.png'
import ballistix from './ballistix.webp'
import appStore from './appStore.png'

function App() {

  function redirectToApp(){

  }
  //redirect https://apps.apple.com/us/app/ballistix/id6469571043

  return (
    <div className="app-wrapper">
      <h1 className="app-name">Ballistix</h1>
      <div className="app-redirect">
        <img src={appStore}className="app-redirect-button"></img>
        <p>Redirect to App Store</p>
      </div>
      <img src={ballistix} className="app-ballistix"></img>
      <img src={millitaryImg} className="app-millitary"></img>
    </div>
  );
}

export default App;
