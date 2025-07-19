import { useEffect } from "react";
import { useLocation, withRouter} from "react-router-dom";


function ScrollToTop({history}){
  useEffect(()=> {
    const unlisten = history.listen(()=>{
        window.scrollTo(0,0);
    });
    return ()=>{
        unlisten()
    }
  }, [])
}

export default withRouter(ScrollToTop)