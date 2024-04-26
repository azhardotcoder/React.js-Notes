import { useState, useCallback, useEffect, useRef } from 'react' //Importing hooks

function App() {
  const [length, setLength] = useState(8)
  const [numAllow, setNumAllow] = useState(false)
  const [charAllow, setCharAllow] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook : To select and copy password
  const passRef = useRef(null)

  // Generating Random Password
  const passwordGenerator = useCallback(() => {
    let pass = ''
    let str = "ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvwxyz"

    if (numAllow) str += "0123456789"
    if (charAllow) str += "!@#$%^&*()_+"

    // Generating password of given length
    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)

    }

    setPassword(pass)
  }, [length, numAllow, charAllow, setPassword]) //Dependency array


  // Copying password to clipboard
  const copyPassToClipboard = useCallback(()=>{
    passRef.current?.select()
   // passRef.current?.setSelectionRange(0, 5) //!Selecting text in range
    window.navigator.clipboard.writeText(password)
  }, [password])


  // useEffect hook : To generate password on initial render and on every change in length, numAllow, charAllow
  useEffect(()=>{
    passwordGenerator()
  }, [length, charAllow, numAllow, passwordGenerator])

  return (
    <>
       <div className=' mt-20  w-full max-w-md mx-auto shadow-md rounded-lg p-3 my-8 text-gray-900 bg-gray-100'>
      <h1 className='text-xl text-center font-semibold mb-4'>Password Generator</h1>
      <div className='flex flex-col items-center gap-y-4 mb-4'>
        <div className='relative flex items-center'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3 bg-gray-200 rounded-lg'
            placeholder='Generated Password'
            readOnly
            ref={passRef}
          />
          <button 
            className='absolute right-0 bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-r-lg'
            onClick={copyPassToClipboard}
          >
            Copy
          </button>
        </div>
        <div className='flex items-center gap-4'>
          <label htmlFor="length" className='font-semibold'>Length:</label>
          <input
            type="range"
            min={8}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => { setLength(e.target.value) }}
          />
          <span className='text-lg'>{length}</span>
        </div>
        <div className='flex items-center gap-4'>
          <input
            type="checkbox"
            defaultChecked={numAllow}
            id='numberInput'
            onChange={() => {
              setNumAllow((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Include Numbers</label>
        </div>
        <div className='flex items-center gap-4'>
          <input
            type="checkbox"
            defaultChecked={charAllow}
            id='charInput'
            onChange={() => {
              setCharAllow((prev) => !prev);
            }}
          />
          <label htmlFor="charInput">Include Special Characters</label>
        </div>
      </div>
    </div>

    </>
  )
}

export default App
