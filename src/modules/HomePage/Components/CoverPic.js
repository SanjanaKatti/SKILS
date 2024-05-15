const CoverPic = () => {
  return (
    <div className="flex justify-center mb-20">
      <div
        className="relative bg-cover bg-center h-screen w-2/3"
        style={{ backgroundImage: 'url("/coverpic.png")' }}
      >
        <div className="absolute bottom-0 w-full bg-black bg-opacity-40 text-white text-center py-5">
          <h1 className="text-6xl font-bold pt-8">S H R U T I P A T K I</h1>
          <h3 className="text-4xl font-bold pt-8">KATHAK EXPONENT</h3>
          <div className="flex justify-center mt-8 mb-8">
            <div className="px-2">FB</div>
            <div className="px-2">Insta</div>
            <div className="px-2">YT</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverPic;
