import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const HomepageGallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "/Image1.jpeg",
    "/Image2.jpeg",
    "/Image3.jpeg",
    "/Image4.jpeg",
  ];
  const previousImage = () => {
    currentImage === 0 ? setCurrentImage(3) : setCurrentImage(currentImage - 1);
  };
  const nextImage = () => {
    currentImage === 3 ? setCurrentImage(0) : setCurrentImage(currentImage + 1);
  };
  return (
    <div className="flex flex-col justify-center items-center m-20">
      <div>
        <h1 className="text-6xl mb-10">Gallery</h1>
      </div>
      <div className="flex flex-row justify-between">
        <button onClick={previousImage}>
          <FaChevronLeft />
        </button>
        <img src={images[currentImage]} alt="image" className="w-2/3" />
        <button onClick={nextImage}>
          <FaChevronRight />
        </button>
        <div></div>
      </div>
    </div>
  );
};
export default HomepageGallery;
