import { useState } from 'react'
import Navbar from './components/Navbar'
import Section from './components/SectionMain'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='bg-white w-full h-screen'>
    <Navbar/>
    <Section/>
   </div>
  )
}

export default App