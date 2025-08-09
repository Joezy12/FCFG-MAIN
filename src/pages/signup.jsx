import { NavLink } from "react-router-dom";
import SecondNavbar from "../general/secondNavbar";
import '../styles/signup.css'
import { useState } from "react";
import NewFooter from "../general/newFooter";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebaseConfig";
import { setDoc, doc } from "firebase/firestore";
import { toast } from 'react-toastify';
import LoadingScreen from "./loadingScreen";
import WelcomePage from "./welcomePage";

function SignUp() {

  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [showLoad, setShowLoad] = useState(false)


  function showP() {
    setShowPassword((prev) => {
      return !prev;
    })
  }



  function gatherFunc(event) {
    setSignInfo((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      }
    })

    console.log(signInfo)

  }


  const [isSetup, setIsSetup] = useState("personal");


  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const [signInfo, setSignInfo] = useState({
    legalFName: "",
    legalLName: "",
    phoneNumber: "",
    dob: {
      day: "",
      month: "",
      year: "",
    },
    fAddress: "",
    state: "",
    zipCode: "",
    email: "",
    password: "",
    cPassword: "",
    history: [
      {
        date: "",
        amount: "",
        type: "credit",
        description: "",
      }
    ]
  })

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) => currentYear - i);

  function noSubmit(e) {
    e.preventDefault();
    if (signInfo.legalFName && signInfo.legalLName && day && month && year && signInfo && signInfo.phoneNumber) {
      setIsSetup("loading")
      setTimeout(() => {
        almost();
      }, 1500)
    }else {
      toast.error("fill in all details", {position: "top-center"})
    }
  }


  function noSubmit2(e) {
    e.preventDefault();
   if(signInfo.fAddress && signInfo.state && signInfo.zipCode){
     setIsSetup("loading")
    setTimeout(() => {
      finish();
    }, 1500)
   }else {
      toast.error("fill in all details", {position: "top-center"})
   }
  }

  

  function signState() {
    if (isSetup == "personal") {
      return <form className="signup-form" onSubmit={noSubmit}>
        <p className="span">Enter your personal information</p>
        <div className="sign-input">
          <p>Legal First Name</p>
          <input type="text" name="legalFName" onChange={gatherFunc} />
        </div>
          <div className="sign-input">
          <p>Legal Last Name</p>
          <input type="text" name="legalLName" onChange={gatherFunc} />
        </div>
        <div className="sign-input">
          <p>Phone Number</p>
          <input type="number" placeholder="000000000" name="phoneNumber" onChange={gatherFunc} />
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
    } else if (isSetup == "finish") {
      return <form className="signup-form" onSubmit={handleRegister}>
        <p className="span">Finish setting up your account</p>
        <div className="sign-input">
          <p>Email Address</p>
          <input type="text" name="email" onChange={gatherFunc}/>
        </div>
        <div className="sign-input">
          <p>Password</p>
          <input type="password" placeholder="" name="password" onChange={gatherFunc}/>
        </div>
        <div className="sign-input">
          <p>Confirm Password</p>
          <input type="password" name="cPassword" onChange={gatherFunc}/>
        </div>
        <button>Finish Up</button>
      </form>
    } else if (isSetup == "almost") {
      return <form className="signup-form" onSubmit={noSubmit2}>
        <p className="span">Almost Done</p>
        <div className="sign-input">
          <p>Full Address</p>
          <input type="text" name="fAddress" onChange={gatherFunc} />
        </div>
        <div className="sign-input">
          <p>State</p>
          <input type="text" placeholder="" name="state" onChange={gatherFunc} />
        </div>
        <div className="sign-input">
          <p>Zip Code</p>
          <input type="number" name="zipCode" onChange={gatherFunc}/>
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





  
    const handleRegister = async (e) => {
        e.preventDefault();
        setShowLoad(true);
        if (signInfo.legalFName && signInfo.legalLName && signInfo.phoneNumber && signInfo.fAddress && signInfo.state && signInfo.state && signInfo.zipCode && signInfo.email && signInfo.password && signInfo.cPassword) {
            if (signInfo.password == signInfo.cPassword) {
                try {
                    await createUserWithEmailAndPassword(auth, signInfo.email, signInfo.password);
                    const user = auth.currentUser;
                    console.log(user)
                    if (user) {
                        await setDoc(doc(db, "users", user.uid), {
                            legalFName: signInfo.legalFName,
                            legalLName: signInfo.legalLName,
                            phoneNumber: signInfo.phoneNumber,
                            fAddress: signInfo.fAddress,
                            state: signInfo.state,
                            email: signInfo.email,
                            password: signInfo.password,
                            accBalance: Number(0),
                            cryptoAddress: "",
                            accountNumber: Math.floor(Math.random() * 10000000000),
                            routingNumber: Math.floor(Math.random() * 10000000000),
                            dateOfBirth: day + "/" + month + "/" + year,
                            history: signInfo.history,
                            isVerified: false,
                        })
                    }
                    toast.success("registered successfully", { position: 'top-center' })
                    setShowLoad(false)
                    setIsSetup("welcome")
                   
                } catch (error) {
                    if(error.message == "Firebase: Error (auth/network-request-failed).") {
                         toast.error("No internet connection", { position: 'top-center' })
                    setShowLoad(false)
                    }else{
                    toast.error(error.message, { position: 'top-center' })
                    setShowLoad(false)
                    }
                }
            } else {
                setShowLoad(false)
                toast.error("passwords do not match", { position: 'top-center' })

            }
        } else {
            setShowLoad(false)
            toast.error("fill in the complete details", { position: 'top-center' })

        }
    }






  return (
    <>
      {isSetup == "loading" ? <LoadingScreen /> : ""}
      {showLoad ? <LoadingScreen/> : ""}
     {isSetup == "welcome" ? <WelcomePage name={signInfo.legalFName} /> : <div>
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
     </div>}
    </>
  )
}

export default SignUp;