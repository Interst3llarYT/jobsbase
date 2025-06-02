import { NavLink } from "react-router-dom";
import Navb from "./navb";
import Video from "./Video";
function Feed(){
    return(
        <>
        <div className="contain">
            <Navb/>
            <Video/>
        </div>
        </>
    )
}
export default Feed;