import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import SplitType from "split-type";
import demoWorks from "../../assets/videos/Minh Pham - Multidisciplinary Designer.mp4";

export default function DemoWorks({ mask }) {
  let scopeRef = useRef(null);
  let titleRef = useRef(null);
  let demoWorksVideo = useRef(null);
  let [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    let handleResize = () => {
      setSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [size]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let splitTitle = new SplitType(titleRef.current);

    let ctx = gsap.context(() => {
      gsap.from(splitTitle.chars, {
        opacity: 0,
        perspective: 200,
        rotate: 27,
        y: 100,
        stagger: 0.05,
        duration: 1,
        ease: "Expo.easeOut",
        scrollTrigger: {
          toggleActions: "restart none none reverse",
          trigger: titleRef.current,
          start: "top 90%",
          end: "bottom 0%",
        },
      });

      if (size > 768) {
        gsap.from(demoWorksVideo.current, {
          clipPath:
            size > 768 ? "inset(0% 100% 0% 100%)" : "inset(0% 100% 0% 0%)",
          ease: "none",
          scrollTrigger: {
            trigger: demoWorksVideo.current,
            start: size > 992 ? "top 100%" : "top 120%",
            end: "center 67%",
            scrub: 1,
          },
        });
      }
    }, scopeRef.current);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <>
      <div id="worksSection" className="col-12">
        <div ref={scopeRef} className="wrapperDemoWorksTitle">
          <p
            style={mask ? { visibility: "hidden" } : { visibility: "visible" }}
            ref={titleRef}
            className="titleDemo"
          >
            demo of my works
          </p>
        </div>
      </div>
      <div className="col-12">
        <div
          style={mask ? { visibility: "hidden" } : { visibility: "visible" }}
          ref={demoWorksVideo}
          className="wrapperDemoWorksVideo"
        >
          <video
            src={demoWorks}
            style={{ height: "90vh", width: "100%", objectFit: "cover" }}
            autoPlay
            muted
            controls={false}
          ></video>
        </div>
      </div>
    </>
  );
}
