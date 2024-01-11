import Form from './Form.js'
import Results from './Results.js'

function App() {


  return (
    <div className="app-wrapper">
      <div className="app-titles">
        <h1 className="app-mainTitle">CurrCon</h1>
        <h2 className="app-subTitle">An updated by the minute Currency Converter</h2>
        <Form />
        <Results />
      </div>
    </div>
  );
}

export default App;
