import React from "react";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function MagneticNav({ children }) {
  let magneticRef = useRef();

  useEffect(() => {
    let xTo = gsap.quickTo(magneticRef.current, "x", {
      duration: 2,
      ease: "Elastic.easeOut",
    });
    let yTo = gsap.quickTo(magneticRef.current, "y", {
      duration: 2,
      ease: "Elastic.easeOut",
    });

    magneticRef.current.addEventListener("mousemove", (e) => {
      let { width, height, top, left } =
        magneticRef.current.getBoundingClientRect();
      let x = e.clientX - (width / 2 + left);
      let y = e.clientY - (height / 2 + top);

      xTo(x);
      yTo(y);
    });
    magneticRef.current.addEventListener("mouseleave", () => {
      xTo(0);
      yTo(0);
    });
  }, []);

  return React.cloneElement(children, { ref: magneticRef });
}
