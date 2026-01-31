import { useState } from 'react'
import CounterApp from './Component/CounterApp'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CounterApp></CounterApp>
    </>
  )
}

export default App
