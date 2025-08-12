import "../styles/settings.css"
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { useState,useEffect } from "react";
import { auth,db } from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import LoadingScreen from "./loadingScreen";
import { useNavigate } from "react-router-dom";




function Settings() {

  const navigate = useNavigate();

   const [userDetails, setUserDetails] = useState(null)

    const fetchUserData = async (e)=> {
        auth.onAuthStateChanged(async(user)=> {
            console.log(user);
            const docRef = doc(db, "users", user.uid);
            const docSnap = await getDoc(docRef);
            if(docSnap.exists()){
                setUserDetails({...docSnap.data(), id: user.uid})
                console.log(docSnap.data())
            }
        })
    };

    useEffect(()=> {
        fetchUserData()
    }, [])

  function editP(){
    toast.error("can not edit profile, account not verified", {position: "top-center"})
  }

  function goToVerify(){
     navigate("../verifyWelcome")
  }


    return (
       <>
       {userDetails ?  <div className="settings">
            <div className="settings-nav">
                <NavLink className="link" to="../homedash"><i className="bi-arrow-left"></i></NavLink>
                <h1>Settings</h1>
                <div></div>
            </div>
            <div className="profile-box">
                <div className="profile-pic"></div>
                <h1>{userDetails.legalFName} {userDetails.legalLName}</h1>
                <p>{userDetails.id}</p>
                {userDetails.isVerified ? <button className="pend">Verification pending</button>: <button onClick={goToVerify}>Verify Account</button>}
            </div>
            <div className="edit-box">
              <h1>Accounts</h1>
              <div className="edit">
               <NavLink className="link" to="../checkingDetails"><p><i className="bi-person"></i> FCFG Checking</p></NavLink> 
                <p><i className="bi-geo"></i> Goals</p>
              </div>
            </div>

            <div className="edit-box">
              <h1>Info</h1>
              <div className="edit">
              <NavLink className="link" to="../linkedBank"><p><i className="bi-person"></i> Linked banks and card</p></NavLink>  
                <p onClick={editP}><i className="bi-geo"></i> Edit Profile</p>
                <NavLink className="link" to="../changePassword"><p><i className="bi-key"></i> Change Password</p></NavLink>
              </div>
            </div>

            <button className="log-out">Log Out</button>
        </div>: <LoadingScreen/>}
       </>
    )
}


export default Settings;