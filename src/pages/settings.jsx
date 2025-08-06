import "../styles/settings.css"
import { NavLink } from "react-router-dom";


function Settings() {

    return (
        <div className="settings">
            <div className="settings-nav">
                <NavLink className="link" to="../homedash"><i className="bi-arrow-left"></i></NavLink>
                <h1>Settings</h1>
                <div></div>
            </div>
            <div className="profile-box">
                <div className="profile-pic"></div>
                <h1>Bianca Delon</h1>
                <p>Xddjj7271qweyePisbsbsRyns</p>
                <button>Verify Account</button>
            </div>
            <div className="edit-box">
              <h1>Accounts</h1>
              <div className="edit">
                <p><i className="bi-person"></i> FCFG Checking</p>
                <p><i className="bi-geo"></i> Goals</p>
              </div>
            </div>

            <div className="edit-box">
              <h1>Info</h1>
              <div className="edit">
                <p><i className="bi-person"></i> Linked banks and card</p>
                <p><i className="bi-geo"></i> Edit Profile</p>
                <p><i className="bi-key"></i> Change Password</p>
              </div>
            </div>

            <button className="log-out">Log Out</button>
        </div>
    )
}


export default Settings;