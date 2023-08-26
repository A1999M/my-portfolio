import { useEffect, useRef } from "react";
import SplitType from "split-type";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function HowHelp() {
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
          start: "top 95%",
          end: "bottom 0%",
          toggleActions: "restart none none reverse",
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
        <div className="wrapperHowToHelp">
          <div className="wrapperTitleHelp">
            <p ref={titleRef} className="titleHelp">
              Let’s work together
            </p>
          </div>
          <p ref={descRef} className="descHowHelp">
            I'm Currently Looking For A Job In <span>Full Time Remote </span>.
            Feel Free To Contact Me If You Want To Collaborate On Future
          </p>
        </div>
      </div>
    </>
  );
}
