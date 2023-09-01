import { motion } from "framer-motion";
import "./style.scss";

export default function RightSidebar({ positionY }) {
  let liVarients = {
    initial: { y: 100 },
    animate: { y: 0 },
  };

  return (
    <div className="wrapperRightSidebar">
      <ul className="rightSidebar">
        <li className="rightSideItems">
          <motion.a
            variants={liVarients}
            initial="initial"
            animate={positionY >= 70 ? "animate" : "initial"}
            transition={{
              type: "tween",
              delay: 0,
              ease: "backOut",
              duration: 0.5,
            }}
            href=""
          >
            about
          </motion.a>
        </li>
        <li className="rightSideItems">
          <motion.a
            variants={liVarients}
            initial="initial"
            animate={positionY >= 70 ? "animate" : "initial"}
            transition={{
              type: "tween",
              delay: 0.15,
              ease: "backOut",
              duration: 0.5,
            }}
            href=""
          >
            work
          </motion.a>
        </li>
        <li className="rightSideItems">
          <motion.a
            variants={liVarients}
            initial="initial"
            animate={positionY >= 70 ? "animate" : "initial"}
            transition={{
              type: "tween",
              delay: 0.25,
              ease: "backOut",
              duration: 0.5,
            }}
            href=""
          >
            contact
          </motion.a>
        </li>
      </ul>
    </div>
  );
}
