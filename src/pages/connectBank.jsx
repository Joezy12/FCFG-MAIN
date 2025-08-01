import "../styles/connectBank.css"
import { NavLink } from "react-router-dom";


function ConnectBank() {
    return (
        <div className="connect-bank">
          <div className="connect-banner">
              <NavLink className="link" to="../homedash"> <i className="bi-x"></i></NavLink>
          </div>
          <div className="connect-body">
           <h1>Connect your bank & Withdraw and Accept Deposits</h1>
           <p>FCFG charges $0 fee to keep your bank account connected, send you low balance alerts, and provide budgeting tools</p>
           <h3>Connect your external account to FCFG</h3>
           <p><span>1</span>Connect your bank</p>
           <p><span>2</span>Enjoy seemless withdrawals</p>
           <h4>By continuing, I agree to the <span>Recurring connection of Private Bank Policy</span> for FCFG</h4>
           <NavLink to="../bankAccount"><button className="my-button">Agree and Continue</button></NavLink>
          </div>
        </div>
    )
}

export default ConnectBank;