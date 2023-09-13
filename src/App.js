import { useState, useLayoutEffect, useEffect } from "react";
import Home from "./pages/Home";
import MaskStatus from "./context/MaskStatus";
import AboutUs from "./pages/AboutUs";
import LocomotiveScroll from "locomotive-scroll";
import Work from "./pages/Work";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

export default function App() {
  let [mixStatus, setMixStatus] = useState(true);
  const [index, setIndex] = useState(0);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    setWindowSize(window.innerWidth);
  }, []);

  useLayoutEffect(() => {
    if (windowSize > 992) {
      let locoScroll = new LocomotiveScroll({
        lenisOptions: {
          autoStart: false,
          wheelMultiplier: 0.8,
          lerp: 0.05,
        },
      });
    }
  }, []);

  return (
    <>
      <MaskStatus.Provider value={[mixStatus, setMixStatus, index, setIndex]}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </MaskStatus.Provider>
    </>
  );
}
