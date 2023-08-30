import { useState, useContext, useLayoutEffect } from "react";
import AboutSection from "./AboutSection";
import HeroHeader from "./HeroHeader";
import MaskStatus from "../../context/MaskStatus";
import Navbar from "../../components/Navbar";
import useMousePosition from "../../utils/useMousePosition";
import WhatIDo from "./WhatIDo";
import DemoWorks from "./DemoWorks";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import MyProjects from "./MyProjects";
import HowHelp from "./HowHelp";
import ContactMe from "./ContactMe";
import Sidebar from "../../components/Sidebar";
import "./Home.scss";
import Loader from "../../components/Loader";

export default function Home() {
  let [statusLoader, setStatusLoader] = useState(true);
  let [mixStatus, setMixStatus] = useContext(MaskStatus);
  let { scrollY } = useScroll();
  let [yPos, setYPos] = useState(0);
  let { x, y } = useMousePosition();
  let [isHover, setIsHover] = useState(false);
  let size = isHover ? 350 : 60;
  let mix = mixStatus ? "difference" : "normal";

  useLayoutEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  });

  useMotionValueEvent(scrollY, "change", (latest) => {
    setYPos(latest);
  });

  return (
    <>
      {statusLoader && <Loader finishPreLoader={setStatusLoader} />}
      <div className="container-fluid homePage">
        <div className="row darkLayer p-0">
          <Navbar visibility="visible" />
          <Sidebar changeMix={setMixStatus} mask={false} />
          <HeroHeader
            mask={false}
            color={"#e3e3e3"}
            title1="Ali"
            title2="Molaei"
            changeMix={setMixStatus}
            changeHover={setIsHover}
          />
          {!statusLoader && (
            <>
              <AboutSection
                mask={false}
                color="#b7ab98"
                spanColor="#ec4e39"
                changeMix={setMixStatus}
                changeHover={setIsHover}
              />
              <WhatIDo
                changeMix={setMixStatus}
                changeHover={setIsHover}
                mask={false}
              />
              <DemoWorks mask={false} />
              {/* <Experience /> */}
              <MyProjects mask={false} />
              <HowHelp
                changeMix={setMixStatus}
                changeHover={setIsHover}
                mask={false}
              />
              <ContactMe mask={false} />
            </>
          )}
        </div>
        <motion.div
          className="row maskLayer p-0"
          animate={{
            WebkitMaskPosition: `${x - size / 2}px ${y + yPos - size / 2}px`,
            WebkitMaskSize: `${size}px`,
            mixBlendMode: mix,
          }}
          transition={{ type: "tween", duration: 0.5, ease: "backOut" }}
        >
          <Navbar visibility="hidden" />
          <Sidebar changeMix={setMixStatus} mask={true} />
          <HeroHeader
            mask={true}
            color={"#000"}
            title1="Front End"
            title2="Developer"
            changeMix={setMixStatus}
            changeHover={setIsHover}
          />
          {!statusLoader && (
            <>
              <AboutSection
                mask={true}
                color="#000"
                spanColor="#ffd700"
                changeMix={setMixStatus}
                changeHover={setIsHover}
              />
              <WhatIDo
                changeMix={setMixStatus}
                changeHover={setIsHover}
                mask={true}
              />
              <DemoWorks mask={true} />
              {/* <Experience /> */}
              <MyProjects mask={true} />
              <HowHelp
                changeMix={setMixStatus}
                changeHover={setIsHover}
                mask={true}
              />
              <ContactMe mask={true} />
            </>
          )}
        </motion.div>
      </div>
    </>
  );
}
