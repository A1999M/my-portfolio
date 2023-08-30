import { useEffect, useRef } from "react";
import webLogo from "../assets/svg/web.svg";
import telLogo from "../assets/svg/telegram.svg";
import whatsAppLogo from "../assets/svg/whatsapp.svg";
import MagneticBtn from "./MagneticBtn";
import emailLogo from "../assets/svg/email.svg";
import { gsap } from "gsap";
import "./style.scss";

export default function Sidebar({ mask }) {
  let wrapperRef = useRef();

  useEffect(() => {
    let tl = gsap.timeline();
    let icons = gsap.utils.toArray(".fixSidebarIcon");

    setTimeout(() => {
      icons.map((icon) => {
        tl.fromTo(
          icon,
          {
            opacity: 0,
            y: -100,
            scale: 0,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            ease: "Back.easeOut",
          },
          "<0.15"
        );
      });
    }, 2500);

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <>
      <div
        style={!mask ? { visibility: "visible" } : { visibility: "hidden" }}
        ref={wrapperRef}
        className="wrapperSidebarr"
      >
        <MagneticBtn>
          <img src={webLogo} className="fixSidebarIcon" alt="web logo" />
        </MagneticBtn>
        <MagneticBtn>
          <img src={telLogo} className="fixSidebarIcon" alt="telegram logo" />
        </MagneticBtn>
        <MagneticBtn>
          <img
            src={whatsAppLogo}
            className="fixSidebarIcon"
            alt="whatsapp logo"
          />
        </MagneticBtn>
        <MagneticBtn>
          <img src={emailLogo} className="fixSidebarIcon" alt="email logo" />
        </MagneticBtn>
      </div>
    </>
  );
}
