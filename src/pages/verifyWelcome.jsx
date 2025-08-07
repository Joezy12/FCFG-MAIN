import '../styles/verifyWelcome.css'
import verifyPic from "../../public/verify.svg"
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function VerifyWelcome() {

    const navigate = useNavigate();

    function goToVerifyPage() {
        navigate("../verifyPage")
    }
    return (
        <div className='verify3'>
            <div className='verify-nav'>
             <NavLink className="link" to="../homedash"><i className='bi-arrow-left'></i></NavLink>
            </div>
            <div className='verify-head'>
               <h1>Let's Verify Your Identity</h1>
               <p>We are requested to verify your identity before you can use FCFG premium services, Your information will be encrypted and stored securely</p>
            </div>
            <div className='verify-pic'>
                <img src={verifyPic} />
            </div>
            <button className='verify-button' onClick={goToVerifyPage}>Verify Identity</button>
        </div>
    )
}

export default VerifyWelcome;