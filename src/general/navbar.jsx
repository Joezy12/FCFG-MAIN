import { useState } from "react";
import { NavLink } from "react-router-dom";



function Navbar() {

    const [dropState, setDropState] = useState(false)

    const dropStyle = {
        transform: dropState ? `translate(0px,0px)` : `translate(0px, -1000px)`
    }

    function drop() {
        setDropState(!dropState)
    }

    function scrollToTop() {
            window.scrollTo(0, 0);
    }

    return (
        <nav className="nav">
            <div className="navigation-bar">
                <div className="list" onClick={drop}>
                    {dropState ? <i className="bi-x"></i> : <i className="bi-list"></i>}
                </div>
                <div className="logo">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhyUY9_tUOfNnBe6MNWYJxIVCh0Pwixek_PaRXdMEn1g&s=10" alt="" />
                    <h1>FCFG</h1>
                </div>
                <NavLink className="link" to="login" onClick={scrollToTop}><div className="sign-button">
                    <i className="bi-person"></i> 
                    <p>Sign In</p>
                </div></NavLink>
            </div>
            <div className="sub-nav" style={dropStyle}>
                <div className="sub-top">
                   <NavLink className="link" to="card"><div className="sub-item">
                        <p>Credit Cards</p>
                        <i className="bi-chevron-right"></i>
                    </div></NavLink> 
                    <NavLink className="link" to="checking"><div className="sub-item">
                        <p>Checkings & Savings</p>
                        <i className="bi-chevron-right"></i>
                    </div></NavLink> 
                    <div className="sub-item">
                        <p>Auto</p>
                        <i className="bi-chevron-right"></i>
                    </div>
                    <div className="sub-item">
                        <p>Business</p>
                        <i className="bi-chevron-right"></i>
                    </div>
                    <div className="sub-item">
                        <p>Commercial</p>
                        <i className="bi-chevron-right"></i>
                    </div>
                    <div className="sub-item">
                        <p>Benefit & tools</p>
                        <i className="bi-chevron-right"></i>
                    </div>
                </div>
                <div className="sub-bottom">
                    <div className="sub-i">
                        <p><i className="bi-search"></i>Search</p>
                        <i className="bi-chevron-right"></i>
                    </div>
                    <div className="sub-i">
                        <p><i className="bi-question-circle"></i>Help Center</p>
                        <i className="bi-chevron-right"></i>
                    </div>
                    <div className="sub-i">
                        <p><i className="bi-geo"></i>Location</p>
                        <i className="bi-chevron-right"></i>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
