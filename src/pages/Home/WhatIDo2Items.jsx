import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { motion } from "framer-motion";
import SplitType from "split-type";

export default function WhatIDo2Items({ title, desc, mask }) {
  const [isHover, setIsHover] = useState(false);
  let scopeRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let items = gsap.utils.toArray(".titleWID");

    let ctx = gsap.context(() => {
      items.map((item) => {
        let splitTitle = new SplitType(item);
        gsap.fromTo(
          splitTitle.chars,
          { opacity: 1, clipPath: "inset(0% 100% 0% 0%)" },
          {
            opacity: 1,
            clipPath: "inset(0% 0% 0% 0%)",
            stagger: 0.45,
            ease: "none",
            scrollTrigger: {
              trigger: item,
              start: "center 85%",
              end: "center 78%",
              scrub: 1,
            },
          }
        );
      });
    }, scopeRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={scopeRef} className="col-12">
      <div className="wrapperWhatIDo2">
        <p
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          className="titleWID"
        >
          {title}
        </p>
        {mask ? null : (
          <motion.p
            initial={{ opacity: 1 }}
            animate={isHover ? { opacity: 1 } : { opacity: 1 }}
            transition={{ type: "tween", duration: 0.1 }}
            className="descWID"
          >
            {desc}
          </motion.p>
        )}
      </div>
    </div>
  );
}
