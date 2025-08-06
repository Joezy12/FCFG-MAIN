import "../styles/confirmLogin.css"
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import LoadingScreen from "./loadingScreen";

function ConfirmLogin() {

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  },)
  return (
    <>
    {isLoading ? <LoadingScreen />: ""}
      <div className="confirm-login">
        <div className="con-head">
          <NavLink className="link" to="../bankAccount"><i className="bi-arrow-left"></i></NavLink>
          <h1>PLAID</h1>
          <NavLink className="link" to="../homeDash"><i className="bi-x"></i></NavLink>
        </div>
        <div className="con-body">
          <div className="con-icon">
            <i className="bi-bank"></i>
          </div>
          <h1>Log in at Bank of America</h1>
          <p>You will be sent to Bank of America to securely<br /> log in to your account</p>
        </div>
        <div className="con-button">
          <NavLink className="link" to="../bankLogin"><button>Continue to Login</button></NavLink>
        </div>
      </div>
    </>
  )
}

export default ConfirmLogin;