import { useState, useContext, useEffect } from "react";
import AboutSection from "./AboutSection";
import HeroHeader from "./HeroHeader";
import MaskStatus from "../../context/MaskStatus";
import Navbar from "../../components/Navbar";
import useMousePosition from "../../utils/useMousePosition";
import RightSidebar from "../../components/RightSidebar";
import WhatIDo from "./WhatIDo";
import WhatIDo2 from "./WhatIDo2";
import DemoWorks from "./DemoWorks";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import MyProjects from "./MyProjects";
import HowHelp from "./HowHelp";
import ContactMe from "./ContactMe";
import Sidebar from "../../components/Sidebar";
import "./Home.scss";
import Loader from "../../components/Loader";
import MySkills from "./MySkills";

export default function Home() {
  let [mixStatus, setMixStatus] = useContext(MaskStatus);
  let { scrollY } = useScroll();
  let [yPos, setYPos] = useState(0);
  let { x, y } = useMousePosition();
  let [isHover, setIsHover] = useState(false);
  let size = isHover ? 350 : 60;
  let mix = mixStatus ? "difference" : "normal";

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setYPos(latest);
  });

  return (
    <>
      <Loader />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="container-fluid homePage"
      >
        {/* normal content  */}
        <div className="row darkLayer p-0">
          <Navbar mask={false} visibility="visible" />
          <div className="col-1 d-none d-md-block">
            <Sidebar changeMix={setMixStatus} mask={false} />
          </div>
          <div className="col-11 col-md-10">
            <HeroHeader
              mask={false}
              color={"#e3e3e3"}
              title1="Ali"
              title2="Molaei"
              changeMix={setMixStatus}
              changeHover={setIsHover}
            />
            <AboutSection
              mask={false}
              color="#b7ab98"
              spanColor="#ec4e39"
              changeMix={setMixStatus}
              changeHover={setIsHover}
            />
            <WhatIDo2 mask={false} />
            <MySkills changeHover={setIsHover} mask={false} />
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
          </div>
          <div className="col-1">
            <RightSidebar positionY={yPos} />
          </div>
        </div>
        {/* mask content  */}
        <motion.div
          className="row maskLayer p-0"
          animate={{
            WebkitMaskPosition: `${x - size / 2}px ${y + yPos - size / 2}px`,
            WebkitMaskSize: `${size}px`,
            mixBlendMode: mix,
          }}
          transition={{ type: "tween", duration: 0.5, ease: "backOut" }}
        >
          <Navbar mask={true} visibility="hidden" />
          <div className="col-1 d-none d-md-block">
            <Sidebar changeMix={setMixStatus} mask={true} />
          </div>
          <div className="col-11 col-md-10">
            <HeroHeader
              mask={true}
              color={"#000"}
              title1="Front End"
              title2="Developer"
              changeMix={setMixStatus}
              changeHover={setIsHover}
            />
            <AboutSection
              mask={true}
              color="#000"
              spanColor="#ffd700"
              changeMix={setMixStatus}
              changeHover={setIsHover}
            />
            <WhatIDo2 mask={true} />
            <MySkills changeHover={setIsHover} mask={true} />
            <WhatIDo
              changeMix={setMixStatus}
              changeHover={setIsHover}
              mask={true}
            />
            <DemoWorks mask={true} />
            <MyProjects mask={true} />
            <HowHelp
              changeMix={setMixStatus}
              changeHover={setIsHover}
              mask={true}
            />
            <ContactMe mask={true} />
          </div>
          <div className="col-1">
            <RightSidebar positionY={yPos} />
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
