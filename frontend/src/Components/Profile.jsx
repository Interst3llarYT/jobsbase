import Menu from "./Menu.jsx";
import Navb from "./Navb.jsx";
import bowing from "../assets/imgs/skyline.jpg"
import mage from "../assets/imgs/noimage.png"
import "../styles/profile.css"
function Profile() {
    return (
        <>
            <Navb />

            <div className="main">
                <div className="img">
                    <center><img src={bowing} className="imgold" /></center>
                </div>
                <div className="pf">
                    <div className="cont">
                        <div className="sec1">
                            <div className="log"><img src={mage} className="mage" /></div>
                        </div>
                        <div className="sec2">
                            <div className="upld"><input type="file" className="fle" /></div>
                            <div className="ava"><button className="btn btn-secondary">Upload</button></div>
                        </div>

                    </div>
<hr />
                    <div className="bio">
                        <div className="bout">About Me</div>
                       <center> <div className="nun">No Bio Added yet</div></center>
                    </div>
                </div>

            </div>
        </>
    )

}
export default Profile;