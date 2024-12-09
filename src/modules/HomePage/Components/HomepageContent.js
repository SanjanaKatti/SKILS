import { useState } from "react";
import Link from "next/link";

const HomepageContent = () => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div>
      <div className="flex flex-col justify-center items-center mb-10">
        <div className="font-roboto justify-items-start tracking-wide">
          <div className="flex flex-row flex-wrap">
            <div className="text-4xl sm:text-6xl font-bold text-white">S</div>
            <div className="text-4xl sm:text-6xl font-bold text-gray-600">CHOOL OF</div>
          </div>
          <div className="flex flex-row flex-wrap">
            <div className="text-4xl sm:text-6xl font-bold text-white">K</div>
            <div className="text-4xl sm:text-6xl font-bold text-gray-600">ATHAK &</div>
          </div>
          <div className="flex flex-row flex-wrap">
            <div className="text-4xl sm:text-6xl font-bold text-white">I</div>
            <div className="text-4xl sm:text-6xl font-bold text-gray-600">
              NTERDISCIPLINARY
            </div>
          </div>
          <div className="flex flex-row flex-wrap">
            <div className="text-4xl sm:text-6xl font-bold text-white">L</div>
            <div className="text-4xl sm:text-6xl font-bold text-gray-600">EARNING WITH</div>
          </div>
          <div className="flex flex-row flex-wrap">
            <div className="text-4xl sm:text-6xl font-bold text-white">S</div>
            <div className="text-4xl sm:text-6xl font-bold text-gray-600">HRUTI</div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-col md:flex-row justify-center text-white mt-5 mb-20">
          <p className="text-xl sm:text-3xl pr-2">
            Dance Is The Hidden Language Of The Soul
          </p>
          <p className="text-lg sm:text-xl italic content-end"> - Martha Graham</p>
        </div>

        <div className="flex flex-col mx-auto max-w-[1000px] items-center justify-between content-center h-full">
          <div>
            <h2 className="text-4xl sm:text-6xl flex flex-row justify-center font-bold text-red-600 mb-10">
              ABOUT THE ARTIST
            </h2>
          </div>
          <div className="font-thin text-lg sm:text-xl ml-5 mr-5 sm:ml-20 sm:mr-20">
            <p>
              Shruti is a disciple of Pandit Rajendra Gangani ji, the
              illustrious master and leading light of Jaipur gharana.
            </p>
            <p className="mt-6 mb-10">
              She began her dance journey in 1997 when she was 7 years old,
              enamored by the beauty, grace, and poise of Kathak. Through her
              formative years, her Gurus were the doyens of Benaras and Lucknow
              gharanas, Guru Pta. Maneesha Sathe and her daughter, Guru
              Shambhavi Dandekar.
            </p>
          </div>
          {readMore ? (
            <div
              className="w-28 text-center p-2 text-lg font-light ml-20 text-white cursor-pointer bg-red-600"
              onMouseLeave={() => setReadMore(false)}
            >
              <Link href="/About">
                <div>Read More</div>
              </Link>
            </div>
          ) : (
            <div
              className="w-28 text-center p-2 text-lg font-light ml-20 text-red-600 cursor-pointer border-b-2 border-red-600"
              onMouseEnter={() => setReadMore(true)}
            >
              Read More
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomepageContent;
