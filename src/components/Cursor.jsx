import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import "./style.scss";

export default function Cursor() {
  let cursorRef = useRef(null);

  useEffect(() => {
    let handleMouseMove = (e) => {
      let xTo = gsap.quickTo(cursorRef.current, "x", {
        duration: 2,
        ease: "Elastic.easeOut",
      });
      let yTo = gsap.quickTo(cursorRef.current, "y", {
        duration: 2,
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

  return <div ref={cursorRef} className="customCursor"></div>;
}
