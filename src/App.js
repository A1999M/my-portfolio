import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Navbar from "./components/Navbar";
import Work from "./pages/Work";
import StickyMenu from "./components/StickyMenu";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

export default function App() {
  return (
    <>
      <Navbar />
      <StickyMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </>
  );
}
