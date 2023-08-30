import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import SplitType from "split-type";

export default function WhatIDo({ mask, changeMix, changeHover }) {
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
          toggleActions: "restart none none reverse",
          start: "top 85%",
          end: "bottom 0%",
        },
      });
      gsap.from(descSplit.chars, {
        opacity: 0.3,
        stagger: 0.3,
        ease: "none",
        scrollTrigger: {
          trigger: whatIdoRef.current,
          start: "top 85%",
          end: "center 55%",
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
              ref={whatIdoRef}
              className="textWhatIDo"
            >
              I Develop Websites And Web Applications, Using Animation Libraries
              Like
              <span style={{ color: "#ec4e39" }}> GSAP </span>and
              <span style={{ color: "#ec4e39" }}> Framer Motion </span>
              That Makes My Application More Interesting Than It Actually is.
            </p>
          ) : (
            <p ref={whatIdoRef} className="textWhatIDo">
              When I'm Not At The Computer, I'm Usually Hanging Out With My Two
              Cats, Going To The Gym, Take
              <span style={{ color: "#ffd700" }}> Nature </span>Walks With My
              Friends. Or Study Investment Books.
            </p>
          )}
        </div>
      </div>
    </>
  );
}
