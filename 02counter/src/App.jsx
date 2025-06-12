import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(15)// here counter is a variable as declared below using let  and setCounter is the function responsible for the updation of this variable counter and 15 is the default value that we gave to it
  // it is not necessary to give the nomenclature as setCounter, we can name it anything as it is a function we just named it for our understanding 
  // let counter = 15;

  const addValue=()=>{
    // counter=counter +1
    setCounter(counter+1)// instead we can pass above line as setCounter(counter) when we'll uncomment the above line both the things will work same way
    console.log("Counter value is: ", counter);
  }

  const removeValue=()=>{
    setCounter(counter-1)
    console.log("Counter value is: ", counter);
    
  }

  return (
    <>
      <h1>Welcome Sundu</h1>
      <h2>counter val : {counter}</h2>

      <button
        onClick = {addValue}
      >Add value</button>
      <br></br>
      <button
        onClick={removeValue}
      >Remove value</button>
    </>
  )
}

export default App
