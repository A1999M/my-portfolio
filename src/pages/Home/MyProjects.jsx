import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/all";
import SplitType from "split-type";
import tnganImage from "../../assets/image/tngan.png";
import myOwnPortfolio from "../../assets/image/myOwnPortfolio.png";
import youtubeImage from "../../assets/image/youtubeClone.png";
import EachProject from "./EachProject";
import { gsap } from "gsap";

export default function MyProjects({ mask }) {
  let scopeRef = useRef(null);
  let titleRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let splitTitle = new SplitType(titleRef.current);

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
    }, scopeRef.current);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <>
      <div
        style={
          mask
            ? { visibility: "hidden", cursor: "pointer" }
            : { visibility: "visible", cursor: "pointer" }
        }
        ref={scopeRef}
        className="col-12 myProjects"
      >
        <div className="wrapperTitleProjects">
          <p ref={titleRef} className="titleProject">
            my projects
          </p>
        </div>
        <ul className="wrapperProjects">
          <EachProject
            name="ecommerce clone (awwwards site of the day)"
            index={3}
            imageSrc={
              "https://kulbachny.com/wp-content/uploads/2021/01/jg-cosmos.jpg"
            }
          />
          <EachProject
            name="tangan clone (awwwards site of the day)"
            index={2}
            imageSrc={tnganImage}
          />
          <EachProject
            name="my own portfolio"
            index={4}
            imageSrc={myOwnPortfolio}
          />
          <EachProject name="youtube clone" index={1} imageSrc={youtubeImage} />
        </ul>
      </div>
    </>
  );
}
