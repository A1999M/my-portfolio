import { useState, useContext, useEffect } from "react";
import AboutSection from "./AboutSection";
import HeroHeader from "./HeroHeader";
import MaskStatus from "../../context/MaskStatus";
import Navbar from "../../components/Navbar";
import useMousePosition from "../../utils/useMousePosition";
import WhatIDo from "./WhatIDo";
import { motion } from "framer-motion";
import MaskHeroHeader from "./MaskHeroHeader";
import "./Home.scss";

export default function Home() {
  // let [mixStatus, setMixStatus] = useContext(MaskStatus);
  // let { x, y } = useMousePosition();
  // let [isHover, setIsHover] = useState();
  // let size = isHover ? 300 : 60;
  // let mix = mixStatus ? "difference" : "normal";
  // let pointerStatus = mixStatus ? "initial" : "none";

  return (
    <>
      <div className="container-fluid homePage">
        <div className="row darkLayer p-0">
          <Navbar />
          <HeroHeader />
          <AboutSection />
          <WhatIDo />
        </div>
        {/* <motion.div
          className="row maskLayer p-0"
          animate={{
            WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
            WebkitMaskSize: `${size}px`,
            mixBlendMode: mix,
            // pointerEvents: pointerStatus,
          }}
          transition={{ type: "tween", duration: 0.7, ease: "backOut" }}
        >
          <Navbar />
          <MaskHeroHeader setMixStatus={setMixStatus} setIsHover={setIsHover} />
          <AboutSection />
        </motion.div> */}
      </div>
    </>
  );
}
