import { useState } from "react"
import "../styles/transfer.css"
import { NavLink } from "react-router-dom"
import "../styles/withdrawPage.css"
import "../styles/paymentPage.css"

import { useEffect } from "react";
import { auth, db } from "../firebaseConfig";
import { addDoc, collection, getDocs, doc, updateDoc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import LoadingScreen from "./loadingScreen";
import { useNavigate } from "react-router-dom";



function Transfer() {

   
   
   const [showLoad, setShowLoad] = useState(false)


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

   function numberWithComma(x) {
      x = x.toString();
      var pattern = /(-?\d+)(\d{3})/;
      while (pattern.test(x))
         x = x.replace(pattern, "$1,$2");
      return x;
   }

   const [client, setClient] = useState(null)
    const collectionRef = collection(db, "users")





   async function getData(event) {
      if (walletAddress.length > 1) {
         setShowLoad(true)
         getDocs(collectionRef)
            .then((response) => {
               let users = response.docs.map((item) => {
                  return { ...item.data(), id: item.id }
               })
               
               let mainUser = users.filter((user) => {
                  return user.id == walletAddress
               })
               setClient(mainUser[0])
               if(!mainUser){
                  toast.error("no client found", {position: "top-center"})
                  setClient(null)
               }
               
               setShowLoad(false)  
            })
            .catch((error) => {
               console.log(error.message)
               setShowLoad(false)

            })
      } else {
         toast.error("please provide recepient wallet address", { position: "top-center" })
      }
   }








   async function sendMoney(event) {
    event.preventDefault();
    setShowLoad(true)
    if (client) {
      if (walletAddress && description) {
        if (userDetails.accBalance >= withAmount) {
          const docToUpdate = doc(db, "users", client.id);
          updateDoc(docToUpdate, {
            accBalance: Number(client.accBalance) + Number(withAmount),
            cryptoAddress: description,
            history: [
              ...client.history,
              {
                type: "credit",
                description: `from ${userDetails.legalFName} ${userDetails.legalLName}`,
                amount: withAmount,
                date: Date().slice(0,16),
              }
            ]
          })
            .then(() => {
              auth.onAuthStateChanged(async (user) => {
                const docRef = doc(db, "users", user.uid);
                const docSnap = await getDoc(docRef);
                const docToUpdate2 = doc(db, "users", user.uid);
                if (docSnap.exists()) {
                  if (docSnap.data().accBalance >= withAmount) {
                    updateDoc(docToUpdate2, {
                      accBalance: Number(docSnap.data().accBalance) - Number(withAmount),

                    })
                  } else {
                    toast.error("insufficient Balance", { position: "top-center" })
                    setShowLoad(false)
                  }
                }
              })
              toast.success("sent Successfully", { position: "top-center" })
              setShowLoad(false)
                setTransfer("sent")
              
            })
            .catch((error) => {
              toast.error(error.message, { position: "top-center" })
              setShowLoad(false)
            })
        } else {
          toast.error("insufficient balance", { position: "top-center" })
          setShowLoad(false)
        }
      } else {
        toast.error("please fill in complete details", { position: "top-center" })
        setShowLoad(false)
      }
    } else {
      toast.error("no client found", { position: "top-center" })
      setShowLoad(false)
    }
  }











   const [transfer, setTransfer] = useState("first")

   const [withAmount, setWithAmount] = useState(0);

   const [isClient, setIsClient] = useState(false)

   const [walletAddress, setWalletAddress] = useState("")
   const [description, setDescription] = useState("")

   function getAmount(event) {
      setWithAmount(event.target.value)
   }

   function goToAmount(){
      if(description) {
         setTransfer("amount")
      }else {
         toast.error("provide description", {position: "top-center"})
      }
   }

   const transferState = () => {
      if (transfer == "first") {
         return <div className="transfer-page">
            <div className="verify-nav transfer-nav">
               <NavLink to="../homeDash"><i className="bi-arrow-left"></i></NavLink>
               <h1>Transfer</h1>
               <div></div>
            </div>

            <div className="transfer-balance">
               <p>Current Balance</p>
               <span>+$0.00 today</span>
               <h1>${numberWithComma(userDetails.accBalance)}.00</h1>
            </div>


            <div className="recipient">
               <p>Enter Recipient Address</p>
               <input type="text" placeholder="address" onChange={(e) => setWalletAddress(e.target.value)} />
               <input type="text" placeholder="what is this for" onChange={(e) => setDescription(e.target.value)} />
               <button onClick={getData}>Confirm Recipient</button>
            </div>
            {showLoad ? <div className="small-load"><span className="loader2"></span></div> : ''}
            {client ? <div>
               <div className="confirm-recipient">
                  <h2>{client.legalFName} {client.legalLName}</h2>
                  <p>Acc Balance: {client.accBalance}</p>
               </div>
               <button className="next-but" onClick={goToAmount}>Next</button>
            </div> : ""}
         </div>
      } else if (transfer == "amount") {
         return <div>
            {showLoad ? <LoadingScreen/> : <section className="with-container">

            <div className="with-head">
               <div></div>
               <h1>Enter Amount</h1>
               <h2 onClick={() => setTransfer("first")}><i className="bi-x"></i></h2>
            </div>

            <div className="with-amount">
               <input type="number" placeholder="$0" autoFocus onChange={getAmount} />
               <p>${numberWithComma(userDetails.accBalance)}.00 available</p>

            </div>
            <div className="with-next">
               {withAmount > 0 ? <button className="active" onClick={sendMoney}>Send</button> : <button>Next</button>}
            </div>


         </section>}
         </div>
      } else if (transfer == "sent") {
         return <div className="payment-page">
            <div className="payment-box">
               <img src="https://img.freepik.com/premium-vector/green-checkmark-without-circle-icon_1076610-18511.jpg" alt="" />
               <h1>Sent Successsfully</h1>
               <p>You have successfully sent money to recipient
               </p>
               <NavLink className="link" to="../homeDash"><button><i className="bi-arrow-left"></i>Back to home</button></NavLink>
            </div>
         </div>
      }
   }

   return <>
      {userDetails ? <div className="transfer">
         {transferState()}
      </div> : <LoadingScreen />}
   </>
}

export default Transfer;