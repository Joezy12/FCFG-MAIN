import DashNav from "../general/dashNav";
import BottomNav from "../general/bottomNav";
import "../styles/homeDash.css"
import { NavLink } from "react-router-dom";


function HomeDashBoard() {

    return (
        <>
            <DashNav />
            <section className="welcome-back">
                <h1 className="w-back">Welcome back, Bianca!</h1>
                <section className="cover">
                    <div className="acc-balance">
                        <div className="acc-balance-left">
                            <p>FCFG Checking</p>
                            <h1>$200.02</h1>
                            <p>4.00% APY</p>
                        </div>
                        <div className="acc-balance-right">
                           <NavLink className="link" to="../checkingDetails"><p>Account details <i className="bi-chevron-right"></i></p></NavLink> 
                            <div className="teddy"></div>
                        </div>
                    </div>
                    <div className="add-money">
                        <button>Add money</button>
                       <NavLink className="with-btn" to="../withdraw"><button>Withdraw</button></NavLink> 
                    </div>
                    <div className="green">
                        <p>Discover What's next</p>
                        <h1>Check on your next Extra <i className="bi-arrow-right"></i> </h1>
                    </div>
                </section>

                <section className="verify">
                    <p>Verify your account</p>
                    <h1>Verify your FCFG account and unlock premium feature</h1>
                </section>

                <section className="do-more">
                    <h1>Do more with FCFG Checking</h1>
                    <div className="do-more-container">
                        <div className="do-more-box">
                            <i className="bi-cash"></i>
                            <p>Direct <br /> Deposit</p>
                        </div>
                        <div className="do-more-box">
                            <i className="bi-arrow-left-right"></i>
                            <p>Recurring transfer</p>
                        </div>
                        <div className="do-more-box">
                            <i className="bi-envelope-paper"></i>
                            <p>Scan or send<br /> a check</p>
                        </div>
                    </div>
                    <div className="do-more-container">
                        <div className="do-more-box">
                            <i className="bi-cash-coin"></i>
                            <p>Deposit <br /> Cash</p>
                        </div>
                        <div className="do-more-box">
                            <i className="bi-printer-fill"></i>
                            <p>Withdraw <br /> cash</p>
                        </div>
                        <div className="do-more-box">
                            <i className="bi-envelope-paper"></i>
                            <p>Pay <br /> bills</p>
                        </div>
                    </div>
                </section>

                <section className="eligible">
                    <div className="eligible-box e-box1">
                        <div className="e-left">
                            <h1>Link Your Bank Account</h1>
                            <p>Connecting the account you get paid with, for seemless top ups and Withdrawal</p>
                        </div>
                        <div className="e-right"></div>
                    </div>
                    <NavLink className="link" to="../debitCard"><div className="eligible-box e-box2">
                        <div className="e-left">
                            <h1>Add Your Debit/Credit Card </h1>
                            <p>Top Up, Withdraw and shop online using your Debit Card while Managing your finance with FCFG</p>
                        </div>
                        <div className="e-right"></div>
                    </div></NavLink>
                     <div className="eligible-box e-box3">
                        <div className="e-left">
                            <h1>Set up Direct <br /> Deposit </h1>
                            <p>Get paid up to 2 days early</p>
                        </div>
                        <div className="e-right"></div>
                    </div>

                </section>
            </section>
            <BottomNav homeState="home" />
        </>
    )
}


export default HomeDashBoard;