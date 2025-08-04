import BottomNav from "../general/bottomNav";
import historyData from "../general/historyData";
import { NavLink } from "react-router-dom";

function History() {

    const showHistory = historyData.map((each) => {
        return <div className="recent-line" >
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
        <div>
             <div className="check-nav">
                <NavLink className="link" to="../homeDash"><i className="bi-arrow-left"></i></NavLink>
                <h1>History</h1>
                <i className="bi-gear"></i>
            </div>
           <div className="recent">
                <h1>Recent activity <i className="bi-arrow-right"></i></h1>
                <div className="recent-box">
                    {historyData.length > 0 ? showHistory : <p className="no">No activities yet</p> }
                </div>
            </div>
            <BottomNav />
        </div>
    )
}

export default History;