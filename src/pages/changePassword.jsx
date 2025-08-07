import "../styles/changePassword.css"
import { NavLink } from "react-router-dom";

function ChangePassword() {
    return (
        <div className="cp">
            <div className="cp-nav">
              <NavLink className="link" to="../settings"><i className="bi-arrow-left"></i></NavLink>  
                <h1>Change Password</h1>
                <div></div>
            </div>
            <div className="cp-box">
                <div className="cp-inputs">
                 <p>Enter Current Password</p>
                 <input type="text" />
                </div>

                <div className="cp-inputs">
                 <p>New Password</p>
                 <input type="text" />
                </div>

                <div className="cp-inputs">
                 <p>Confirm New Password</p>
                 <input type="text" />
                </div>
                <button>Save Changes</button>
            </div>
        </div>
    )
}

export default ChangePassword;