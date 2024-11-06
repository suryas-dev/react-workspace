import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className='bg-slate-400'>React router DOM</h1>
    </div>
  )
}

export default App
