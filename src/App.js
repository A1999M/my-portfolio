import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Work from "./pages/Work";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </>
  );
}
