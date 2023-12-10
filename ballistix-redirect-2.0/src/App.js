import ballistix from './ballistix.webp'
import appStore from './appStore.png'

function App() {

  function redirectToApp(){
    window.location.replace("https://apps.apple.com/us/app/ballistix/id6469571043")
  }

  //redirectToApp() * dead right now to show page. make this live before deploying. 

  return (
    <div className="app-wrapper">
      <div className="app-imgWrapper">
        <img src={ballistix} className="app-logo"></img>
      </div>
      <div className="app-redirecting">
        <h1 className="app-redirecting-string">Redirecting</h1>
        <h1 className="app-redirecting-dots">. . . .</h1>
      </div>
      <div className="app-redirect">
        <img src={appStore} className="app-redirect-img" onClick={redirectToApp}></img>
        <p>Click to Manually Redirect to App Store</p>
      </div>
    </div>
  );
}

export default App;
