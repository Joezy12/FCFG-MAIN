import '../styles/login.css'
import SecondNavbar from '../general/secondNavbar';

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
                </form>
            </div>
        </>
    )
}

export default LoginPage;