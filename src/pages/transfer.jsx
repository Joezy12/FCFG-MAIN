import { useState } from "react"
import "../styles/transfer.css"


function Transfer() {
   const [transfer, setTransfer] = useState("first")

   const transferState = () => {
      if (transfer == "first") {
         return <div className="transfer-page">
            <div className="verify-nav transfer-nav">
               <i className="bi-arrow-left"></i>
               <h1>Transfer</h1>
               <div></div>
            </div>

            <div className="transfer-balance">
               <p>Current Balance</p>
               <span>+$0.00 today</span>
               <h1>$200.03</h1>
            </div>

            <div className="recipient">
               <p>Enter Recipient Address</p>
               <input type="text" placeholder="address" />
               <button>Confirm Recipient</button>
            </div>
            <div className="conf">

            </div>
         </div>
      }
   }

   return <div className="transfer">
      {transferState()}
   </div>
}

export default Transfer;