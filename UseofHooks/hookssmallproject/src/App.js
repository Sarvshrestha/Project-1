import { useCallback, useEffect, useRef, useState } from 'react';
import './App.css';

function App() {

  const [count, setcount] = useState(0);
  const [length, setLength] = useState(8);
  const [alphabet, setAlphabet] = useState();
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] =  useState(false);
  const [password, setPassword] = useState();

  const passwordRef = useRef(null)
  const updateCounter = () => {
    setcount(prevCount => prevCount +1);
  }

  const passwordGenerator = useCallback(() => {
    let pass =""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str +="0123456789"
    if (charAllowed) str +="!@#$%^&*()?/{}";

    for(let i =1; i<=length ; i++) {
      let char = Math.floor(Math.random() * str.length +1)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  
  return (
 <>
 <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-white-800 text-orange-500'>
<div className="flex text-sm gap-x-2">
  Hi I am there  , my count is {count}<button onClick= {updateCounter}>Click here</button>
  <h1 className='text-lg text-center bg-slate-400'>Password Generator</h1><button onClick={updateCounter} className=' bg-fuchsia-50' >hello</button>
  <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
    </div>
</div>

<div className='flex text-sm gap-x-2'>
<div className='flex text-sm gap-x-2'>
  <input type="range"
         min={6} max={100} value={length} onChange={(e) => {setLength(e.target.value)}} />
         <label>Length: {length}</label>
  </div>

  <div className='flex text-xl gap-x-4'>
    <input type="checkbox" defaultChecked={numberAllowed} id='numberInput' onChange={() => {setnumberAllowed((prev) => !prev)}} />
    <label htmlFor='numberInput'>Numbers</label>
  </div>

  <div className='flex text-lg gap-x-4'>
    <input type="checkbox" defaultChecked={charAllowed} id='charInput' onChange={() => {setcharAllowed((prev) => !prev)}} />
    <label htmlFor='charInput' >Characters</label>
  </div>

  </div>
  </div>
 </>
  );
}

export default App;


