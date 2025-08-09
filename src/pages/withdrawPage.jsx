import { NavLink } from "react-router-dom";
import BottomNav from "../general/bottomNav";
import "../styles/withdrawPage.css"
import { useState } from "react";
import { auth,db } from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import LoadingScreen from "./loadingScreen";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


function WithdrawPage(prop) {

         function numberWithComma(x){
        x = x.toString();
        var pattern = /(-?\d+)(\d{3})/;
        while (pattern.test(x))
            x = x.replace(pattern, "$1,$2");
        return x;
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

            function goToSelectAccount(){
                if(prop.withAmount >= 1000) {
                    if(prop.withAmount <= userDetails.accBalance) {
                       navigate('../selectAccount')
                    }else {
                        toast.error("Insufficient Balance", {position: "top-center"})
                    }
                }else {
                    toast.error("Minimum withdrawal is $1,000", {position: "top-center"})
                }
            }

    return (
      <>
       {userDetails ?  <section className="with-container">

            <div className="with-head">
                <div></div>
                <h1>Withdraw money</h1>
               <NavLink to="../homedash"><h2><i className="bi-x"></i></h2></NavLink> 
            </div>

            <div className="with-amount">
                <input type="number" placeholder="$0" autoFocus onChange={prop.getWithAmount}/>
                <p>${numberWithComma(userDetails.accBalance)}.00 available</p>

            </div>
           <div className="with-next">
                {prop.withAmount > 0 ? <button className="active" onClick={goToSelectAccount}>Next</button>: <button>Next</button>}
            </div>

            <BottomNav homeState="home" />
        </section>: <LoadingScreen/>}
      </>
    )
}

export default WithdrawPage;