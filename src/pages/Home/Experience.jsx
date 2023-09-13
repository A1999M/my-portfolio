import { useEffect, useRef } from "react";
import SplitType from "split-type";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function Experience() {
  let scopeRef = useRef(null);
  let titleRef = useRef(null);
  let descRef = useRef(null);

  useEffect(() => {
    let splitTitle = new SplitType(titleRef.current);
    let splitDesc = new SplitType(descRef.current);

    gsap.registerPlugin(ScrollTrigger);
    let ctx = gsap.context(() => {
      gsap.from(splitTitle.chars, {
        opacity: 0,
        y: 100,
        duration: 1,
        ease: "Expo.easeOut",
        stagger: 0.02,
        scrollTrigger: {
          trigger: titleRef.current,
          toggleActions: "restart none none reverse",
          start: "top 90%",
          end: "bottom 0%",
        },
      });
      gsap.from(splitDesc.chars, {
        opacity: 0.3,
        duration: 1,
        ease: "Expo.easeOut",
        stagger: 0.02,
        scrollTrigger: {
          scrub: 1,
          trigger: descRef.current,
          start: "top 85%",
          end: "center 33%",
        },
      });
    }, scopeRef.current);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <>
      <div ref={scopeRef} className="col-12">
        <div className="wrapperExperience">
          <div className="wrapperTitleExperience">
            <p ref={titleRef} className="titleExperience">
              my Experience
            </p>
          </div>
          <div className="wrapperDescExperience">
            <p ref={descRef} className="descExperience">
              With A Solid Track Record In <span> Designing Websites </span> And
              Apps, I Deliver Strong And User-Friendly Digital Designs. Solid
              Company Branding Is The Foundation Of Any Succesful Website.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
