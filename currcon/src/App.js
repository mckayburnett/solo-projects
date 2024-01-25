import Form from './Form.js'
import Results from './Results.js'
import { Context } from './ContextProvider.js'
import { useContext } from 'react'

function App() {

  const { runFunc } = useContext(Context)
  

  return (
    <div className="app-wrapper">
      <div className="app-titles">
        <h1 className="app-mainTitle">Currency Converter</h1>
        <h2 className="app-subTitle">Updated by the Minute</h2>
       </div> 
       <Form />
      {runFunc && <Results />}
    </div>
  );
}

export default App;
