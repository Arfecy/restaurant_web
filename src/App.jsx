import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='header'>
        <h1>Tapa Tapa</h1>
        <a href='#'>Home</a>
        <a href='#'>Menu</a>
        <a href='#'>About</a>
      </div>
    </>
  )
}

export default App
