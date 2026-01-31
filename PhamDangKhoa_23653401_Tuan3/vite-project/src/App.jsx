import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Bai1 from './component/bai1.jsx';
import Bai2 from './component/bai2.jsx';
import Bai3 from './component/bai3.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="App">
      <Bai1></Bai1>
      <hr />
      <Bai2></Bai2>
      <hr />
      <Bai3></Bai3>
    </div>
      
    </>
  )
}

export default App
