import { NavLink } from "react-router-dom";


function DashNav() {
    return (
        <nav className="dash-nav">
            <div className="dash-nav-top">
                <div className="dash-nav-top-img"></div>
                <h1>FCFG</h1>
            </div>
            <div className="nav-link">
              
                <NavLink className="link" to="../settings"><i className="bi-gear"></i></NavLink>
            </div>
        </nav>
    )
}

export default DashNav;