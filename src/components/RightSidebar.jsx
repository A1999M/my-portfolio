import { motion } from "framer-motion";
import "./style.scss";

export default function RightSidebar({ positionY, mask }) {
  let liVarients = {
    initial: { y: 100 },
    animate: { y: 0 },
  };

  return (
    <div
      data-mask={mask}
      style={mask ? { visibility: "hidden" } : { visibility: "visible" }}
      className="wrapperRightSidebar"
    >
      <ul className="rightSidebar">
        <li className="rightSideItems">
          <motion.a
            data-scroll-to="#headerSection"
            data-scroll-to-offset="-60"
            href="#headerSection"
            variants={liVarients}
            initial="initial"
            animate={positionY >= 70 ? "animate" : "initial"}
            transition={{
              type: "tween",
              delay: 0,
              ease: "backOut",
              duration: 0.5,
            }}
          >
            home
          </motion.a>
        </li>
        <li className="rightSideItems">
          <motion.a
            data-scroll-to="#aboutSection"
            data-scroll-to-offset="-60"
            variants={liVarients}
            initial="initial"
            animate={positionY >= 70 ? "animate" : "initial"}
            transition={{
              type: "tween",
              delay: 0,
              ease: "backOut",
              duration: 0.5,
            }}
            href="#aboutSection"
          >
            about
          </motion.a>
        </li>
        <li className="rightSideItems">
          <motion.a
            data-scroll-to="#worksSection"
            data-scroll-to-offset="-60"
            href="#worksSection"
            variants={liVarients}
            initial="initial"
            animate={positionY >= 70 ? "animate" : "initial"}
            transition={{
              type: "tween",
              delay: 0.15,
              ease: "backOut",
              duration: 0.5,
            }}
          >
            work
          </motion.a>
        </li>
        <li className="rightSideItems">
          <motion.a
            data-scroll-to="#contactMeSection"
            data-scroll-to-offset="-60"
            href="#contactMeSection"
            variants={liVarients}
            initial="initial"
            animate={positionY >= 70 ? "animate" : "initial"}
            transition={{
              type: "tween",
              delay: 0.25,
              ease: "backOut",
              duration: 0.5,
            }}
          >
            contact
          </motion.a>
        </li>
      </ul>
    </div>
  );
}
