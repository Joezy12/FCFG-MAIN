import { NavLink } from "react-router-dom";
import SecondNavbar from "../general/secondNavbar";
import '../styles/signup.css'

function SignUp() {
    return (
        <>
        <SecondNavbar />
        <div className="signup">
          <div className="sign-head">
            <p>Get started by telling us about you</p>
            <span>To set up online access we need to locate you in our system</span>
          </div>
          <form className="signup-form">
             <p className="span">Enter your personal information</p>
             <div className="sign-input">
               <p>Full Name</p>
               <input type="text" />
             </div>
              <div className="sign-input">
               <p>Phone Number</p>
               <input type="number" placeholder="000000000"/>
             </div>
             <div className="sign-input">
               <p>Date of Birth</p>
               <input type="date" />
             </div>
             <button>Get Started</button>
          </form>
          <NavLink className="link" to="../login"><p className="already">Already have an account? Sign In</p></NavLink>
        </div>
        </>
    )
}

export default SignUp;