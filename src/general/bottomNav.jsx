


function BottomNav() {

    return (
      <nav className="bottom-nav">
        <div className="bottom-nav-link">
            <i className="bi-house-fill"></i>
            <p>Home</p>
        </div>
         <div className="bottom-nav-link">
            <i className="bi-cash"></i>
            <p>Account</p>
        </div>
         <div className="bottom-nav-link">
            <i className="bi-cash-stack"></i>
            <p>ExtraCash</p>
        </div>
         <div className="bottom-nav-link">
            <i className="bi-person-circle"></i>
            <p>Profile</p>
        </div>
      </nav>
    )
}

export default BottomNav;