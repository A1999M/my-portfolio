import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import SplitType from "split-type";
import demoWorks from "../../assets/videos/Minh Pham - Multidisciplinary Designer.mp4";

export default function DemoWorks() {
  let scopeRef = useRef(null);
  let titleRef = useRef(null);
  let demoWorksVideo = useRef(null);

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

      gsap.from(demoWorksVideo.current, {
        clipPath: "inset(0% 100% 0% 100%)",
        ease: "none",
        scrollTrigger: {
          trigger: demoWorksVideo.current,
          start: "top 100%",
          end: "center 67%",
          scrub: 1,
        },
      });
    }, scopeRef.current);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <>
      <div className="col-12">
        <div ref={scopeRef} className="wrapperDemoWorksTitle">
          <p ref={titleRef} className="titleDemo">
            demo of my works
          </p>
        </div>
      </div>
      <div className="col-12">
        <div ref={demoWorksVideo} className="wrapperDemoWorksVideo">
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
