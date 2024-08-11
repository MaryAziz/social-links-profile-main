import { useState } from 'react'
import './App.css'
import Profile from '../Components/Profile/Profile'
import Links from '../Components/Links/Links'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
      <Profile></Profile>
      <Links></Links>
      </main>
    </>
  )
}

export default App
