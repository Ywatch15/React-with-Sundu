import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(10)// here counter is a variable as declared below using let  and setCounter is the function responsible for the updation of this variable counter and 15 is the default value that we gave to it
  // it is not necessary to give the nomenclature as setCounter, we can name it anything as it is a function we just named it for our understanding 
  // let counter = 15;

  const addValue=()=>{
    // counter=counter +1
    setCounter(counter+1)// instead we can pass above line as setCounter(counter) when we'll uncomment the above line both the things will work same way
    // console.log("Counter value is: ", counter);
    if(counter >=20) setCounter(20) // this will not allow the counter to go above 20
  }

  const removeValue=()=>{
    setCounter(counter-1)
    // console.log("Counter value is: ", counter);
    if(counter <=0) setCounter(0) // this will not allow the counter to go below 0
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
