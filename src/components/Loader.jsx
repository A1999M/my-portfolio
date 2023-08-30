import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import "./style.scss";

const words = [
  "Hello",
  "Bonjour",
  "Ciao",
  "Olà",
  "سلام",
  "やあ",
  "Hallå",
  "Guten tag",
  "Hallo",
];

export default function Loader({ finishPreLoader }) {
  let loaderRef = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index == words.length - 1) {
      gsap.to(loaderRef.current, {
        clipPath: "circle(140% at 50% -300%)",
        ease: "Power4.easeOut",
        duration: 2.2,
      });
      setTimeout(() => {
        finishPreLoader(false);
      }, 600);
      return;
    }
    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index == 0 ? 1000 : 130
    );
  }, [index]);

  return (
    <>
      <div ref={loaderRef} className="loader">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {words[index]}
        </motion.p>
      </div>
    </>
  );
}
