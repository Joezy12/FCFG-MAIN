import { NavLink } from "react-router-dom";
import BottomNav from "../general/bottomNav";
import "../styles/withdrawPage.css"
import { useState } from "react";


function WithdrawPage() {
    const [withAmount, setWithAmount] = useState(0); 

    function getAmount(event) {
      setWithAmount(event.target.value)
    }
    return (
        <section className="with-container">

            <div className="with-head">
                <div></div>
                <h1>Withdraw money</h1>
               <NavLink to="../homedash"><h2><i className="bi-x"></i></h2></NavLink> 
            </div>

            <div className="with-amount">
                <input type="number" placeholder="$0" autoFocus onChange={getAmount}/>
                <p>$200.02 available</p>

            </div>
           <div className="with-next">
                {withAmount > 0 ? <NavLink to="../selectAccount"><button className="active">Next</button></NavLink>: <button>Next</button>}
            </div>

            <BottomNav homeState="home" />
        </section>
    )
}

export default WithdrawPage;