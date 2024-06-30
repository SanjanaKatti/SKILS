import NavigationBar from "@/modules/HomePage/Components/NavigationBar";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Productions = () => {
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
    <div>
      <NavigationBar currentPage="Productions" />
      <div className="flex flex-col justify-center items-center m-20">
        <div>
          <h1 className="text-6xl mb-10">Productions</h1>
        </div>
        <div className="flex flex-row justify-between">
          <button onClick={previousImage}>
            <FaChevronLeft />
          </button>
          <img src={images[currentImage]} alt="image" className="w-1/2" />
          <img src={images[currentImage + 1]} alt="image" className="w-1/2" />
          <button onClick={nextImage}>
            <FaChevronRight />
          </button>
        </div>
        <div className="m-10 flex flex-row">
          <div className="border border-red-900 m-4">
            <iframe
              width="500"
              height="315"
              src="https://www.youtube.com/embed/5G_MxTh-Gk0"
            ></iframe>
          </div>
          <div className="border border-red-900 m-4">
            <iframe
              width="500"
              height="315"
              src="https://www.youtube.com/embed/B2_2AJi7SRY"
            ></iframe>
          </div>
        </div>
        <div className="m-10 flex flex-row">
          <div className="border border-red-900 m-4">
            <iframe
              width="500"
              height="315"
              src="https://www.youtube.com/embed/5G_MxTh-Gk0"
            ></iframe>
          </div>
          <div className="border border-red-900 m-4">
            <iframe
              width="500"
              height="315"
              src="https://www.youtube.com/embed/RFCGbQ6nKqc"
            ></iframe>
          </div>
        </div>
        <div className="m-10 flex flex-row">
          <div className="border border-red-900 m-4">
            <iframe
              width="500"
              height="315"
              src="https://www.youtube.com/embed/5Ra0cCefSGw&t=2s"
            ></iframe>
          </div>
          <div className="border border-red-900 m-4">
            <iframe
              width="500"
              height="315"
              src="https://www.youtube.com/embed/mIXP_Z8USp8"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productions;
