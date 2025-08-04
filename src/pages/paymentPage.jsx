import { NavLink } from "react-router-dom";
import "../styles/paymentPage.css"

function PaymentPage() {
    return (
        <div className="payment-page">
          <div className="payment-box">
            <img src="https://th.bing.com/th/id/R.e9c6194cf62fd670ebd7f8113698ba56?rik=PbPXqK7AZqEP%2fg&riu=http%3a%2f%2fgetdrawings.com%2ffree-icon%2fbullet-icon-png-58.png&ehk=yjn7KEwvSVlojfNFxIXm13Yu5WAe2H%2feI65mD7IK91U%3d&risl=&pid=ImgRaw&r=0" alt="" />
            <h1>Payment Pending</h1>
            <p>We have'nt received your paymment, we are checking and will notify you as soon as we do,
                if no payment was made, this would not be processed
            </p>
           <NavLink className="link" to="../homeDash"><button><i className="bi-arrow-left"></i>Back to home</button></NavLink> 
          </div>
        </div>
    )
}

export default PaymentPage;