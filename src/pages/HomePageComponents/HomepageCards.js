const HomePageCards = () => {
  return (
    <div className="bg-slate-900 flex flex-row justify-center items-center m-2">
      <div className="w-1/4 bg-slate-950 flex flex-col justify-center items-center p-10 m-5">
        <div className="w-1/3 mt-6 style={{ height: '30px' }}">
          <img
            src="/desktop-solid.svg"
            alt="Desktop SVG"
            style={{ height: "100%" }}
          />
        </div>
        <div className="flex flex-col items-center mt-8">
          <h2 className="text-4xl text-white font-bold">ONLINE</h2>
          <h2 className="text-4xl text-white font-bold">CLASSES</h2>
        </div>
        <div className="mt-6">
          <p>Dedication over distance</p>
        </div>
        <div className="rounded-lg bg-red-600 mt-20 p-3">INQUIRE NOW</div>
      </div>
      <div className="w-1/4 bg-slate-950 flex flex-col justify-center items-center p-10 m-5">
        <div className="w-1/3 style={{ height: '30px' }}">
          <img
            src="/camera-retro-solid.svg"
            alt="Camera SVG"
            style={{ height: "100%" }}
          />
        </div>
        <div className="flex flex-col items-center mt-6">
          <h2 className="text-4xl text-white font-bold">STAGE</h2>
          <h2 className="text-4xl text-white font-bold">PERFORMANCES</h2>
        </div>
        <div className="mt-6">
          <p>
            To dance is to be outside yourself, bigger, stronger, more
            beautiful.{" "}
          </p>
        </div>
        <div className="rounded-lg bg-red-600 mt-20 p-3">VIEW MORE</div>
      </div>
      <div className="w-1/4 bg-slate-950 flex flex-col justify-center items-center p-10 m-5">
        <div className="w-1/3 style={{ height: '30px' }}">
          <img
            src="/user-tie-solid.svg"
            alt="Desktop SVG"
            style={{ height: "100%" }}
          />
        </div>
        <div className="flex flex-col items-center mt-6">
          <h2 className="text-4xl text-white font-bold">PROFESSIONAL</h2>
          <h2 className="text-4xl text-white font-bold">TRAINING</h2>
        </div>
        <div className="mt-6">
          <p>
            We are what we repeatedly do. Excellence, then, is not an act, but a
            habit.
          </p>
        </div>
        <div className="rounded-lg bg-red-600 mt-10 p-3">INQUIRE NOW</div>
      </div>
    </div>
  );
};
export default HomePageCards;
