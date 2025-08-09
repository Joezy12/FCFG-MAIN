import { useState } from "react"
import "../styles/transfer.css"
import { NavLink } from "react-router-dom"
import "../styles/withdrawPage.css"
import "../styles/paymentPage.css"

function Transfer() {
   const [transfer, setTransfer] = useState("first")

   const [withAmount, setWithAmount] = useState(0);

   const [isClient, setIsClient] = useState(true)

   function getAmount(event) {
      setWithAmount(event.target.value)
   }

   const transferState = () => {
      if (transfer == "first") {
         return <div className="transfer-page">
            <div className="verify-nav transfer-nav">
               <NavLink to="../homeDash"><i className="bi-arrow-left"></i></NavLink>
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
               <input type="text" placeholder="what is this for" />
               <button>Confirm Recipient</button>
            </div>
           {isClient ?  <div>
               <div className="confirm-recipient">
                  <h2>Nasty Black</h2>
                  <p>Acc Balance: 0</p>
               </div>
               <button className="next-but" onClick={() => setTransfer("amount")}>Next</button>
            </div>: ""}
         </div>
      } else if (transfer == "amount") {
         return <section className="with-container">

            <div className="with-head">
               <div></div>
               <h1>Enter Amount</h1>
               <h2 onClick={() => setTransfer("first")}><i className="bi-x"></i></h2>
            </div>

            <div className="with-amount">
               <input type="number" placeholder="$0" autoFocus onChange={getAmount} />
               <p>$200.02 available</p>

            </div>
            <div className="with-next">
               {withAmount > 0 ? <button className="active" onClick={() => setTransfer("sent")}>Send</button> : <button>Next</button>}
            </div>


         </section>
      } else if (transfer == "sent") {
         return <div className="payment-page">
            <div className="payment-box">
               <img src="https://img.freepik.com/premium-vector/green-checkmark-without-circle-icon_1076610-18511.jpg" alt="" />
               <h1>Sent Successsfully</h1>
               <p>You have successfully sent money to recipient
               </p>
               <NavLink className="link" to="../homeDash"><button><i className="bi-arrow-left"></i>Back to home</button></NavLink>
            </div>
         </div>
      }
   }

   return <div className="transfer">
      {transferState()}
   </div>
}

export default Transfer;