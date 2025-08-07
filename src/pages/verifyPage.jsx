
import { useState } from "react"
import "../styles/verifyPage.css"
import { useNavigate } from "react-router-dom"

function VerifyPage() {

    const navigate = useNavigate();

    function goBack() {
        navigate("../verifyWelcome")
    }

    const [verify, setVerify] = useState("firstPage")



    const verifyState = () => {
        if (verify == "firstPage") {
            return <div className="verify-page">
                <div className="verify-nav"><i className="bi-arrow-left" onClick={goBack}></i></div>
                <div className="fill-box">
                    <div className="verify-head">
                        <h1>Fill Your Info</h1>
                        <p>Don't worry, your info is safe with us</p>
                    </div>
                    <div className="fill-inputs">
                        <input type="text" placeholder="Legal First Name" />
                        <input type="text" placeholder="Legal Middle Name" />
                        <input type="text" placeholder="Legal Last Name" />
                        <input type="text" placeholder="Social Security Number (SSN)" />
                    </div>
                </div> <button className="verify-button" onClick={()=> {setVerify("secondPage")}}>Continue</button>
            </div>
        } else if (verify == "secondPage") {
            return <div className="verify-page">
                <div className="verify-nav"><i className="bi-arrow-left" onClick={()=> {setVerify("firstPage")}}></i></div>
                <div className="address-proof">
                    <div className="verify-head">
                        <h1>Proof of Residence</h1>
                        <p>Prove that you live in your selected Region</p>
                    </div>
                </div>  <button className="verify-button">Continue</button>
            </div>
        }
    }
    return (
        <>
            {verifyState()}
        </>
    )
}

export default VerifyPage;