import "../styles/confirmLogin.css"
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import LoadingScreen from "./loadingScreen";

function ConfirmLogin(props) {

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
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
          <h1>Log in at {props.selectedLinkBank.BankName}</h1>
          <p>You will be sent to {props.selectedLinkBank.BankName}g to securely<br /> log in to your account</p>
        </div>
        <div className="con-button">
          <NavLink className="link" to="../bankLogin"><button>Continue to Login</button></NavLink>
        </div>
      </div>
    </>
  )
}

export default ConfirmLogin;