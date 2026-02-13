import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Bai1 from './component/bai1.jsx';
import Bai2 from './component/bai2.jsx';
import Bai3 from './component/bai3.jsx';
import Bai4 from './component/bai4.jsx';
import Bai5 from './component/bai5.jsx';
import Bai6 from './component/bai6.jsx';
import Bai7 from './component/bai7.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <div className="App">
      <h2>Bài 1</h2>
      <Bai1></Bai1>
      <hr />
      <h2>Bài 2</h2>
      <Bai2></Bai2>
      <hr />
      <h2>Bài3</h2>
      <Bai3></Bai3>
      {/* <hr />
      <h2>Bài 4</h2>
      <Bai4></Bai4> */}
      <hr />
      <h2>Bài 5</h2>
      <Bai5></Bai5>
      <hr />
      <h2>Bài 6</h2>
      <Bai6></Bai6>
      <hr />
      <h2>Bài 7</h2>
      <Bai7></Bai7>
      
    </div>
      
    </>
  )
}

export default App
