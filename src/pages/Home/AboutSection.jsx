import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import htmlLogo from "../../assets/svg/html-1.svg";
import cssLogo from "../../assets/svg/css-3.svg";
import reduxLogo from "../../assets/svg/redux.svg";
import muiLogo from "../../assets/svg/material-ui.svg";
import formicLogo from "../../assets/svg/formik.svg";
import sassLogo from "../../assets/svg/sass-1.svg";
import jsLogo from "../../assets/svg/logo-javascript.svg";
import reactLogo from "../../assets/svg/react-2.svg";
import LogoImage from "./LogoImage";
import bootstrapLogo from "../../assets/svg/bootstrap-4.svg";
import gsapLogo from "../../assets/svg/gsap.svg";
import TSLogo from "../../assets/svg/typescript.svg";
import framerLogo from "../../assets/svg/framer-motion.svg";
import SplitType from "split-type";
import SplitText from "../../utils/SplitText";
import "./Home.scss";

export default function AboutSection() {
  let descAboutSectionRef = useRef(null);
  let triggerDesc = useRef(null);
  let scopeRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);
    let ctx = gsap.context(() => {
      let splitDesc = new SplitType(descAboutSectionRef.current);

      gsap.from(splitDesc.chars, {
        opacity: 0.3,
        // clipPath: "inset(0% 100% 0% 0%)",
        stagger: 0.3,
        duration: 0.5,
        ease: "none",
        scrollTrigger: {
          trigger: triggerDesc.current,
          endTrigger: scopeRef.current,
          start: "top 85%",
          end: "center 38%",
          scrub: 1,
          //   markers: {
          //     startColor: "#ffd700",
          //     endColor: "#ff0000",
          //     fontSize: "25px",
          //   },
        },
      });
    }, scopeRef.current);

    return () => ctx.revert();
  });

  return (
    <>
      <div ref={scopeRef} className="col-12 aboutSection">
        <div ref={triggerDesc} className="wrapperAboutSection">
          <p className="titleAbout">about me</p>
          <p ref={descAboutSectionRef} className="descAbout">
            I've enjoyed turning <span>complex problems</span> into simple,
            beautiful and intuitive designs. When I'm not pushing pixels, you'll
            find me cooking, gardening or working out in the park.
          </p>
        </div>
      </div>
      {/* my skills section  */}
      <div data-scroll data-scroll-speed="0.1" className="col-12 mySkills">
        <p className="titleSkills">my skills</p>
      </div>
      <div className="col-12">
        <div className="wrapperLogos">
          <div className="logoCuomn1">
            <LogoImage
              imageSrc={reactLogo}
              imageAlt={"react logo"}
              scrollSpeed={0.2}
            />
            <LogoImage
              imageSrc={jsLogo}
              imageAlt={"js logo"}
              scrollSpeed={0.1}
            />
            <LogoImage
              imageSrc={bootstrapLogo}
              imageAlt={"bootstrap logo"}
              scrollSpeed={0.3}
            />
            <LogoImage
              imageSrc={sassLogo}
              imageAlt={"sass logo"}
              scrollSpeed={0.2}
            />
            <LogoImage
              imageSrc={cssLogo}
              imageAlt={"css logo"}
              scrollSpeed={0.3}
            />
            <LogoImage
              imageSrc={htmlLogo}
              imageAlt={"html logo"}
              scrollSpeed={0.2}
            />
          </div>
          <div className="logoCuomn2">
            <LogoImage
              imageSrc={reduxLogo}
              imageAlt={"redux logo"}
              scrollSpeed={0.2}
            />
            <LogoImage
              imageSrc={muiLogo}
              imageAlt={"mui logo"}
              scrollSpeed={0.3}
            />
            <LogoImage
              imageSrc={gsapLogo}
              imageAlt={"gsap logo"}
              scrollSpeed={0.2}
            />
            <LogoImage
              imageSrc={formicLogo}
              imageAlt={"formik logo"}
              scrollSpeed={0.3}
            />
            <LogoImage
              imageSrc={framerLogo}
              imageAlt={"framer logo"}
              scrollSpeed={0.1}
            />
            <LogoImage
              imageSrc={TSLogo}
              imageAlt={"typescript logo"}
              scrollSpeed={0.2}
            />
          </div>
        </div>
      </div>
    </>
  );
}
