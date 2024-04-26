import { useState } from 'react' // Importing useState 
import './App.css'

function App() {
  //  variable  updateVariable
  let [counter, setCounter] = useState(0) // using state we can update value in multiple places
  const addValue = () => {
    setCounter(counter + 1)
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }


  return (
    <>
      <h1>Counter : {counter}</h1>
      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>

    </>
  )
}

export default App
