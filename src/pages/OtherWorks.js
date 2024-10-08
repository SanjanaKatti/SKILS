import NavigationBar from "@/modules/HomePage/Components/NavigationBar";

const OtherWorks = () => {
  const textStyleMain = {
    fontSize: "60px",
    textTransform: "uppercase",
    letterSpacing: "2px",
  };
  return (
    <div>
      <NavigationBar currentPage="OtherWorks" />
      <div className="flex flex-col justify-center items-center">
        <div>
          <h1
            style={textStyleMain}
            className="text-6xl text-red-500 font-bold pt-36"
          >
            OTHER WORKS
          </h1>
        </div>
        <div className="m-10 flex flex-row">
          <div className="border border-red-900 m-4">
            <iframe
              width="500"
              height="315"
              src="https://www.youtube.com/embed/uflxiKkcrU&t=1s"
            ></iframe>
          </div>
          <div className="border border-red-900 m-4">
            <iframe
              width="500"
              height="315"
              src="https://www.youtube.com/embed/uNBvUKDWCPQ"
            ></iframe>
          </div>
        </div>
        <div className="m-10 flex flex-row">
          <div className="border border-red-900 m-4">
            <iframe
              width="500"
              height="315"
              src="https://www.youtube.com/embed/Rv9zl4twelw"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherWorks;
