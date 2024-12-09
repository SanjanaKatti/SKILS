import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const FolSub = () => {
  const circleClasses =
    "w-12 h-12 rounded-full flex justify-center items-center hover:animate-bounce bg-white border border-slate-600";
  const iconStyles = "text-[#DA3816] text-xl"; // Tailwind utility classes for the icons

  return (
    <div className="flex justify-center m-8 sm:m-20">
      <div className="max-w-[1000px] w-full flex flex-col sm:flex-row justify-between items-center border border-slate-600 p-4">
        <div className="text-3xl sm:text-4xl ml-0 sm:ml-10 mb-4 sm:mb-0 text-center sm:text-left">
          Please Follow and Subscribe
        </div>
        <div className="flex flex-row sm:flex-row flex-col sm:space-x-6 space-y-4 sm:space-y-0 mr-0 sm:mr-10">
          <a
            href="https://www.facebook.com/skilshruti/"
            target="_blank"
            rel="noopener noreferrer"
            className={circleClasses}
          >
            <FaFacebook className={iconStyles} />
          </a>
          <a
            href="https://www.instagram.com/skils_shruti"
            target="_blank"
            rel="noopener noreferrer"
            className={circleClasses}
          >
            <FaInstagram className={iconStyles} />
          </a>
          <a
            href="https://www.youtube.com/@ShrutiPatki"
            target="_blank"
            rel="noopener noreferrer"
            className={circleClasses}
          >
            <FaYoutube className={iconStyles} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FolSub;
