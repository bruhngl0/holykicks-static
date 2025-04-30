import Gallery from "../pages/Gallery";
import ImageComparison from "../pages/ImageComparison";
import ShoeCarousel from "./ShoeCarousel";
import "../styles/galleryMobile.scss";
import Book from "./Book";
const GalleryMobile = () => {
  return (
    <div className="m-gallery">
      <div className="m-gallery-head1">GALLERY</div>
      <div className="m-gallery-head2">BASIC PAIR CLEANING</div>
      <div className="m-gallery-pic">
        <ImageComparison beforeSrc="cleanj11.png" afterSrc="dirtyj11.png" />
      </div>
      <div className="m-gallery-head3">
        <p>HOLY SH*T, THOSE LOOK CLEAN-WANNA TRY</p>
      </div>
      <div className="m-gallery-btn">
        <button>BOOK NOW</button>
      </div>
    </div>
  );
};

export default GalleryMobile;
