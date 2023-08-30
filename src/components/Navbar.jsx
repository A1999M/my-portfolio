import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import MagneticNav from "./MagneticNav";
import "./style.scss";

export default function Navbar({ visibility }) {
  let ulVarient = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 2.5,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };
  let liVarient = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        duration: 0.7,
        ease: "backOut",
      },
    },
  };

  return (
    <div
      style={{ visibility: visibility, height: "fit-content" }}
      className="col-12"
    >
      <motion.ul
        variants={ulVarient}
        initial="hidden"
        animate="show"
        className="wrapperNavbar"
      >
        <motion.li variants={liVarient} className="navbarItem">
          <MagneticNav>
            <Link to={"/"}>home</Link>
          </MagneticNav>
        </motion.li>
        <motion.li variants={liVarient} className="navbarItem">
          <MagneticNav>
            <Link to={"/work"}>work</Link>
          </MagneticNav>
        </motion.li>
        <motion.li variants={liVarient} className="navbarItem">
          <MagneticNav>
            <Link to={"/about-us"}>about</Link>
          </MagneticNav>
        </motion.li>
        <motion.li variants={liVarient} className="navbarItem">
          <MagneticNav>
            <Link to={"/contact"}>contact</Link>
          </MagneticNav>
        </motion.li>
      </motion.ul>
    </div>
  );
}
