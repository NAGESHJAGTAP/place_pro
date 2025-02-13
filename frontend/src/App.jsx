import { useState } from 'react'
import './App.css'
import Navbar from './assets/Component/Navbar'
import Header from './assets/Component/Header'
import MainBody from './assets/Component/Mainbody'
import Footer from './assets/Component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Navbar/>
  <Header/>
  <MainBody/>
  <Footer />
    </>
  )
}

export default App
