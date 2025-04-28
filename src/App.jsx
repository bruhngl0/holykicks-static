import Hero from "./components/Hero";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GalleryMobile from "./components/GalleryMobile";
import Gallery from "./pages/Gallery";
import "./styles/hero.scss";
import CurtainEffect from "./components/CurtainEffect";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/curtain" element={<CurtainEffect />} />
        <Route path="/m-gallery" element={<GalleryMobile />} />
      </Routes>
    </Router>
  );
}

export default App;
