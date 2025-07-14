import { useState, useCallback, useEffect, useRef } from 'react'

// import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // useRef hook
  const passwordRef = useRef(null)

  const passGenerator =useCallback(()=>{
    let pass = ""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()_+[]{}|;':,.<>?/~`"
    for(let i=1;i<=length;i++){
      let ch= Math.floor(Math.random()*str.length+1)
      pass += str.charAt(ch-1)
    }
    setPassword(pass)
    
  },[length,numberAllowed,charAllowed,setPassword])// here setPassword is not needed in the dependency array as it is a stable function, but we can keep it for clarity and this is to use it for optimal performance, as it will not change on every render

  const copyPasswordToClipboard = useCallback(()=>{
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0,password.length); // this is for mobile devices to select the text we can pass the range of selction from (0 to anywhere till the length of the password i.e., 0-5)
  window.navigator.clipboard.writeText(password)
  }, [password]) 

  useEffect(()=>{
    passGenerator()
  },[length,numberAllowed,charAllowed, passGenerator])
  
  return (
    
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="bg-white text-black outline-none w-full py-2 px-3 rounded-md"
            placeholder="Password"
            readOnly
            ref={passwordRef} // attaching the ref to the input field
        />
        <button onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
              type="range"
              min={8}
              max={35}
              value={length}
              className='cursor-pointer'
              onChange={(e)=>{setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input 
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={()=>{setNumberAllowed((prev)=> !prev)}} //this is how we do callback fire without passing the true value in the onChange function as we see in the interview first problem in which the value get stashed, when we didn't pass it like that
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={()=>{setcharAllowed((prev)=> !prev)}}
            />
            <label htmlFor="charInput"> Characters</label>
          </div>
        </div>
      </div>
    
  )
}

export default App
