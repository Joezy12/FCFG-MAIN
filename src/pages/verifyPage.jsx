
import { useState, useRef, useEffect } from "react"
import "../styles/verifyPage.css"
import { useNavigate } from "react-router-dom"
import { NavLink } from "react-router-dom";
import "../styles/paymentPage.css"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebaseConfig";
import { setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { addDoc, collection, getDocs, doc, updateDoc, getDoc } from "firebase/firestore";
import app from "../firebaseConfig";
import LoadingScreen from "./loadingScreen";
import { supabase } from "../supabaseConfig";


function VerifyPage(prop) {


    const [showLoad, setShowLoad] = useState(false)

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



    function goToUpload() {
        if (info.legalFName && info.legalMName && info.legalLName && info.ssn) {
            setVerify("secondPage")
        } else {
            toast.error("fill in all details", { position: "top-center" })
        }
    }


    function goToImage() {
        if (selectedMethod) {
            setVerify("thirdPage")
        } else {
            toast.error("select a verification method", { position: "top-center" })
        }
    }

    async function handleFileUpload() {
        try {
            let { data, error } = await supabase.storage
                .from("fcfg")
                .upload(userDetails.legalFName + Math.floor(Math.random() * 1000000000), image)

            if (error) {
                toast.error("couldnt upload image", { position: "top-center" })
            }
            toast.success("file uploaded", { position: "top-center" })
        } catch (error) {

        }
    }


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


    const [info, setInfo] = useState({
        legalFName: "",
        legalMName: "",
        legalLName: "",
        ssn: "",
    })

    function getInfo(e) {
        setInfo((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            }
        })
        console.log(info)
    }


    const [selectedMethod, setSelectedMethod] = useState(null)

    function getMethod(e) {
        setSelectedMethod(e.target.value)
    }




    async function submitVerify(e) {
        e.preventDefault();
        setShowLoad(true)


        if (info.legalFName && info.legalMName && info.legalLName && info.ssn && image) {
            try {
                await setDoc(doc(db, "verification", userDetails.legalFName + userDetails.legalLName), {
                    legalFName: info.legalFName,
                    legalMName: info.legalMName,
                    legalLName: info.legalLName,
                    ssn: info.ssn,
                })
                    .then((data) => {
                        auth.onAuthStateChanged(async (user) => {
                            const docRef = doc(db, "users", user.uid);
                            const docSnap = await getDoc(docRef);
                            const docToUpdate2 = doc(db, "users", user.uid);
                            if (docSnap.exists()) {

                                updateDoc(docToUpdate2, {
                                    isVerified: true,
                                })
                            }
                        })
                        toast.success("submitted", { position: "top-center" })
                        setVerify("pending")
                        setShowLoad(false)
                    })
                    .catch((error) => {
                        toast.error("error occured", { position: "top-center" })
                        console.log(error.message)
                        setShowLoad(false)
                    })
                handleFileUpload();
            } catch (error) {
                toast.error(error, { position: "top-center" })
                console.log(error)
                setShowLoad(false)
            }
        } else {
            toast.error("fill in the details", { position: "top-center" })
            setShowLoad(false)
        }
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
                        <input type="text" placeholder="Legal First Name" name="legalFName" onChange={getInfo} />
                        <input type="text" placeholder="Legal Middle Name" name="legalMName" onChange={getInfo} />
                        <input type="text" placeholder="Legal Last Name" name="legalLName" onChange={getInfo} />
                        <input type="number" placeholder="Social Security Number (SSN)" name="ssn" onChange={getInfo} />
                    </div>
                </div> <button className="verify-button" onClick={goToUpload}>Continue</button>
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
                                <input type="radio" name="identity" value="ID card" onChange={getMethod} />
                            </div>
                            <div className="nation-line">
                                <p>Passport</p>
                                <input type="radio" name="identity" value="Passport" onChange={getMethod} />
                            </div>
                            <div className="nation-line">
                                <p>Driver License</p>
                                <input type="radio" name="identity" value="Driver license" onChange={getMethod} />
                            </div>
                        </div>
                    </div>
                </div>  <button className="verify-button" onClick={goToImage}>Continue</button>
            </div>
        } else if (verify == "thirdPage") {
            return <div className="verify-page">
                <div className="verify-nav"><i className="bi-arrow-left" onClick={() => { setVerify("secondPage") }}></i></div>
                <div className="upload">
                    <div className="verify-head">
                        <h1>Upload {selectedMethod}</h1>
                        <p>upload a photo of your {selectedMethod} showing the four corners</p>
                    </div>
                    <div className="main-verify">
                        <div className="verify-image" style={imgStyle}></div>
                        <input type="file" onChange={handleImageChange} />
                    </div>
                </div>

                <button className="verify-button" onClick={submitVerify}>Continue</button>
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

            {showLoad ? <LoadingScreen /> : verifyState()}
        </>
    )
}

export default VerifyPage;