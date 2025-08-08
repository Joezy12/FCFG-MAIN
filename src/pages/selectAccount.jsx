
import "../styles/withdrawPage.css"
import { NavLink } from "react-router-dom";
import "../styles/selectAccount.css"
import { useState } from "react";
import { auth,db } from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import LoadingScreen from "./loadingScreen";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


function SelectAccount(prop) {

    const [dark, setDark] = useState(false)

    const accStyle = {
        transform: dark ? `translate(0px, 200px)` : `translate(0px, 1200px)`,
    }

    function changeDark() {
        setDark(!dark)
    }
     
           const navigate = useNavigate();
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




    return (
        <>
          {userDetails ? <section>

            <section className="select-acc" style={accStyle}>
                <div className="grey"></div>
                <div className="move-to">
                    <h1>Move to</h1>
                    <p onClick={changeDark}><i className="bi-x"></i></p>
                </div>
                <NavLink className="link" to="../paypal"><div className="move-box">
                    <h1>PayPal <img src="https://www.pngall.com/wp-content/uploads/5/PayPal-Logo-PNG-Free-Image.png" width="50" /></h1>
                    <div className="add-move">
                        <i className="bi-plus"></i>
                        <div>
                            <p>To Paypal Account </p>
                            <span>instant . 13% charge fee</span>
                        </div>
                    </div>
                </div></NavLink>
                <NavLink className="link" to="../cashapp"><div className="move-box">
                    <h1>CashApp <img src="https://i2.wp.com/1000marcas.net/wp-content/uploads/2021/06/Cash-App-emblem-2048x1152.png" width="50" /></h1>
                    <div className="add-move">
                        <i className="bi-plus"></i>
                        <div>
                            <p>To CashApp Account</p>
                            <span>instant . 13% charge fee</span>
                        </div>
                    </div>
                </div></NavLink>
                <NavLink className="link" to="../connectBank"><div className="move-box">
                    <h1>Bank account</h1>
                    <div className="add-move">
                        <i className="bi-plus"></i>
                        <div>
                            <p>External bank account</p>
                            <span>2-3 business days . No fee</span>
                        </div>
                    </div>
                </div></NavLink>
            </section>

            <section>
                {dark ? <div className="dark"></div> : ""}
                <div className="with-head">
                    <div></div>
                    <h1>Withdraw money</h1>
                    <NavLink to="../homedash"><h2><i className="bi-x"></i></h2></NavLink>
                </div>
                <div className="with-box">
                    <h1 className="selected-amount">${prop.withAmount}</h1>
                    <div className="with-from">
                        <h3>Withdraw from</h3>
                        <div className="with-line">
                            <div className="with-left">
                                <div className="with-pic"></div>
                                <div>
                                    <h4>FCFG Checking ...3098</h4>
                                    <p>${userDetails.accBalance}.00</p>
                                </div>
                            </div>
                            <i className="bi-chevron-down"></i>
                        </div>
                    </div>
                    <div className="with-from">
                        <h3>Move to</h3>
                        <div className="with-line" onClick={changeDark}>
                            <div className="with-left">

                                <div>
                                    <h4>Select an account</h4>

                                </div>
                            </div>
                            <i className="bi-chevron-down"></i>
                        </div>
                    </div>
                </div>


            </section>

        </section>: <LoadingScreen/>}
        </>
    )
}


export default SelectAccount;