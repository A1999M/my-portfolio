import { Link } from "react-router-dom";
import MagneticNav from "./MagneticNav";
import "./style.scss";

export default function Navbar() {
  return (
    <div className="col-12">
      <ul className="wrapperNavbar">
        <li className="navbarItem">
          <MagneticNav>
            <Link to={"/"}>home</Link>
          </MagneticNav>
        </li>
        <li className="navbarItem">
          <MagneticNav>
            <Link to={"/work"}>work</Link>
          </MagneticNav>
        </li>
        <li className="navbarItem">
          <MagneticNav>
            <Link to={"/about-us"}>about</Link>
          </MagneticNav>
        </li>
        <li className="navbarItem">
          <MagneticNav>
            <Link to={"/contact"}>contact</Link>
          </MagneticNav>
        </li>
      </ul>
    </div>
  );
}
