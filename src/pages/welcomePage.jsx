import  '../styles/welcome.css'
import { NavLink } from 'react-router-dom';


function WelcomePage(props) {
    return(
      <>
        <div className="welcome">
          <div className='welcome-banner'>
            
          </div>
          <div className='welcome-text'>
            <h1>Hello {props.name}</h1>
            <p>Welcome to FCFG Banking, Bank <br /> with ease</p>
           <NavLink to="../login"><button>Log In</button></NavLink> 
          </div>
        </div> 
        </>
    )
}


export default WelcomePage;