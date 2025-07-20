import { NavLink } from "react-router-dom";
import SecondNavbar from "../general/secondNavbar";
import '../styles/signup.css'
import { useState } from "react";
import NewFooter from "../general/newFooter";
import { useNavigate } from "react-router-dom";

function SignUp() {

  const [isSetup, setIsSetup] = useState("personal");
  const navigate = useNavigate();


   const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) => currentYear - i);

  function noSubmit(e) {
    e.preventDefault();
    setIsSetup("loading")
    setTimeout(() => {
      almost();
    }, 1500)
  }


  function noSubmit2(e) {
    e.preventDefault();
    setIsSetup("loading")
    setTimeout(() => {
      finish();
    }, 1500)
  }

  function goToWelcome(e) {
    e.preventDefault();
    setIsSetup("loading")
    setTimeout(() => {
      navigate("../welcome")
    }, 3000)
  }

  function signState() {
    if (isSetup == "personal") {
      return <form className="signup-form" onSubmit={noSubmit}>
        <p className="span">Enter your personal information</p>
        <div className="sign-input">
          <p>Full Name</p>
          <input type="text" />
        </div>
        <div className="sign-input">
          <p>Phone Number</p>
          <input type="number" placeholder="000000000" />
        </div>
        <div className="sign-input">
          <p>Date Of Birth</p>
          <div className="dob-select-group">
            <select value={day} onChange={e => setDay(e.target.value)} className="dob-select">
              <option value="">Day</option>
              {days.map(d => <option key={d} value={d}>{d}</option>)}
            </select>

            <select value={month} onChange={e => setMonth(e.target.value)} className="dob-select">
              <option value="">Month</option>
              {months.map((m, i) => <option key={m} value={i + 1}>{m}</option>)}
            </select>

            <select value={year} onChange={e => setYear(e.target.value)} className="dob-select">
              <option value="">Year</option>
              {years.map(y => <option key={y} value={y}>{y}</option>)}
            </select>
          </div>
        </div>
        <button>Get Started</button>
      </form>
    } else if (isSetup == "loading") {
      return <div className="loading">
        <span class="loader"></span>
      </div>
    } else if (isSetup == "finish") {
      return <form className="signup-form" onSubmit={goToWelcome}>
        <p className="span">Finish setting up your account</p>
        <div className="sign-input">
          <p>Email Address</p>
          <input type="text" />
        </div>
        <div className="sign-input">
          <p>Password</p>
          <input type="password" placeholder="" />
        </div>
        <div className="sign-input">
          <p>Confirm Password</p>
          <input type="password" />
        </div>
        <button>Finish Up</button>
      </form>
    }else if(isSetup == "almost") {
       return <form className="signup-form" onSubmit={noSubmit2}>
        <p className="span">Almost Done</p>
        <div className="sign-input">
          <p>Full Address</p>
          <input type="text" />
        </div>
        <div className="sign-input">
          <p>State</p>
          <input type="text" placeholder="" />
        </div>
        <div className="sign-input">
          <p>Zip Code</p>
          <input type="number" />
        </div>
        <button>Next</button>
      </form>
    }
  }

  function almost() {
    setIsSetup("almost")
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