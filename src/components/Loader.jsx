import { useEffect, useState, useContext, useRef } from "react";
import MaskStatus from "../context/MaskStatus";
import { motion } from "framer-motion";
import "./style.scss";

const words = [
  "Hello",
  "Bonjour",
  "Ciao",
  "Привет",
  "Olà",
  "سلام",
  "やあ",
  "Hallå",
  "Guten tag",
  "Hallo",
];

export default function Loader() {
  const [, , index, setIndex] = useContext(MaskStatus);
  let [loaderSize, setLoaderSize] = useState({ height: 0, width: 0 });
  const timeoutRef = useRef();

  useEffect(() => {
    setLoaderSize({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  }, []);

  useEffect(() => {
    if (index === words.length - 1) return;
    timeoutRef.current = setTimeout(
      () => {
        setIndex((index) => index + 1);
      },
      index === 0 ? 1500 : 120
    );

    return () => clearInterval(timeoutRef.current);
  }, [index]);

  return (
    <motion.div
      initial={{ clipPath: "circle(150% at 50% 50%)" }}
      animate={
        index === words.length - 1 && { clipPath: "circle(140% at 50% -300%)" }
      }
      transition={{ type: "tween", ease: "easeOut", duration: 0.8 }}
      style={{ height: loaderSize.height, width: "100vw" }}
      className="loader"
    >
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {words[index]}
      </motion.p>
    </motion.div>
  );
}
