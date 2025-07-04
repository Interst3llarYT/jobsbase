import { NavLink } from "react-router-dom";
import Navb from "./HomeNav";
import Video from "../Video";
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