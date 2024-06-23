import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const FolSub = () => {
  let circleClasses = "inline-block p-4 rounded-full w-16 mx-2 my-4";
  let iconStyles = { color: "#DA3816", fontSize: "2em" };
  return (
    <div className="flex flex-row justify-between items-center border border-slate-600 mx-20">
      <div className="text-4xl ml-10">Please Follow and Subscribe</div>
      <div className="flex flex-row justify-between mr-10">
        <div style={{ background: "white" }} className={circleClasses}>
          <FaFacebook style={iconStyles} />
        </div>
        <div style={{ background: "white" }} className={circleClasses}>
          <FaInstagram style={iconStyles} />
        </div>
        <div style={{ background: "white" }} className={circleClasses}>
          <FaYoutube style={iconStyles} />
        </div>
      </div>
    </div>
  );
};
export default FolSub;
