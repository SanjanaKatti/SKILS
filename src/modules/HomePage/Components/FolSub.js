import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const FolSub = () => {
  const circleClasses =
    "w-12 h-12 rounded-full flex justify-center items-center hover:animate-bounce";
  const iconStyles = { fontSize: "24px", color: "#DA3816" }; // Corrected the color

  return (
    <div className="flex justify-center m-20">
      <div className="max-w-[1000px] w-full flex flex-row justify-between items-center border border-slate-600 p-4">
        <div className="text-4xl ml-10">Please Follow and Subscribe</div>
        <div className="flex flex-row space-x-6 mr-10">
          <a
            href="https://www.facebook.com/skilshruti/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: "white" }}
            className={circleClasses}
          >
            <FaFacebook style={iconStyles} />
          </a>
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
  );
};

export default FolSub;
