import { useState } from "react";
import "../styles/paypal.css"


function PayPal() {

    const [step, setStep] = useState("step1");

    const [selectedMethod, setSelectedMethod] = useState("");

    const [payAccount, setPayAccount] = useState("")

    const cryptoStyle = {
        background: selectedMethod == "crypto" ? `#008849`: `white`,
        color: selectedMethod == "crypto" ? `white`: `black`,
    }

     const giftStyle = {
        background: selectedMethod == "gift" ? `#008849`: `white`,
         color: selectedMethod == "gift" ? `white`: `black`,
    }

     const cardStyle = {
        background: selectedMethod == "card" ? `#008849`: `white`,
         color: selectedMethod == "card" ? `white`: `black`,
    }

    function showStep() {
        if (step == "step1") {
            return <div className="paypal-box">
                <img src="https://static.vecteezy.com/system/resources/previews/022/100/701/large_2x/paypal-logo-transparent-free-png.png" />

                <h1>Enter Your PayPal Account</h1>
                <input type="email" placeholder="user@email.com" onChange={(e) => setPayAccount(e.target.value)} />
                <button onClick={() => setStep("step2")}> Next <i className="bi-arrow-right"></i></button>
            </div>
        } else if (step == "step2") {
            return <div className="pay-send">
                <div className="pay-head">
                    <p>Transfer</p>
                    <h1 className="head-special">${100.00} <br /> </h1>

                    <p>To</p>
                    <h1>{payAccount}</h1>
                    <p>Withdrawal Fee:</p>
                    <h1 className="head-special2">$50.00</h1>
                </div>
                <div className="fee-method">
                    <h2> Pay Withdrawal Fee($50) with</h2>
                    <div className="method" style={cryptoStyle} onClick={()=> setSelectedMethod("crypto")}>
                        <img src="https://tse4.mm.bing.net/th/id/OIP.L37frQFm2G-k6wXWyTxI9AHaHa?r=0&w=1920&h=1920&rs=1&pid=ImgDetMain&o=7&rm=3"/>
                        <p>Pay With Crypto</p>
                    </div>
                    <div className="method" style={giftStyle} onClick={()=> setSelectedMethod("gift")} >
                        <img src="https://tse1.mm.bing.net/th/id/OIP.znjEvy_DOIJjKD4S2qOO7gHaEf?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
                        <p>Pay With Gift Card</p>
                    </div>
                    <div className="method" style={cardStyle} onClick={()=> setSelectedMethod("card")}>
                        <img src="https://download.logo.wine/logo/Mastercard/Mastercard-Logo.wine.png" alt="" />
                        <p>Pay With Debit Card</p>
                    </div>
                    <button>Next <i className="bi-arrow-right"></i></button>
                </div>
            </div>
        }
    }

    return (
        <section className="paypal">
            <div className="steps-div">
                {step == "step1" ? <div className="step-green"></div> : <div className="step"></div>}
                {step == "step2" ? <div className="step-green"></div> : <div className="step"></div>}
                <div className="step"></div>
            </div>

            {showStep()}
        </section>
    )
}

export default PayPal;