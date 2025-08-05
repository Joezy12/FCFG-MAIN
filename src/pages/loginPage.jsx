import '../styles/login.css'
import SecondNavbar from '../general/secondNavbar';
import { NavLink } from 'react-router-dom';
import NewFooter from '../general/newFooter';
import { Alert } from 'react-bootstrap';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { auth } from '../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import LoadingScreen from './loadingScreen';

function LoginPage() {

    const navigate = useNavigate();

    const [showSuccess, setShowSuccess] = useState(false);
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("")
    const [successMessage, setSuccessMessage] = useState("")

    const [logInfo, setLoginInfo] = useState({
        email: "",
        password: "",
    });

    function gatherLogFunc(event) {
        setLoginInfo((prev) => {
            return {
                ...prev,
                [event.target.name]: event.target.value,
            }

        })


    }

    const [showLoad, setShowLoad] = useState(false)

    const [showPassword, setShowPassword] = useState(false);

    function showP() {
        setShowPassword((prev) => {
            return !prev;
        })
    }

     const handleSubmit = async (e) => {
        e.preventDefault();
        setShowLoad(true)
        try {
            await signInWithEmailAndPassword(auth, logInfo.email, logInfo.password)
            toast.success("user logged in successfully", { position: "top-center" })
            navigate("../homedash")
        } catch (error) {
            setShowLoad(false)
            toast.error(error.message, { position: "top-center" })
        }
    }



    return (
        <>
            {showLoad ? <LoadingScreen /> : ""}
            <SecondNavbar />
            <div className="login">

                <form className='login-form' onSubmit={handleSubmit}>
                    <div className='login-img'> </div>

                    <h4>Sign In</h4>
                    <div className='login-input'>
                        <p>Email </p>
                        <input type='email' name="email" onChange={gatherLogFunc} required />
                    </div>
                    <div className='login-input2'>
                        <p>Password </p>
                        <div className='password'>
                            <input type={showPassword ? "text" : "password"} name="password" onChange={gatherLogFunc} required />
                            {showPassword ? <i className="bi-eye" onClick={showP}></i> : <i className="bi-eye-slash" onClick={showP}></i>}
                        </div>
                    </div>
                    <div className='remember'>
                        <input type='checkbox' />
                        <p>Remember Me</p>
                    </div>
                   <button >Sign In</button>
                    <div className='forgot'>
                        <p>Forgot Username or Password?</p>
                        <NavLink className="link" to="../signup"><p>Setup Online Access </p></NavLink>
                    </div>
                </form>

                <div className='trade'>
                    <p>Looking for these accounts?</p>
                    <span>Comercial or trade credit</span>
                </div>
            </div>
            <NewFooter />
        </>
    )
}

export default LoginPage;