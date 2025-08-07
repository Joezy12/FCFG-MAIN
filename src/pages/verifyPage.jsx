
import { useState } from "react"
import "../styles/verifyPage.css"
import { useNavigate } from "react-router-dom"
import { NavLink } from "react-router-dom";
import "../styles/paymentPage.css"

function VerifyPage() {

    const navigate = useNavigate();

    function goBack() {
        navigate("../verifyWelcome")
    }

    const [verify, setVerify] = useState("firstPage")

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
        backgroundImage: preview ? `url(${preview})` : `url("https://cdn-icons-png.flaticon.com/512/8485/8485191.png")`,
        backgroundSize: `cover`,
        backgroundPosition: `center`,

    }



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
                </div> <button className="verify-button" onClick={() => { setVerify("secondPage") }}>Continue</button>
            </div>
        } else if (verify == "secondPage") {
            return <div className="verify-page">
                <div className="verify-nav"><i className="bi-arrow-left" onClick={() => { setVerify("firstPage") }}></i></div>
                <div className="address-proof">
                    <div className="verify-head">
                        <h1>Proof of Residence</h1>
                        <p>Prove that you live in your selected Region</p>
                    </div>
                    <div className="nationality">
                        <div className="nation-box">
                            <h1>Region</h1>
                            <div className="nation-line">
                                <p>United States</p>

                            </div>
                        </div>
                        <div className="nation-box">
                            <h1>Choose Verification Method</h1>
                            <div className="nation-line">
                                <p>National Identity Card</p>
                                <input type="radio" name="identity" value="ID card" />
                            </div>
                            <div className="nation-line">
                                <p>Passport</p>
                                <input type="radio" name="identity" value="Passport" />
                            </div>
                            <div className="nation-line">
                                <p>Driver License</p>
                                <input type="radio" name="identity" value="Driver license" />
                            </div>
                        </div>
                    </div>
                </div>  <button className="verify-button" onClick={() => { setVerify("thirdPage") }}>Continue</button>
            </div>
        } else if (verify == "thirdPage") {
            return <div className="verify-page">
                <div className="verify-nav"><i className="bi-arrow-left" onClick={() => { setVerify("secondPage") }}></i></div>
                <div className="upload">
                    <div className="verify-head">
                        <h1>Upload ID card</h1>
                        <p>upload a photo of your ID card showing the four corners</p>
                    </div>
                    <div className="main-verify">
                        <div className="verify-image" style={imgStyle}></div>
                        <input type="file" onChange={handleImageChange} />
                    </div>
                </div>

                <button className="verify-button" onClick={() => { setVerify("pending") }}>Continue</button>
            </div>
        } else if (verify == "pending") {
            return <div className="payment-page">
                <div className="payment-box">
                    <img src="https://th.bing.com/th/id/R.e9c6194cf62fd670ebd7f8113698ba56?rik=PbPXqK7AZqEP%2fg&riu=http%3a%2f%2fgetdrawings.com%2ffree-icon%2fbullet-icon-png-58.png&ehk=yjn7KEwvSVlojfNFxIXm13Yu5WAe2H%2feI65mD7IK91U%3d&risl=&pid=ImgRaw&r=0" alt="" />
                    <h1>Verification Pending</h1>
                    <p>Our staffs are currently reviewing your info and will notify you if verification successful
                    </p>
                    <NavLink className="link" to="../homeDash"><button><i className="bi-arrow-left"></i>Back to home</button></NavLink>
                </div>
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