import { useState } from "react";
import banks from "../general/bankData";
import "../styles/bankAccount.css"
import { NavLink, useNavigate } from "react-router-dom";

function BankAccount() {


    const allBanks = banks;

    const navigate = useNavigate();

    function goToLogin() {
        navigate("../confirmLogin")
    }

    const [startIndex, setStartIndex] = useState(0)
    const [endIndex, setEndIndex] = useState(9)

    const [searchWord, setSearchWord] = useState("");
    let showBank;

    if (searchWord == "") {
        showBank = allBanks.slice(startIndex, endIndex).map((each) => {
            const bankStyle = {
                backgroundImage: `url(${each.img})`,
                backgroundSize: `120px`,
                backgroundRepeat: `no-repeat`,
                backgroundPosition: `center`,
            }

            return <div className="bank-box" style={bankStyle} onClick={goToLogin}></div>
        })
    } else {
        let sortedBank = allBanks.filter((bank) => {
            return bank.BankName.startsWith(searchWord[0].toUpperCase() + searchWord.slice(1))
        });



        if (sortedBank.length >= 1) {
            showBank = sortedBank.map((each) => {
                const bankStyle = {
                    backgroundImage: `url(${each.img})`,
                    backgroundSize: `120px`,
                    backgroundRepeat: `no-repeat`,
                    backgroundPosition: `center`,
                }

                return <div className="bank-box" style={bankStyle} onClick={goToLogin}></div>
            })
        } else {
            showBank = <h1 className="middle">No search result</h1>
        }
    }

    function next() {
      if(!searchWord ) {
          setStartIndex((prev)=> {
            return prev + 9;
        })
       setEndIndex((prev)=> {
            return prev + 9;
        })
      }
    }

    function back() {
      if(!searchWord && endIndex > 9) {
          setStartIndex((prev)=> {
            return prev - 9;
        })
       setEndIndex((prev)=> {
            return prev - 9;
        })
      }
    }

    const activeStyle = {
        opacity: searchWord ? `0.3`: `1`,
    }

    



    return (
        <div className="bank-account">
            <div className="bank-head">
                <div></div>
                <h1>FCFG</h1>
               <NavLink className="link" to="../homeDash"><i className="bi-x"></i></NavLink> 
            </div>
            <div className="select">
                <h1>Select your institution</h1>
                <div className="select-input">
                    <i className="bi-search"></i>
                    <input type="search" placeholder="Search" onChange={(e) => setSearchWord(e.target.value)} />
                </div>
            </div>

            <div className="bank-container">
                {showBank}
            </div>
            <div className="next-btn" style={activeStyle}>
                   <button className="prev-btn" onClick={back}>Prev</button>
                   <button onClick={next}>Next</button>
            </div>
        </div>
    )
}


export default BankAccount;