// import { useState } from 'react'

import './App.css'
import Card from './components/Card'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1 className='bg-green-400 text-black p-4 rounded-xl'>Hello pp!</h1> */}
      <Card userName="Sundu" para="This is the paradise for the Resume"/>
      <div className='p-1'></div>
      <Card userName="Pundu" /> //para="This is the paradise for the Resume"
    </>
  )
}

export default App
