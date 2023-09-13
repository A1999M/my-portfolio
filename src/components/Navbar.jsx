import { memo, useContext } from "react";
import { motion } from "framer-motion";
import MagneticNav from "./MagneticNav";
import MaskStatus from "../context/MaskStatus";
import "./style.scss";

let Navbar = memo(({ mask, windowSize }) => {
  const [, , index] = useContext(MaskStatus);
  let ulVarient = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 0.05,
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
      style={
        (!mask && { visibility: "visible", height: "fit-content" }) ||
        (mask &&
          windowSize < 992 && {
            visibility: "visible",
            height: "fit-content",
          }) ||
        (mask &&
          windowSize >= 992 && { visibility: "hidden", height: "fit-content" })
      }
      data-mask={mask}
      className="col-12"
    >
      <motion.ul
        variants={ulVarient}
        initial="hidden"
        animate={index >= 9 ? "show" : "hidden"}
        className="wrapperNavbar"
      >
        <motion.li variants={liVarient} className="navbarItem">
          <MagneticNav>
            <a
              data-scroll-to="#headerSection"
              data-scroll-to-offset="-60"
              href="#headerSection"
            >
              home
            </a>
          </MagneticNav>
        </motion.li>
        <motion.li variants={liVarient} className="navbarItem">
          <MagneticNav>
            <a
              data-scroll-to="#worksSection"
              data-scroll-to-offset="-60"
              href="#worksSection"
            >
              work
            </a>
          </MagneticNav>
        </motion.li>
        <motion.li variants={liVarient} className="navbarItem">
          <MagneticNav>
            <a
              data-scroll-to="#aboutSection"
              data-scroll-to-offset="-60"
              href="#aboutSection"
            >
              about
            </a>
          </MagneticNav>
        </motion.li>
        <motion.li variants={liVarient} className="navbarItem">
          <MagneticNav>
            <a
              data-scroll-to="#contactMeSection"
              data-scroll-to-offset="-60"
              href="#contactMeSection"
            >
              contact
            </a>
          </MagneticNav>
        </motion.li>
      </motion.ul>
    </div>
  );
});

export default Navbar;
