import { useRef, memo, useContext } from "react";
import webLogo from "../assets/svg/web.svg";
import telLogo from "../assets/svg/telegram.svg";
import whatsAppLogo from "../assets/svg/whatsapp.svg";
import MagneticBtn from "./MagneticBtn";
import MaskStatus from "../context/MaskStatus";
import emailLogo from "../assets/svg/email.svg";
import { motion } from "framer-motion";
import "./style.scss";

let Sidebar = memo(({ mask }) => {
  const [, , index] = useContext(MaskStatus);
  let wrapperRef = useRef();

  let ulVarient = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        delay: 0.05,
        staggerChildren: 0.1,
        staggerDirection: -1,
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
    <>
      <motion.div
        variants={ulVarient}
        initial="hidden"
        animate={index >= 9 ? "show" : "hidden"}
        style={!mask ? { visibility: "visible" } : { visibility: "hidden" }}
        ref={wrapperRef}
        className="wrapperSidebarr"
      >
        <MagneticBtn>
          <motion.img
            variants={liVarient}
            src={webLogo}
            className="fixSidebarIcon"
            alt="web logo"
          />
        </MagneticBtn>
        <MagneticBtn>
          <motion.img
            variants={liVarient}
            src={telLogo}
            className="fixSidebarIcon"
            alt="telegram logo"
          />
        </MagneticBtn>
        <MagneticBtn>
          <motion.img
            variants={liVarient}
            src={whatsAppLogo}
            className="fixSidebarIcon"
            alt="whatsapp logo"
          />
        </MagneticBtn>
        <MagneticBtn>
          <motion.img
            variants={liVarient}
            src={emailLogo}
            className="fixSidebarIcon"
            alt="email logo"
          />
        </MagneticBtn>
      </motion.div>
    </>
  );
});

export default Sidebar;
