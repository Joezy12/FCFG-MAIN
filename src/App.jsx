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
import ConfirmLogin from './pages/confirmLogin'
import BankLogin from './pages/bankLogin'
import BankCode from './pages/bankCode'
import PaymentPage from './pages/paymentPage'
import Settings from './pages/settings'
import { ToastContainer } from 'react-toastify'
import LinkedBank from './pages/linkedBank'
import ChangePassword from './pages/changePassword'
import VerifyWelcome from './pages/verifyWelcome'
import VerifyPage from './pages/verifyPage'


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
        <Route path='selectAccount' element={<SelectAccount />} />
        <Route path='paypal' element={<PayPal />} />
        <Route path='history' element={<History />} />
        <Route path='debitCard' element={<DebitCard />} />
        <Route path='cashapp' element={<CashApp />} />
        <Route path='connectBank' element={<ConnectBank />} />
        <Route path='bankAccount' element={<BankAccount />} />
        <Route path='confirmLogin' element={<ConfirmLogin />} />
        <Route path='bankLogin' element={<BankLogin />} />
        <Route path='bankCode' element={<BankCode />} />
        <Route path='paymentPage' element={<PaymentPage />} />
        <Route path='settings' element={<Settings />} />
         <Route path='linkedBank' element={<LinkedBank />} />
          <Route path='changePassword' element={<ChangePassword />} />
          <Route path='verifyWelcome' element={<VerifyWelcome />} />
          <Route path='verifyPage' element={<VerifyPage />} />
      </Routes> : <div className='ops'>
        <img src="https://icon-library.com/images/sorry-icon/sorry-icon-1.jpg" alt="" />
        <h1>Oooops, Available for Mobile Only</h1>
        <button>I understad</button>
      </div>}

      <ToastContainer />

    </section>
  )
}

export default App
