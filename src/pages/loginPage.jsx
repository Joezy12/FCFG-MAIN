import '../styles/login.css'
import SecondNavbar from '../general/secondNavbar';
import { NavLink } from 'react-router-dom';

function LoginPage() {
    return (
        <>
            <SecondNavbar />
            <div className="login">
                <form className='login-form'>
                    <div className='login-img'> </div>
                    <h4>Sign In</h4>
                    <div className='login-input'>
                        <p>Email </p>
                        <input type='email' required />
                    </div>
                    <div className='login-input2'>
                        <p>Password </p>
                        <div className='password'>
                            <input type='password' required />
                            <i className='bi-eye'></i>
                        </div>
                    </div>
                    <div className='remember'>
                      <input type='checkbox'/>
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
        </>
    )
}

export default LoginPage;