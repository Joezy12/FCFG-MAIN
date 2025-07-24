
import "../styles/withdrawPage.css"
import { NavLink } from "react-router-dom";
import "../styles/selectAccount.css"
import { useState } from "react";

function SelectAccount() {

    const [dark, setDark] = useState(false)

    const accStyle = {
        transform: dark ? `translate(0px, 400px)` : `translate(0px, 1200px)`,
    }

    function changeDark() {
        setDark(!dark)
    }

    return (
        <section>

            <section className="select-acc" style={accStyle}>
                <div className="grey"></div>
                <div className="move-to">
                    <h1>Move to</h1>
                    <p onClick={changeDark}><i className="bi-x"></i></p>
                </div>
                <div className="move-box">
                    <h1>PayPal <img src="https://www.pngall.com/wp-content/uploads/5/PayPal-Logo-PNG-Free-Image.png"  width="50" /></h1>
                    <div className="add-move">
                        <i className="bi-plus"></i>
                        <div>
                            <p>To Paypal Account </p>
                            <span>instant . 13% charge fee</span>
                        </div>
                    </div>
                </div>
                  <div className="move-box">
                    <h1>CashApp <img src="https://i2.wp.com/1000marcas.net/wp-content/uploads/2021/06/Cash-App-emblem-2048x1152.png"  width="50" /></h1>
                    <div className="add-move">
                        <i className="bi-plus"></i>
                        <div>
                            <p>To CashApp Account</p>
                            <span>instant . 13% charge fee</span>
                        </div>
                    </div>
                </div>
                <div className="move-box">
                    <h1>Bank account</h1>
                    <div className="add-move">
                        <i className="bi-plus"></i>
                        <div>
                            <p>External bank account</p>
                            <span>2-3 business days . No fee</span>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                {dark ? <div className="dark"></div> : ""}
                <div className="with-head">
                    <div></div>
                    <h1>Withdraw money</h1>
                    <NavLink to="../homedash"><h2><i className="bi-x"></i></h2></NavLink>
                </div>
                <div className="with-box">
                    <h1 className="selected-amount">$100</h1>
                    <div className="with-from">
                        <h3>Withdraw from</h3>
                        <div className="with-line">
                            <div className="with-left">
                                <div className="with-pic"></div>
                                <div>
                                    <h4>FCFG Checking ...3098</h4>
                                    <p>$200.02</p>
                                </div>
                            </div>
                            <i className="bi-chevron-down"></i>
                        </div>
                    </div>
                    <div className="with-from">
                        <h3>Move to</h3>
                        <div className="with-line" onClick={changeDark}>
                            <div className="with-left">

                                <div>
                                    <h4>Select an account</h4>

                                </div>
                            </div>
                            <i className="bi-chevron-down"></i>
                        </div>
                    </div>
                </div>


            </section>

        </section>
    )
}


export default SelectAccount;