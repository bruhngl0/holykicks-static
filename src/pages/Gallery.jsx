import React from "react";
import CurtainEffect from "../components/CurtainEffect.jsx"
import "../styles/gallery.scss";
import ImageComparison from "./ImageComparison.jsx";

const Gallery = () => {
  return (
    <div className="gallery">
      <div className="sidebar">
        <img src= "logo.png" className="gallery-img-1"/>
        <img src= "shoe.png" className="gallery-img-2"/>
        <img src= "one.png" className="gallery-img-3"/>
        <img src= "four.png" className="gallery-img-4"/>
    

      </div>
      <div className="gallery-right">
        <div>
          <p className="gallery-right-1">gallery</p>
        </div>
        
        <div className="gallery-right-2" >
          <ImageComparison beforeSrc= "cleanj11.png" afterSrc="dirtyj11.png"/>
        </div>
        <div className="gallery-right-3">

        </div>
      </div>
    </div>
  );
};

export default Gallery;
