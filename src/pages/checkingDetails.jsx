import BottomNav from "../general/bottomNav";
import "../styles/checkingDetails.css"
import "../styles/homeDash.css"
import { NavLink } from "react-router-dom";
import historyData from "../general/historyData";

function CheckingDetails() {
  console.log(historyData)
    return (
        <>
            <div className="check-nav">
              <NavLink className="link" to="../homeDash"><i className="bi-arrow-left"></i></NavLink>  
                <h1>FCFG Checking</h1>
                <i className="bi-gear"></i>
            </div>
            <div className="top-check">
                <section className="cover">
                    <div className="acc-balance2">
                        <div className="acc-balance-left">
                            <p>Account Balance</p>
                            <h1>$200.02</h1>
                            <p>4.00% APY</p>
                             <h3>**** **** **** 0237</h3>
                        </div>
                        <div className="acc-balance-right">
                            <p>Debit Card</p>
                           
                        </div>
                    </div>
                    <div className="add-money">
                        <button>Add money</button>
                        <button>Withdraw</button>
                    </div>
                </section>
            </div>

            <div className="recent">

            </div>
            <BottomNav homeState="home"/>
        </>
    )
}


export default CheckingDetails;