import { useEffect, useRef } from "react";
import SplitType from "split-type";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function HowHelp({ mask, changeMix, changeHover }) {
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
        stagger: 0.05,
        scrollTrigger: {
          scrub: 1,
          trigger: descRef.current,
          start: "center 75%",
          end: "bottom 65%",
        },
      });
    }, scopeRef.current);

    return () => {
      ctx.revert();
      ScrollTrigger.refresh();
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
          {mask ? (
            <p
              onMouseEnter={() => {
                changeHover(true);
                changeMix(false);
              }}
              onMouseLeave={() => {
                changeHover(false);
                changeMix(true);
              }}
              ref={descRef}
              className="descHowHelp"
            >
              Thanks For Reading a Little Bit About Me. I’m Always Happy To Chat
              You Can Send Me An <span style={{ color: "#ffd700" }}>Email</span>{" "}
              To See If We're a Good Fit.
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
              ref={descRef}
              className="descHowHelp"
            >
              I'm Currently Looking For A Job In <span>Full Time Remote </span>.
              Feel Free To Contact Me If You Want To Collaborate On Future
            </p>
          )}
        </div>
      </div>
    </>
  );
}
