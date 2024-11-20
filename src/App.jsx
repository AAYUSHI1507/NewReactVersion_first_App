import { useEffect, useRef, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Card from './Components/Card'


function App() {
  const [count, setCount] = useState(0)
  const [color, setcolor] = useState(0);
  useEffect(() => {
    alert("Hi !!! Just need a check of start page")
  }, []);
  useEffect(() => {
    setcolor(color + 1);
    alert(`Change the color : ${color}`)
  }, [count]);
  const HandleUpdateCount = () =>{
    setCount(count+1);
  }
  return (
    <>
      <Navbar />
      <div className="cards">
        <Card title = "card 1" description = "card 2 desc" />
        <Card title = "card 2" description = "card 3 desc" />
        <Card title = "card 3" description = "card 4 desc" />
        <Card title = "card 4" description = "card 5 desc" />
      </div>
      <p id="updateCount">{count}</p>
      <button className="btn btn-primary" onClick={HandleUpdateCount}>Count</button>
      <Footer />
    </>
  )
}

export default App
