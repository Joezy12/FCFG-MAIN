import { useState } from 'react'

import './App.css'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/landingPage'
import Navbar from './general/navbar'
import Footer from './general/footer'
import LoginPage from './pages/loginPage'
import SignUp from './pages/signup'
import CardPage from './pages/cardPage'

function App() {
  const [count, setCount] = useState(0)

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  function getWidth() {
    setScreenWidth(window.innerWidth)
    console.log(screenWidth)
  }

  window.addEventListener('resize', () => {
    getWidth();
  })



  console.log(screenWidth)

  return (
    <section>
     {/* {screenWidth < 700 ? <Navbar /> : ""} */}
      {screenWidth < 700 ? <Routes>
        <Route index element={<LandingPage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='card' element={<CardPage />} />
      </Routes> : <div className='ops'>
        <img src="https://icon-library.com/images/sorry-icon/sorry-icon-1.jpg" alt="" />
        <h1>Oooops, Available for Mobile Only</h1>
        <button>I understad</button>
      </div>}
      {screenWidth < 700 ? <Footer />: ""}
    </section>
  )
}

export default App
