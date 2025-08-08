import BottomNav from "../general/bottomNav";
import historyData from "../general/historyData";
import { NavLink } from "react-router-dom";
import { auth, db } from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import LoadingScreen from "./loadingScreen";
import { useState, useEffect } from "react";

function History() {


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
            {userDetails ? <div>
                <div className="check-nav">
                    <NavLink className="link" to="../homeDash"><i className="bi-arrow-left"></i></NavLink>
                    <h1>History</h1>
                    <i className="bi-gear"></i>
                </div>
                <div className="recent">
                    <h1>Recent activity </h1>
                    <div className="recent-box">
                        {userDetails.history.length > 1 ? showHistory : <p className="no">No activities yet</p>}
                    </div>
                </div>
                <BottomNav />
            </div> : <LoadingScreen />}
        </>
    )
}

export default History;