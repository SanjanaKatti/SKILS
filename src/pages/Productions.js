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
    currentImage === 0 ? setCurrentImage(images.length - 1) : setCurrentImage(currentImage - 1);
  };

  const nextImage = () => {
    currentImage === images.length - 1 ? setCurrentImage(0) : setCurrentImage(currentImage + 1);
  };

  return (
    <div>
      <NavigationBar currentPage="Productions" />
      <div className="flex flex-col justify-center items-center">
        {/* Header */}
        <div className="font-bold mb-20 mt-36 text-red-500 text-center">
          <h1 className="text-4xl md:text-6xl">PRODUCTIONS</h1>
        </div>

        {/* Image Carousel */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full px-4">
          <button onClick={previousImage} className="text-xl md:text-3xl p-2">
            <FaChevronLeft />
          </button>
          <img src={images[currentImage]} alt="Slide" className="w-full md:w-1/2 max-h-96 object-cover" />
          <button onClick={nextImage} className="text-xl md:text-3xl p-2">
            <FaChevronRight />
          </button>
        </div>

        {/* YouTube Videos */}
        <div className="m-10 flex flex-col md:flex-row justify-center items-center gap-6">
          <div className="border border-red-900 max-w-full w-full md:w-[500px]">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/5G_MxTh-Gk0"
              title="YouTube Video"
            ></iframe>
          </div>
          <div className="border border-red-900 max-w-full w-full md:w-[500px]">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/B2_2AJi7SRY"
              title="YouTube Video"
            ></iframe>
          </div>
        </div>

        <div className="m-10 flex flex-col md:flex-row justify-center items-center gap-6">
          <div className="border border-red-900 max-w-full w-full md:w-[500px]">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/5G_MxTh-Gk0"
              title="YouTube Video"
            ></iframe>
          </div>
          <div className="border border-red-900 max-w-full w-full md:w-[500px]">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/RFCGbQ6nKqc"
              title="YouTube Video"
            ></iframe>
          </div>
        </div>

        <div className="m-10 flex flex-col md:flex-row justify-center items-center gap-6">
          <div className="border border-red-900 max-w-full w-full md:w-[500px]">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/5Ra0cCefSGw&t=2s"
              title="YouTube Video"
            ></iframe>
          </div>
          <div className="border border-red-900 max-w-full w-full md:w-[500px]">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/mIXP_Z8USp8"
              title="YouTube Video"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productions;
