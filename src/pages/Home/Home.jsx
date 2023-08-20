import { useState, useContext } from "react";
import HeroHeader from "./HeroHeader";
import MaskStatus from "../../context/MaskStatus";
import useMousePosition from "../../utils/useMousePosition";
import { motion } from "framer-motion";
import MaskHeroHeader from "./MaskHeroHeader";
import "./Home.scss";

export default function Home() {
  let [mixStatus, setMixStatus] = useContext(MaskStatus);
  let { x, y } = useMousePosition();
  let [isHover, setIsHover] = useState();
  let size = isHover ? 300 : 60;
  let mix = mixStatus ? "difference" : "normal";

  return (
    <>
      <div className="container-fluid homePage">
        <div className="row darkLayer p-0">
          <HeroHeader />
        </div>
        <motion.div
          className="row maskLayer p-0"
          animate={{
            WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
            WebkitMaskSize: `${size}px`,
            mixBlendMode: mix,
          }}
          transition={{ type: "tween", duration: 0.7, ease: "backOut" }}
        >
          <MaskHeroHeader setMixStatus={setMixStatus} setIsHover={setIsHover} />
        </motion.div>
      </div>
    </>
  );
}
