import BottomNav from "../general/bottomNav";
import "../styles/checkingDetails.css"
import "../styles/homeDash.css"
import { NavLink } from "react-router-dom";
import historyData from "../general/historyData";
import { auth,db } from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import LoadingScreen from "./loadingScreen";
import { useState, useEffect } from "react";

function CheckingDetails() {
    console.log(historyData)

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

        console.log(userDetails)

        const [history, setHistory] = useState(null)

    const showHistory1 = async (e) => {
        const showHistory =  await userDetails.history;
        setHistory(showHistory)
        console.log(showHistory)
    }

    console.log(history)


   

    useEffect(() => {
        showHistory1()
    }, [userDetails])

      const showHistory = history ? history.slice(1).map((each) => {
        return <div className="recent-line" >
            <div className="r-left">
                <p>{each.date}</p>
                <h3>{each.description.slice(0, 22)} ..</h3>
            </div>
            <div className="r-right">
                {each.type ? <p className="credit">+${each.amount}</p> : <p>${each.amount}</p>}
            </div>
        </div>
    }): ""

     
    

    return (
        <>
        {userDetails ?    <div>
             <div className="check-nav">
                <NavLink className="link" to="../homeDash"><i className="bi-arrow-left"></i></NavLink>
                <h1>FCFG Checking</h1>
                <i className="bi-gear"></i>
            </div>
            <div className="top-check">
                <section className="cover">
                    <div className="acc-balance2">
                        <div className="acc-balance-left">
                            <p>Account Balance</p>
                            <h1>${userDetails.accBalance}.00</h1>
                            <p>4.00% APY</p>
                            <h3>**** **** **** 0237</h3>
                        </div>
                        <div className="acc-balance-right">
                            <p>Debit Card</p>

                        </div>
                    </div>
                    <div className="add-money">
                        <NavLink className="with-btn" to="../transfer"> <button>Transfer</button></NavLink>
                         <NavLink className="with-btn" to="../withdraw"><button>Withdraw</button></NavLink>
                    </div>
                </section>
            </div>

            <div className="recent">
                <h1>Recent activity <i className="bi-arrow-right"></i></h1>
                <div className="recent-box">
                    {userDetails.history.length > 1 ? showHistory: <p className="no">No activities yet</p>}
                </div>
            </div>


            <div className="last-do">
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
                            <i className="bi-envelope-paper"></i>
                            <p>Scan or send<br /> a check</p>
                        </div>
                    </div>
                   
                </section>
            </div>
            <BottomNav homeState="home" />
           </div>: <LoadingScreen />}
        </>
    )
}


export default CheckingDetails;