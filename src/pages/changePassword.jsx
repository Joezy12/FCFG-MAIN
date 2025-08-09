import "../styles/changePassword.css"
import { NavLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebaseConfig";
import { setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { addDoc, collection, getDocs, doc, updateDoc, getDoc } from "firebase/firestore";
import app from "../firebaseConfig";
import LoadingScreen from "./loadingScreen";



function ChangePassword() {

    const [showLoad, setShowLoad] = useState(false)

    const navigate = useNavigate();

    const [currentPassword, setCurrentPassword] = useState("")
    const [newPassord, setNewPassord] = useState("")
    const [cPassword, setCPassword] = useState("")


    
    const [userDetails, setUserDetails] = useState(null)
    const fetchUserData = async (e) => {
        auth.onAuthStateChanged(async (user) => {
            console.log(user);
            const docRef = doc(db, "users", user.uid);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setUserDetails(docSnap.data())
                console.log(docSnap.data())
            }
        })
    };

    useEffect(() => {
        fetchUserData()
    }, [])


   async function handleChange() {
      if(currentPassword && newPassord && cPassword) {
        if(userDetails.password == currentPassword) {
           if(newPassord != currentPassword){
            if(newPassord == cPassword) {
              try {
                 auth.onAuthStateChanged(async (user) => {
                            const docRef = doc(db, "users", user.uid);
                            const docSnap = await getDoc(docRef);
                            const docToUpdate2 = doc(db, "users", user.uid);
                            if (docSnap.exists()) {

                                updateDoc(docToUpdate2, {
                                    password: newPassord,
                                })
                                .then(()=> {
                                    toast.success("password changed")
                                    navigate("../settings")
                                })
                                .catch((error)=> {
                                   toast.error("unable to change password at the moment", {position: "top-center"})
                                })
                            }
                        })

              } catch (error) {
                 toast.error("unable to change password at the moment", {position: "top-center"})
              }
           }else{
            toast.error("passwords do not match", {position: "top-center"})
           }
           }else{
            toast.error("new password can not be old password", {position: "top-center"})
           }
        }else{
            toast.error("incorrect current password", {position: "top-center"})
        }
    }else {
        toast.error("fill in all fields", {position: "top-center"})
    }
   }

    return (
       <>
      {showLoad ? <LoadingScreen/>:  <div>
         {userDetails ?  <div className="cp">
            <div className="cp-nav">
              <NavLink className="link" to="../settings"><i className="bi-arrow-left"></i></NavLink>  
                <h1>Change Password</h1>
                <div></div>
            </div>
            <div className="cp-box">
                <div className="cp-inputs">
                 <p>Enter Current Password</p>
                 <input type="text" onChange={(e)=> setCurrentPassword(e.target.value)} />
                </div>

                <div className="cp-inputs">
                 <p>New Password</p>
                 <input type="text"  onChange={(e)=> setNewPassord(e.target.value)}/>
                </div>

                <div className="cp-inputs">
                 <p>Confirm New Password</p>
                 <input type="text"  onChange={(e)=> setCPassword(e.target.value)}/>
                </div>
                <button onClick={handleChange}>Save Changes</button>
            </div>
        </div>: <LoadingScreen/>}
       </div>}
       </>
    )
}

export default ChangePassword;