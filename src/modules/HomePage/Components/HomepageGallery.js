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
    // Wrap around to the last image when at the first image
    setCurrentImage((prevImage) => (prevImage === 0 ? images.length - 1 : prevImage - 1));
  };

  const nextImage = () => {
    // Wrap around to the first image when at the last image
    setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
  };

  return (
    <div className="flex flex-col justify-center items-center m-20 mx-auto max-w-[1000px]">
      <div>
        <h1 className="text-6xl font-bold text-red-600 mb-10">Gallery</h1>
      </div>
      <div className="flex flex-row justify-between items-center w-full">
        <button onClick={previousImage}>
          <FaChevronLeft className="text-4xl text-red-600" />
        </button>
        <img
          src={images[currentImage]}
          alt="Gallery Image"
          className="w-2/3 h-[500px] object-cover mx-auto"
        />
        <button onClick={nextImage}>
          <FaChevronRight className="text-4xl text-red-600" />
        </button>
      </div>
    </div>
  );
};

export default HomepageGallery;
