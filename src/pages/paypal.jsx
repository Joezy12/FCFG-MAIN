import { useState } from "react";
import "../styles/paypal.css"


function PayPal() {

    const [step, setStep] = useState("step1");

    const [payAccount, setPayAccount] = useState("")

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
                    <h1>$50.00</h1>
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