import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0)

  const incrementCount = () => {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1)
    console.log(count + 1);
  }

  return (
    <>
      <h1>Counter</h1>
      <button onClick={incrementCount}>Increment</button>
      <h2>My new counter {count}</h2>
    </>
  )
}

export default App
