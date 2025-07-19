import { NavLink } from "react-router-dom";
import Navbar from "../general/navbar";
import '../styles/card.css';



function CardPage() {
    return (
        <>
            <Navbar />
            <div className="card-page">
                <div className="card-head">
                    <p>Credit Cards</p>
                </div>
                <div className="types">
                    <p>Types of credit card</p>
                </div>
                <div className="card-split">
                    <div>
                        <img src="https://ecm.capitalone.com/WCM/navigation/assets/icons/card/credit-building.svg" />
                    </div>
                    <div className="split-right">
                        <h1>Credit Building</h1>
                        <p>Credit level fair to rebuilding</p>
                    </div>
                </div>
                <div className="card-split">
                    <div>
                        <img src="https://ecm.capitalone.com/WCM/navigation/assets/icons/card/cash-back-rewards.svg" />
                    </div>
                    <div className="split-right">
                        <h1>Cash Back Rewards</h1>
                        <p>Credit Level: Excellent to Fair</p>
                    </div>
                </div>
                <div className="card-split">
                    <div>
                        <img src="https://ecm.capitalone.com/WCM/navigation/assets/icons/card/travel-rewards.svg" />
                    </div>
                    <div className="split-right">
                        <h1>Travel Rewards</h1>
                        <p>Credit Level: Excellent to good</p>
                    </div>
                </div>
                <div className="card-split">
                    <div>
                        <img src="https://ecm.capitalone.com/WCM/navigation/assets/icons/card/student-rewards.svg" />
                    </div>
                    <div className="split-right">
                        <h1>Student Rewards</h1>
                        <p>Credit Level: Fair</p>
                    </div>
                </div>
                <div className="card-split">
                    <div>
                        <img src="https://ecm.capitalone.com/WCM/navigation/assets/icons/card/business-rewards.svg" />
                    </div>
                    <div className="split-right">
                        <h1>Business Rewards</h1>
                        <p>Credit Level: Exellent to fair</p>
                    </div>
                </div>
                <NavLink className="link"><p className="over">Card card overview</p></NavLink>
                <div className="lists">
                    <p>Find a Credit Card</p>
                    <p>See if you're approved</p>
                    <p>compare All Cards</p>
                    <p>Redeem a Mail Offer</p>
                </div>
                <div className="lists lists2">
                    <p>Tips & Tools</p>
                    <p>Credit Card Benefits</p>
                    <p>FCFG Travels</p>
                    <p>FCFG Shopping</p>
                    <p>Track Credit with Creditwise</p>
                </div>
            </div>
        </>
    )
}

export default CardPage;