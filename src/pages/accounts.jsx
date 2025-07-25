
import BottomNav from "../general/bottomNav";
import DashNav from "../general/dashNav";
import "../styles/accounts.css"

function Accounts() {
    return (
        <>
            <DashNav />

            <section className="accounts">
                <div className="my-accounts">
                    <h1 className="acc-head">FCFG accounts</h1>
                    <div className="accounts-box">
                        <div className="accounts-line">
                            <div className="accounts-left">
                                <p><i className="bi-cash"></i></p>
                                <span>FCFG Checking</span>
                            </div>
                            <div className="accounts-right">
                                <h1>$200.02</h1>
                            </div>
                        </div>
                        <div className="accounts-line">
                            <div className="accounts-left">
                                <p><i className="bi-cash"></i></p>
                                <span>Goals</span>
                            </div>
                            <div className="accounts-right">
                                <h1>$0.00</h1>
                            </div>
                        </div>
                        <div className="accounts-line">
                            <div className="accounts-left">
                                <p><i className="bi-cash"></i></p>
                                <span>ExtraCash</span>
                            </div>
                            <div className="accounts-right">
                                <h1>$0.00</h1>
                            </div>
                        </div>
                        <button>Get up to $500 in ExtraCash</button>

                    </div>
                </div>



                 <div className="my-accounts">
                    <h1 className="acc-head">External checking account</h1>
                    <div className="accounts-box">
                        <div className="accounts-line">
                            <div className="accounts-left">
                                <p><i className="bi-cash"></i></p>
                                <span>Link an external bank <br /> account</span>
                            </div>
                            <div className="accounts-right">
                               
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <BottomNav homeState="accounts"/>
        </>
    )
}

export default Accounts;