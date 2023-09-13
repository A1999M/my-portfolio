import { useState, useEffect } from "react";

export default function useMousePosition() {
  let [position, setPosition] = useState({ x: null, y: null });

  let handlePosition = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handlePosition);
    return () => {
      window.removeEventListener("mousemove", handlePosition);
    };
  });

  return position;
}
