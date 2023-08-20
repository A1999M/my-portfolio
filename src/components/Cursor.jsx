import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import "./style.scss";

export default function Cursor() {
  let [size, setSize] = useState(60);
  let cursorRef = useRef(null);

  useEffect(() => {
    let handleMouseMove = (e) => {
      let target = e.target;
      if (target.getAttribute("data-hover")) {
        setSize(200);
      } else {
        setSize(60);
      }
      let xTo = gsap.quickTo(cursorRef.current, "x", {
        duration: 1.8,
        ease: "Elastic.easeOut",
      });
      let yTo = gsap.quickTo(cursorRef.current, "y", {
        duration: 1.8,
        ease: "Elastic.easeOut",
      });

      let { width, height } = cursorRef.current.getBoundingClientRect();
      let x = e.clientX - width / 2;
      let y = e.clientY - height / 2;

      xTo(x);
      yTo(y);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      animate={{ width: size, height: size }}
      ref={cursorRef}
      className="customCursor"
      transition={{
        type: "spring",
      }}
    ></motion.div>
  );
}
