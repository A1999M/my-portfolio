import { useRef, useEffect, memo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import SplitType from "split-type";
import SplitText from "../../utils/SplitText";
import "./Home.scss";

let AboutSection = memo(
  ({ changeMix, changeHover, mask, color, spanColor }) => {
    let descAboutSectionRef = useRef(null);
    let triggerDesc = useRef(null);
    let scopeRef = useRef(null);
    let titleRef = useRef(null);

    useEffect(() => {
      gsap.registerPlugin(ScrollTrigger, SplitText);

      let ctx = gsap.context(() => {
        let splitDesc = new SplitType(descAboutSectionRef.current);
        let splitTitle = new SplitType(titleRef.current);

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
      </>
    );
  }
);
export default AboutSection;
