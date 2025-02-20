import { useState } from 'react'
import './App.css'
import Navbar from './assets/Component/Navbar'
import Footer from './assets/Component/Footer'
import SignIn from './assets/Component/Singin'
import { Home, Hospital } from 'lucide-react'
import HospitalPage from './assets/Component/Hospitaldeitals'
import Login from './assets/Component/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Navbar/>
  <Home/>
  <Footer />
  <SignIn/>
  <Login/>
  <Hospital/>
  <HospitalPage/>
    </>
  )
}

export default App
