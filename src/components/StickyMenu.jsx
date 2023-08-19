import { useState, useRef } from "react";
import { useScroll, useMotionValueEvent, motion } from "framer-motion";
import Lottie from "react-lottie";
import close from "../assets/svg/close.json";
import MagneticNav from "./MagneticNav";
import { gsap } from "gsap";
import "./style.scss";

export default function StickyMenu() {
  let { scrollY } = useScroll();
  let scopeRef = useRef();
  let navRef = useRef();
  let [revealBtn, setRevealBtn] = useState(false);
  let [isPaused, setIsPaused] = useState(true);
  let [isShowNav, setIsShowNav] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest >= 100) {
      setRevealBtn(true);
    } else {
      setRevealBtn(false);
    }
  });

  let openMenu = () => {
    let menuItems = gsap.utils.toArray(".stickyMenyItems");

    let tl = gsap.timeline();
    tl.to(navRef.current, {
      x: "0vw",
      duration: 1.5,
      delay: 0.1,
      ease: "Expo.easeOut",
    });
    menuItems.forEach((item) => {
      tl.to(
        item,
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "Expo.easeOut",
          // delay: 0.035,
        },
        "<0.07"
      );
    });
  };
  let closeMenu = () => {
    let menuItems = gsap.utils.toArray(".stickyMenyItems");
    let tl = gsap.timeline();
    gsap.to(navRef.current, {
      x: "35vw",
      duration: 0.8,
      ease: "Expo.easeIn",
      // delay: 0.,
    });
    menuItems.forEach((item) => {
      tl.to(
        item,
        {
          opacity: 0,
          x: 100,
          duration: 1,
          ease: "Expo.easeOut",
        },
        "<0.05"
      );
    });
  };

  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: close,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      {/* sticky navbar  */}
      <div ref={scopeRef} className="wrapperStickyMenu">
        <ul ref={navRef} className="stickyMenu">
          <p className="navigateText">navigate</p>
          <MagneticNav>
            <li className="stickyMenyItems">home</li>
          </MagneticNav>
          <MagneticNav>
            <li className="stickyMenyItems">work</li>
          </MagneticNav>
          <MagneticNav>
            <li className="stickyMenyItems">about</li>
          </MagneticNav>
          <MagneticNav>
            <li className="stickyMenyItems">contact</li>
          </MagneticNav>
          <p className="socisls">socials</p>
          <div className="socialItem">
            <MagneticNav>
              <span className="socialEmail">Email</span>
            </MagneticNav>
            <MagneticNav>
              <span className="socialTelegram">Telegram</span>
            </MagneticNav>
          </div>
        </ul>
      </div>
      {/* sticky close btn */}
      <MagneticNav>
        <motion.div
          initial={{ scale: 0 }}
          animate={revealBtn ? { scale: 1 } : { scale: 0 }}
          exit={{ scale: 0 }}
          transition={{
            type: "spring",
          }}
          onClick={() => {
            setIsPaused((isPaused) => (isPaused = !isPaused));
            setIsShowNav(!isShowNav);
            if (!isShowNav) {
              openMenu();
            } else {
              closeMenu();
            }
            setTimeout(() => {
              setIsPaused((isPaused) => (isPaused = true));
            }, 1200);
          }}
          style={
            isShowNav
              ? { backgroundColor: "#455ce9" }
              : { backgroundColor: "#000" }
          }
          className="openCloseBtn"
        >
          <Lottie
            options={defaultOptions}
            height={40}
            width={40}
            isStopped={false}
            isPaused={isPaused}
          />
        </motion.div>
      </MagneticNav>
    </>
  );
}
