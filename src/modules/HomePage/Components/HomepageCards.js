import { useState } from "react";
import Link from "next/link";

const HomePageCards = () => {
  const [showForm, setShowForm] = useState(false);

  const handleInquireClick = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="bg-black-500 flex flex-col sm:flex-row justify-center items-center m-2">
      {/* Card 1: Online Classes */}
      <div className="w-full sm:w-1/4 bg-slate-950 flex flex-col justify-center items-center p-10 m-5">
        <div className="w-1/3 mt-6">
          <img src="/desktop-solid.svg" alt="Desktop SVG" />
        </div>
        <div className="flex flex-col items-center mt-8">
          <h2 className="text-3xl sm:text-4xl text-white font-bold">ONLINE</h2>
          <h2 className="text-3xl sm:text-4xl text-white font-bold">CLASSES</h2>
        </div>
        <div className="mt-6">
          <p className="text-sm sm:text-base">Dedication over distance</p>
        </div>
        <div
          className="rounded-lg bg-red-600 mt-20 p-3 cursor-pointer"
          onClick={handleInquireClick}
        >
          INQUIRE NOW
        </div>
      </div>

      {/* Card 2: Stage Performances */}
      <div className="w-full sm:w-1/4 bg-slate-950 flex flex-col justify-center items-center p-10 m-5">
        <div className="w-1/3 mt-6">
          <img
            src="/camera-retro-solid.svg"
            alt="Camera SVG"
            className="h-full"
          />
        </div>
        <div className="flex flex-col items-center mt-6">
          <h2 className="text-3xl sm:text-4xl text-white font-bold">STAGE</h2>
          <h2 className="text-3xl sm:text-4xl text-white font-bold">PERFORMANCES</h2>
        </div>
        <div className="mt-6">
          <p className="text-sm sm:text-base">
            To dance is to be outside yourself, bigger, stronger, more
            beautiful.
          </p>
        </div>
        <Link href="/Gallery">
          <div className="rounded-lg bg-red-600 mt-20 p-3 cursor-pointer">
            VIEW MORE
          </div>
        </Link>
      </div>

      {/* Card 3: Professional Training */}
      <div className="w-full sm:w-1/4 bg-slate-950 flex flex-col justify-center items-center p-10 m-5">
        <div className="w-1/3 mt-6">
          <img
            src="/user-tie-solid.svg"
            alt="Professional SVG"
            className="h-full"
          />
        </div>
        <div className="flex flex-col items-center mt-6">
          <h2 className="text-3xl sm:text-4xl text-white font-bold">PROFESSIONAL</h2>
          <h2 className="text-3xl sm:text-4xl text-white font-bold">TRAINING</h2>
        </div>
        <div className="mt-6">
          <p className="text-sm sm:text-base">
            We are what we repeatedly do. Excellence, then, is not an act, but a
            habit.
          </p>
        </div>
        <div
          className="rounded-lg bg-red-600 mt-10 p-3 cursor-pointer"
          onClick={handleInquireClick}
        >
          INQUIRE NOW
        </div>
      </div>

      {/* Inquiry Form */}
      {showForm && (
        <div
          className={`fixed top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center bg-black bg-opacity-90 transition-all duration-500`}
        >
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-2xl font-bold mb-4">Inquire Now</h2>
            <form className="flex flex-col space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="border p-2 rounded"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border p-2 rounded"
              />
              <textarea
                placeholder="Your Inquiry"
                className="border p-2 rounded"
                rows="4"
              ></textarea>
              <button
                type="submit"
                className="bg-red-600 text-white p-3 rounded-lg"
              >
                Submit
              </button>
            </form>
            <button
              className="mt-4 text-red-600 underline"
              onClick={handleInquireClick}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePageCards;
