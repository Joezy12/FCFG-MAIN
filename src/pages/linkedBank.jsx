import "../styles/linkedBank.css"
import { NavLink } from "react-router-dom";

function LinkedBank(){
    return(
        <>
           <div className="linked-bank">
             <div className="link-nav">
              <NavLink className="link" to="../settings"><i className="bi-arrow-left"></i> </NavLink>  
                <h1>Linked Banks/Cards</h1>
                <div></div>
             </div>
             <img src="https://tse4.mm.bing.net/th/id/OIP.2tXWEoRhHgTn0WVEJD6zlwAAAA?r=0&cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
             <h1 className="empty">No Linked Bank or Card</h1>
             <button>Link External Account</button>
           </div>
        </>
    )
}


export default LinkedBank;