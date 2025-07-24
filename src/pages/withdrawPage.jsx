import { NavLink } from "react-router-dom";
import BottomNav from "../general/bottomNav";
import "../styles/withdrawPage.css"


function WithdrawPage() {
    return (
        <section className="with-container">

            <div className="with-head">
                <div></div>
                <h1>Withdraw money</h1>
               <NavLink to="../homedash"><h2><i className="bi-x"></i></h2></NavLink> 
            </div>

            <div className="with-amount">
                <input type="number" placeholder="$0" autoFocus />
                <p>$200.02 available</p>

            </div>
            <div className="with-next">
                <button>Next</button>
            </div>

            <BottomNav homeState="home" />
        </section>
    )
}

export default WithdrawPage;