import { useState } from 'react'
import Header from './component/Header'
import Footer from './component/Footer'
import StudentInfo from './component/StudentInfo'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header></Header>
      <StudentInfo name="Phạm Đăng Khoa"
        class="KTPM19B"
        id='23653401'></StudentInfo>
      <Footer></Footer>
    </div>
  )
}

export default App
