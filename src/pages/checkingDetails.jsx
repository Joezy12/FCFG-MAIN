import BottomNav from "../general/bottomNav";
import "../styles/checkingDetails.css"
import "../styles/homeDash.css"
import { NavLink } from "react-router-dom";
import historyData from "../general/historyData";

function CheckingDetails() {
    console.log(historyData)

    const showHistory = historyData.map((each) => {
        return <div className="recent-line">
            <div className="r-left">
                <p>{each.date}</p>
                <h3>{each.topic.slice(0, 22)} ..</h3>
            </div>
            <div className="r-right">
                {each.type ? <p className="credit">+${each.amount}</p> : <p>${each.amount}</p>}
            </div>
        </div>
    })

    return (
        <>
            <div className="check-nav">
                <NavLink className="link" to="../homeDash"><i className="bi-arrow-left"></i></NavLink>
                <h1>FCFG Checking</h1>
                <i className="bi-gear"></i>
            </div>
            <div className="top-check">
                <section className="cover">
                    <div className="acc-balance2">
                        <div className="acc-balance-left">
                            <p>Account Balance</p>
                            <h1>$200.02</h1>
                            <p>4.00% APY</p>
                            <h3>**** **** **** 0237</h3>
                        </div>
                        <div className="acc-balance-right">
                            <p>Debit Card</p>

                        </div>
                    </div>
                    <div className="add-money">
                        <button>Add money</button>
                        <button>Withdraw</button>
                    </div>
                </section>
            </div>

            <div className="recent">
                <h1>Recent activity <i className="bi-arrow-right"></i></h1>
                <div className="recent-box">
                    {showHistory}
                </div>
            </div>


            <div className="last-do">
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
            </div>
            <BottomNav homeState="home" />
        </>
    )
}


export default CheckingDetails;