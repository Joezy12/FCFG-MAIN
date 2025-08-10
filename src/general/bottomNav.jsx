import { NavLink } from "react-router-dom";



function BottomNav(props) {

  const homeState = props.homeState;

  const homeStyle = {
    color: "#008849",
  }

    return (
      <nav className="bottom-nav">
       <NavLink className="link" to="../homedash"><div className="bottom-nav-link" style={homeState == "home" ? homeStyle : {}}>
            <i className="bi-house-fill"></i>
            <p>Home</p>
        </div></NavLink> 
         <NavLink className="link" to="../accounts"><div className="bottom-nav-link" style={homeState == "accounts" ? homeStyle : {}}>
            <i className="bi-cash"></i>
            <p>Account</p>
        </div></NavLink>
        <NavLink className="link" to="../history"><div className="bottom-nav-link" style={homeState == "history" ? homeStyle : {}}>
            <i className="bi-clock"></i>
            <p>History</p>
        </div></NavLink> 
         <div className="bottom-nav-link">
            <i className="bi-person-circle"></i>
            <p>Profile</p>
        </div>
      </nav>
    )
}

export default BottomNav;