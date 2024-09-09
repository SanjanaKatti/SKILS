import { useEffect, useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const CoverPic = () => {
  const [offsetX, setOffsetX] = useState(0);
  const circleClasses =
    "w-12 h-12 rounded-full flex justify-center items-center";
  const iconStyles = { fontSize: "24px", color: "#DA3816" }; // Corrected the color

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setOffsetX(scrollPos * 0.05);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="flex justify-center mb-20 pt-24">
      <div
        className="relative bg-cover bg-center h-screen w-full"
        style={{
          backgroundImage: 'url("/mainhomepagepic.jpeg")',
          transform: `translateX(-${offsetX}px)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        <div className="absolute bottom-0 w-full text-white text-center py-5">
          <h1 className="text-8xl font-roboto pt-8 tracking-wide">
            S H R U T I P A T K I
          </h1>
          <h3 className="text-4xl font-bold pt-8">KATHAK EXPONENT</h3>
          <div className="flex justify-center mt-8 mb-8 gap-4">
            <a
              href="https://www.instagram.com/skils_shruti"
              target="_blank"
              rel="noopener noreferrer"
              style={{ background: "white" }}
              className={circleClasses}
            >
              <FaInstagram style={iconStyles} />
            </a>
            <a
              href="https://www.youtube.com/@ShrutiPatki"
              target="_blank"
              rel="noopener noreferrer"
              style={{ background: "white" }}
              className={circleClasses}
            >
              <FaYoutube style={iconStyles} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverPic;
