import Hero from "./components/Hero";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GalleryMobile from "./components/GalleryMobile";
import Gallery from "./pages/Gallery";
import "./styles/hero.scss";
import CurtainEffect from "./components/CurtainEffect";
import About from "./pages/about";
import Services from "./components/services";
import Contact from "./components/contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/curtain" element={<CurtainEffect />} />
        <Route path="/m-gallery" element={<GalleryMobile />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
