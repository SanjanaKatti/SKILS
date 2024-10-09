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
    <div className="flex flex-col justify-center justify-between items-center m-20 mx-auto max-w-[1000px]">
      <div>
        <h1 className="justify-center text-6xl font-bold text-red-600 mb-10">
          Gallery
        </h1>
      </div>
      <div className="flex flex-row justify-between items-center w-full">
        <button onClick={previousImage}>
          <FaChevronLeft />
        </button>
        <img
          src={images[currentImage]}
          alt="image"
          className="w-2/3 h-[500px] object-cover mx-auto"
        />
        <button onClick={nextImage}>
          <FaChevronRight />
        </button>
        <div></div>
      </div>
    </div>
  );
};
export default HomepageGallery;
