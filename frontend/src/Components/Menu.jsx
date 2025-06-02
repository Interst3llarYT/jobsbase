import { NavLink } from "react-router-dom";
import Logo from "../assets/imgs/jobsbase.png";

function Nav1() {
  return (
    <>
      <nav style={{position:"fixed",width:"100%",zIndex:"999"}} className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <NavLink style={{width:"10%"}} className="navbar-brand" to={"/"}>
            <img style={{ width: "180px" }} src={Logo} alt="Logo" />
          </NavLink>
         
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className={"nav-link"} to={"/com"}>
                  Test
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={"nav-link"} to={"/com"}>
                  Test
                </NavLink>
              </li>
              {/* Add more nav items as needed */}
            </ul>
          </div>
        </div>
      </nav>
      <br />
    </>
  );
}

export default Nav1;