import { NavLink } from "react-router-dom";
import SecondNavbar from "../general/secondNavbar";
import '../styles/signup.css'
import { useState } from "react";
import NewFooter from "../general/newFooter";
import { useNavigate } from "react-router-dom";

function SignUp() {

    const [isSetup, setIsSetup] = useState("personal");
    const navigate = useNavigate();

    
    function noSubmit(e) {
     e.preventDefault();
      setIsSetup("loading")
        setTimeout(()=> {
            finish();
        }, 1500)
    }

    function goToWelcome(e) {
      e.preventDefault();
      setIsSetup("loading")
      setTimeout(()=> {
        navigate("../welcome")
      },3000)
    }

    function signState(){
        if (isSetup == "personal") {
            return <form className="signup-form" onSubmit={noSubmit}>
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
        }else if(isSetup == "loading") {
            return <div className="loading">
                <span class="loader"></span>
            </div>
        }else if(isSetup == "finish") {
            return <form className="signup-form" onSubmit={goToWelcome}>
             <p className="span">Finish setting up your account</p>
             <div className="sign-input">
               <p>Email Address</p>
               <input type="text" />
             </div>
              <div className="sign-input">
               <p>Password</p>
               <input type="number" placeholder="000000000"/>
             </div>
             <div className="sign-input">
               <p>Confirm Password</p>
               <input type="date" />
             </div>
             <button>Finish Up</button>
          </form>
        }
    }

    function finish() {
        setIsSetup("finish")
    }

 
    return (
        <>
        <SecondNavbar />
        <div className="signup">
          <div className="sign-head">
            <p>Get started by telling us about you</p>
            <span>To set up online access we need to locate you in our system</span>
          </div>
          {signState()}
          <NavLink className="link" to="../login"><p className="already">Already have an account? Sign In</p></NavLink>
        </div>
        <NewFooter />
        </>
    )
}

export default SignUp;