import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import SplitType from "split-type";

export default function WhatIDo() {
  let whatIdoRef = useRef(null);
  let titleRef = useRef(null);
  let scopeRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let titleSplit = new SplitType(titleRef.current);
    const descSplit = new SplitType(whatIdoRef.current);

    let ctx = gsap.context(() => {
      gsap.from(titleSplit.chars, {
        opacity: 0,
        y: 100,
        perspective: 200,
        stagger: 0.05,
        duration: 1,
        ease: "Expo.easeOut",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
          end: "bottom 0%",
          toggleActions: "restart reverse restart reverse",
        },
      });
      gsap.from(descSplit.chars, {
        opacity: 0.3,
        stagger: 0.3,
        duration: 0.5,
        ease: "none",
        scrollTrigger: {
          trigger: whatIdoRef.current,
          start: "top 85%",
          end: "center 45%",
          scrub: 2,
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
        <div className="wrapperWhatIdo">
          <div className="wrapperTitleWhatIdo">
            <p ref={titleRef} className="titleWhatIdo">
              what i do
            </p>
          </div>
          <p ref={whatIdoRef} className="textWhatIDo">
            I Build Scalable <span>Websites</span> From Scratch That Fit
            Seamlessly With design. My Focus Is On <span>Micro Animations</span>{" "}
            , Transitions And Interaction. For Content Management I Use Kirby
            CMS.
          </p>
        </div>
      </div>
    </>
  );
}
