import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/all";
import SplitType from "split-type";
import EachProject from "./EachProject";
import { gsap } from "gsap";

export default function MyProjects() {
  let scopeRef = useRef(null);
  let titleRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let splitTitle = new SplitType(titleRef.current);
    let allProjects = gsap.utils.toArray(".eachProject");

    let tl = gsap.timeline({
      ease: "none",
      scrollTrigger: {
        trigger: titleRef.current,
        toggleActions: "restart none none reverse",
        endTrigger: allProjects[0],
        scrub: 1,
        start: "top 80%",
        end: "bottom 25%",
      },
    });

    let ctx = gsap.context(() => {
      allProjects.forEach((item) => {
        let name = item.querySelector(".nameOfProject");
        let splitName = new SplitType(name);
        tl.from(
          item,
          {
            opacity: 0,
            y: 100,
            duration: 1,
            ease: "Back.easeOut",
          },
          "<0.2"
        );
        tl.from(
          splitName.chars,
          {
            y: 50,
            opacity: 0,
            clipPath: "inset(100% 0% 100% 0%)",
            stagger: 0.02,
            duration: 0.7,
            ease: "Expo.easeOut",
          },
          "<0.2"
        );
      });

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
      tl.kill();
      ctx.revert();
    };
  }, []);

  return (
    <>
      <div ref={scopeRef} className="col-12 myProjects">
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
            imageSrc={
              "https://kulbachny.com/wp-content/uploads/2021/11/612c973f0e8c5808783448.jpeg"
            }
          />
          <EachProject
            name="my own portfolio"
            index={4}
            imageSrc={
              "https://kulbachny.com/wp-content/uploads/2021/11/5cb5ecda03fc1741923404.jpeg"
            }
          />
          <EachProject
            name="youtube clone"
            index={1}
            imageSrc={
              "https://kulbachny.com/wp-content/uploads/2022/11/Crocs.jpeg"
            }
          />
        </ul>
      </div>
    </>
  );
}
