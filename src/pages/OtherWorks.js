import NavigationBar from "@/modules/HomePage/Components/NavigationBar";

const OtherWorks = () => {
  const textStyleMain = {
    textTransform: "uppercase",
    letterSpacing: "2px",
  };

  return (
    <div>
      <NavigationBar currentPage="OtherWorks" />
      <div className="flex flex-col justify-center items-center px-4">
        {/* Header */}
        <div className="pt-36 text-center">
          <h1
            style={textStyleMain}
            className="text-4xl md:text-6xl text-red-500 font-bold"
          >
            OTHER WORKS
          </h1>
        </div>

        {/* YouTube Videos Row 1 */}
        <div className="m-6 flex flex-col md:flex-row justify-center items-center gap-6">
          <div className="border border-red-900 w-full max-w-[500px]">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/uflxiKkcrU&t=1s"
              title="YouTube video 1"
            ></iframe>
          </div>
          <div className="border border-red-900 w-full max-w-[500px]">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/uNBvUKDWCPQ"
              title="YouTube video 2"
            ></iframe>
          </div>
        </div>

        {/* YouTube Videos Row 2 */}
        <div className="m-6 flex flex-col md:flex-row justify-center items-center gap-6">
          <div className="border border-red-900 w-full max-w-[500px]">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/Rv9zl4twelw"
              title="YouTube video 3"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherWorks;
