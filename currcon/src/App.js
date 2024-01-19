import Form from './Form.js'
import Results from './Results.js'
import { Context } from './ContextProvider.js'
import { useContext } from 'react'

function App() {

  const { runFunc } = useContext(Context)


  return (
    <div className="app-wrapper">
      <div className="app-titles">
        <h1 className="app-mainTitle">CurrCon</h1>
        <h2 className="app-subTitle">An updated by the minute Currency Converter</h2>
        <Form />
        {runFunc && <Results />}
      </div>
    </div>
  );
}

export default App;
