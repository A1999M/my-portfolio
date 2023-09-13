import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function MagneticBtn({ children }) {
  let magneticBtnRef = useRef(null);

  useEffect(() => {
    let xTo = gsap.quickTo(magneticBtnRef.current, "x", {
      duration: 1.8,
      ease: "Elastic.easeOut",
    });
    let yTo = gsap.quickTo(magneticBtnRef.current, "y", {
      duration: 1.8,
      ease: "Elastic.easeOut",
    });
    let handleMousePos = (e) => {
      let { width, height, left, top } =
        magneticBtnRef.current.getBoundingClientRect();
      let x = e.clientX - (width / 2 + left);
      let y = e.clientY - (height / 2 + top);
      xTo(x);
      yTo(y);
    };
    magneticBtnRef.current.addEventListener("mousemove", handleMousePos);
    magneticBtnRef.current.addEventListener("mouseleave", () => {
      xTo(0);
      yTo(0);
    });
  }, []);

  return React.cloneElement(children, { ref: magneticBtnRef });
}
