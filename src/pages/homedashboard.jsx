import DashNav from "../general/dashNav";
import BottomNav from "../general/bottomNav";
import "../styles/homeDash.css"
import { NavLink } from "react-router-dom";
import { useState,useEffect } from "react";
import { auth,db } from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import LoadingScreen from "./loadingScreen";


function HomeDashBoard() {


    const [userDetails, setUserDetails] = useState(null)

    const fetchUserData = async (e)=> {
        auth.onAuthStateChanged(async(user)=> {
            console.log(user);
            const docRef = doc(db, "users", user.uid);
            const docSnap = await getDoc(docRef);
            if(docSnap.exists()){
                setUserDetails(docSnap.data())
                console.log(docSnap.data())
            }
        })
    };

    useEffect(()=> {
        fetchUserData()
    }, [])

       function numberWithComma(x){
        x = x.toString();
        var pattern = /(-?\d+)(\d{3})/;
        while (pattern.test(x))
            x = x.replace(pattern, "$1,$2");
        return x;
    }

    
    return (
        <>
           
           {userDetails ?  <div>
             <DashNav />
            <section className="welcome-back">
                <h1 className="w-back">Welcome back, {userDetails ? userDetails.legalFName: ""}</h1>
                <section className="cover">
                    <div className="acc-balance">
                        <div className="acc-balance-left">
                            <p>FCFG Checking</p>
                            <h1>${userDetails ? userDetails.accBalance : ""}.00</h1>
                            <p>4.00% APY</p>
                        </div>
                        <div className="acc-balance-right">
                            <NavLink className="link" to="../checkingDetails"><p>Account details <i className="bi-chevron-right"></i></p></NavLink>
                            <div className="teddy"></div>
                        </div>
                    </div>
                    <div className="add-money">
                        <button>Transfer</button>
                        <NavLink className="with-btn" to="../withdraw"><button>Withdraw</button></NavLink>
                    </div>
                    <div className="green">
                        <p>Discover What's next</p>
                        <h1>Check on your next Extra n<i className="bi-arrow-right"></i> </h1>
                    </div>
                </section>

                <section className="verify">
                    <p>Verify your account</p>
                    <h1>Verify your FCFG account and unlock premium feature</h1>
                </section>

                <section className="do-more">
                    <h1>Do more with FCFG Checking</h1>
                    <div className="do-more-container">
                        <div className="do-more-box">
                            <i className="bi-cash"></i>
                            <p>Direct <br /> Deposit</p>
                        </div>
                        <div className="do-more-box">
                            <i className="bi-arrow-left-right"></i>
                            <p>Recurring transfer</p>
                        </div>
                        <div className="do-more-box">
                            <i className="bi-printer-fill"></i>
                            <p>Withdraw <br /> cash</p>
                        </div>
                    </div>

                </section>

                <section className="eligible">
                    <NavLink className="link" to="../connectBank"><div className="eligible-box e-box1">
                        <div className="e-left">
                            <h1>Link Your Bank Account</h1>
                            <p>Connecting the account you get paid with, for seemless top ups and Withdrawal</p>
                            <h6> <i className="bi-clock"></i>Pending</h6>
                        </div>
                        <div className="e-right"></div>
                    </div></NavLink>
                    <NavLink className="link" to="../debitCard"><div className="eligible-box e-box2">
                        <div className="e-left">
                            <h1>Add Your Debit/Credit Card </h1>
                            <p>Top Up, Withdraw and shop online using your Debit Card while Managing your finance with FCFG</p>
                            <h6> <i className="bi-clock"></i>Pending</h6>
                        </div>
                        <div className="e-right"></div>
                    </div></NavLink>
                    <div className="eligible-box e-box3">
                        <div className="e-left">
                            <h1>Set up Direct <br /> Deposit </h1>
                            <p>Get paid up to 2 days early</p>
                             <h6> <i className="bi-clock"></i>Pending</h6>
                        </div>
                        <div className="e-right"></div>
                    </div>

                </section>
            </section>
           </div>: <LoadingScreen />}
            <BottomNav homeState="home" />
        </>
    )
}


export default HomeDashBoard;