import { useState } from 'react'

import './App.css'
import './styles/dashnav.css'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/landingPage'
import Navbar from './general/navbar'
import Footer from './general/footer'
import LoginPage from './pages/loginPage'
import SignUp from './pages/signup'
import CardPage from './pages/cardPage'
import Welcome from './pages/welcomePage'
import CheckingsPage from './pages/checkingsPage'
import HomeDashBoard from './pages/homedashboard'
import Accounts from './pages/accounts'
import CheckingDetails from './pages/checkingDetails'
import WithdrawPage from './pages/withdrawPage'
import SelectAccount from './pages/selectAccount'
import PayPal from './pages/paypal'
import CashApp from './pages/cashapp'
import History from './pages/history'
import DebitCard from './pages/debitCard'
import ConnectBank from './pages/connectBank'
import BankAccount from './pages/bankAccount'


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
        <Route path='welcome' element={<Welcome />} />
        <Route path='checking' element={<CheckingsPage />} />
         <Route path='homedash' element={<HomeDashBoard />} />
         <Route path='accounts' element={<Accounts />} />
         <Route path='checkingDetails' element={<CheckingDetails />} />
         <Route path='withdraw' element={<WithdrawPage />} />
         <Route path='selectAccount' element={<SelectAccount />}  />
         <Route path='paypal' element={<PayPal/>} />
         <Route path='history' element={<History />}/>
         <Route path='debitCard' element={<DebitCard />} />
         <Route path='cashapp' element={<CashApp/>} />
         <Route path='connectBank' element={<ConnectBank/>} />
         <Route path='bankAccount' element={<BankAccount/>} />
      </Routes> : <div className='ops'>
        <img src="https://icon-library.com/images/sorry-icon/sorry-icon-1.jpg" alt="" />
        <h1>Oooops, Available for Mobile Only</h1>
        <button>I understad</button>
      </div>}
     
    </section>
  )
}

export default App
