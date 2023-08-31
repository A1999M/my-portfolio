import { useRef, useEffect, memo } from "react";
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
import gitLogo from "../../assets/svg/git-svg.svg";
import gitHubLogo from "../../assets/svg/github-2.svg";
import tailwindLogo from "../../assets/svg/tailwindcss.svg";
import LogoImage from "./LogoImage";
import bootstrapLogo from "../../assets/svg/bootstrap-4.svg";
import gsapLogo from "../../assets/svg/gsap.svg";
import TSLogo from "../../assets/svg/typescript.svg";
import framerLogo from "../../assets/svg/framer-motion.svg";
import SplitType from "split-type";
import SplitText from "../../utils/SplitText";
import "./Home.scss";

let AboutSection = memo(
  ({ changeMix, changeHover, mask, color, spanColor }) => {
    let descAboutSectionRef = useRef(null);
    let triggerDesc = useRef(null);
    let scopeRef = useRef(null);
    let titleRef = useRef(null);
    let titleSkillRef = useRef(null);

    useEffect(() => {
      gsap.registerPlugin(ScrollTrigger, SplitText);

      let ctx = gsap.context(() => {
        let splitDesc = new SplitType(descAboutSectionRef.current);
        let splitTitle = new SplitType(titleRef.current);
        let splitTitleSkill = new SplitType(titleSkillRef.current);

        gsap.from(splitTitleSkill.chars, {
          opacity: 0,
          y: 60,
          stagger: 0.05,
          duration: 1,
          ease: "Expo.easeOut",
          scrollTrigger: {
            trigger: titleSkillRef.current,
            start: "top 85%",
            end: "bottom 0%",
            toggleActions: "restart none none reverse",
          },
        });
        gsap.from(splitTitle.chars, {
          opacity: 0,
          y: 60,
          stagger: 0.05,
          duration: 1,
          ease: "Expo.easeOut",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
            end: "bottom 0%",
            toggleActions: "restart none none reverse",
          },
        });
        gsap.from(splitDesc.chars, {
          opacity: 0.3,
          stagger: 0.05,
          ease: "none",
          scrollTrigger: {
            trigger: triggerDesc.current,
            endTrigger: scopeRef.current,
            start: "center 85%",
            end: "center 50%",
            scrub: 1,
          },
        });
      }, scopeRef.current);

      return () => ctx.revert();
    }, []);

    return (
      <>
        <div ref={scopeRef} className="col-12 aboutSection">
          <div ref={triggerDesc} className="wrapperAboutSection">
            <div>
              <p ref={titleRef} style={{ color: color }} className="titleAbout">
                about me
              </p>
            </div>
            {!mask ? (
              <p
                onMouseEnter={() => {
                  changeHover(true);
                  changeMix(false);
                }}
                onMouseLeave={() => {
                  changeHover(false);
                  changeMix(true);
                }}
                style={{ color: color }}
                ref={descAboutSectionRef}
                className="descAbout"
              >
                I'm a Front End Developer With 3 Years Of Experience. My Focus
                is On <span style={{ color: spanColor }}> Web Animations </span>
                About Creating User Friendly and Beautiful Digital Experience.
              </p>
            ) : (
              <p
                onMouseEnter={() => {
                  changeHover(true);
                  changeMix(false);
                }}
                onMouseLeave={() => {
                  changeHover(false);
                  changeMix(true);
                }}
                style={{ color: color }}
                ref={descAboutSectionRef}
                className="descAbout"
              >
                I'm Currently Learning
                <span style={{ color: spanColor }}> Next.js</span>, And I Have a
                Strong Interest In 3D Websites. As a Result, I Allocate a Amount
                Of My Time To Learning 3D Libraries.
              </p>
            )}
            <p></p>
          </div>
        </div>
        {/* my skills section  */}
        <div className="col-12 mySkills">
          <p ref={titleSkillRef} className="titleSkills">
            my skills
          </p>
        </div>
        <div className="col-12 mySkillsLogo">
          <div
            style={mask ? { visibility: "hidden" } : { visibility: "visible" }}
            onMouseEnter={() => {
              changeHover(true);
            }}
            onMouseLeave={() => {
              changeHover(false);
            }}
            className="wrapperLogos"
          >
            <div className="logoCuomn1">
              <LogoImage imageSrc={jsLogo} imageAlt={"js logo"} />
              <LogoImage imageSrc={bootstrapLogo} imageAlt={"bootstrap logo"} />
              <LogoImage imageSrc={sassLogo} imageAlt={"sass logo"} />
              <LogoImage imageSrc={cssLogo} imageAlt={"css logo"} />
              <LogoImage imageSrc={htmlLogo} imageAlt={"html logo"} />
            </div>
            <div className="logoCuomn2">
              <LogoImage imageSrc={reactLogo} imageAlt={"react logo"} />
              <LogoImage imageSrc={reduxLogo} imageAlt={"redux logo"} />
              <LogoImage imageSrc={muiLogo} imageAlt={"mui logo"} />
              <LogoImage imageSrc={gsapLogo} imageAlt={"gsap logo"} />
              <LogoImage imageSrc={gitLogo} imageAlt={"git-logo"} />
            </div>
            <div className="logoCuomn3">
              <LogoImage imageSrc={framerLogo} imageAlt={"framer logo"} />
              <LogoImage imageSrc={TSLogo} imageAlt={"typescript logo"} />
              <LogoImage imageSrc={tailwindLogo} imageAlt={"tailwind logo"} />
              <LogoImage imageSrc={formicLogo} imageAlt={"formik logo"} />
              <LogoImage imageSrc={gitHubLogo} imageAlt={"github logo"} />
            </div>
          </div>
        </div>
      </>
    );
  }
);
export default AboutSection;
