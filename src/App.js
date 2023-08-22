import { useLayoutEffect, useState } from "react";
import Home from "./pages/Home";
import MaskStatus from "./context/MaskStatus";
import AboutUs from "./pages/AboutUs";
import LocomotiveScroll from "locomotive-scroll";
// import Navbar from "./components/Navbar";
import Work from "./pages/Work";
import StickyMenu from "./components/StickyMenu";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

export default function App() {
  let [mixStatus, setMixStatus] = useState(true);

  useLayoutEffect(() => {
    let locoScroll = new LocomotiveScroll({
      lenisOptions: {
        wheelMultiplier: 1.4,
        lerp: 0.05,
      },
    });
  }, []);

  return (
    <>
      <MaskStatus.Provider value={[mixStatus, setMixStatus]}>
        {/* <Navbar /> */}
        <StickyMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </MaskStatus.Provider>
    </>
  );
}
