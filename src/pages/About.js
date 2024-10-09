import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";
import NavigationBar from "@/modules/HomePage/Components/NavigationBar";

const About = () => {
  const [currentImgAbt, setCurrentImgAbt] = useState(0);
  const images = [
    "/about1.jpeg",
    "/about2.jpeg",
    "/about3.jpeg",
    "/about4.jpeg",
    "/about5.jpeg",
    "/about6.jpeg",
  ];

  const prevImgAbt = () => {
    currentImgAbt === 0
      ? setCurrentImgAbt(images.length - 1)
      : setCurrentImgAbt(currentImgAbt - 1);
  };

  const nextImgAbt = () => {
    currentImgAbt === images.length - 1
      ? setCurrentImgAbt(0)
      : setCurrentImgAbt(currentImgAbt + 1);
  };

  return (
    <div className="w-full max-w-full mx-auto flex flex-col items-center justify-center h-full">
      <NavigationBar currentPage="About" />
      <div className="flex flex-col mx-auto max-w-[1000px] items-center justify-center">
        <h1 className="text-6xl text-red-500 font-bold text-center mt-36 mx-14 mb-14">
          ABOUT THE ARTIST
        </h1>
        <div className="flex flex-col lg:flex-row items-center justify-center w-full">
          <div className="flex flex-row w-full max-w-lg aspect-square items-center justify-center mx-4 lg:mx-10">
            <button onClick={prevImgAbt}>
              <FaChevronLeft />
            </button>
            <img
              src={images[currentImgAbt]}
              alt="image"
              className="w-full h-full mx-4 object-contain"
            />
            <button onClick={nextImgAbt}>
              <FaChevronRight />
            </button>
          </div>
          <div className="text-thin lg:ml-10 lg:w-1/2 text-center lg:text-left mt-6 lg:mt-0 mx-4">
            <p className="mb-6 font-thin">
              Shruti is a disciple of Pandit Rajendra Gangani ji, the
              illustrious master and leading light of Jaipur gharana.
            </p>
            <p className="mb-6 font-thin">
              She began her dance journey in 1997 when she was 7 years old,
              enamored by the beauty, grace, and poise of Kathak. Through her
              formative years, her Gurus were the doyens of Benaras and Lucknow
              gharanas, Guru Pta. Maneesha Sathe and her daughter, Guru
              Shambhavi Dandekar.
            </p>
            <p className="font-thin">
              Shruti has performed on multiple stages and events all over India
              and has received many accolades and awards.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center mt-28">
        <h1 className="text-6xl text-red-500 font-bold text-center mb-16">
          ACHIEVEMENTS
        </h1>
        <div
          className="relative bg-cover bg-center w-full"
          style={{
            backgroundImage: 'url("/Achievements Background image.jpg")',
          }}
        >
          {/* Overlay to darken the background */}
          <div className="absolute inset-0 bg-black opacity-60"></div>

          <div className="relative z-10 w-full flex flex-col items-center py-8">
            {[
              "Rabindra Puraskar by the Upasana Foundation, Pune (2015)",
              "Pt. Ranganath Bendre Award for standing first All over India in the NRITYA ALANKAR examination (2014)",
              "Third place in the West Zone Inter University Youth Festival, Shivaji University, Kolhapur (2013)",
              "First place at IIT Powai's Cultural Festival MOOD INDIGO, National Level Solo Classical Dance Competition (2012)",
              "Lt. Pt. Lachchu Maharaj Award by the Prerna Foundation, Pune (2010)",
            ].map((achievement, index) => (
              <div
                key={index}
                className="border border-slate-500 w-full max-w-[1000px] mx-auto my-4 px-4 lg:px-10 py-4 bg-black bg-opacity-40 text-white"
              >
                <ul className="list-disc">
                  <li>{achievement}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full mt-28 flex justify-center">
        <div className="max-w-[1000px] w-full">
          <h1 className="text-6xl text-red-500 font-bold text-center mb-16">
            WHAT WE DO
          </h1>
          <div className="flex flex-col lg:flex-row items-stretch justify-between mx-4 lg:mx-0 space-y-10 lg:space-y-0 lg:space-x-10">
            <div className="lg:w-1/2 flex flex-col space-y-6">
              <div className="border border-red-900">
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/RFCGbQ6nKqc"
                ></iframe>
              </div>
              <div className="border border-red-900">
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/pS4ors16XmY&t"
                ></iframe>
              </div>
            </div>
            <div className="bg-red-900 text-white font-light lg:w-1/2 p-10 flex-grow flex flex-col justify-center">
              <p className="mb-10">
                The goal of SKILS is the holistic development of students into
                artistes and the best versions of themselves. Being a registered
                teacher of the Akhil Bharatiya Gandharva Mahavidyalaya, Mumbai,
                Shruti also trains her students for examinations conducted by
                them. Alongside dance, students are also taught the process of
                choreography, stage presence and performance skills.
              </p>
              <p>
                Our mission through SKILS is to make Kathak more relatable and
                more accessible to today’s students and audience. SKILS’ annual
                programme Avant Garde is a step in that direction. It is a
                platform where students have the stage to dance and present
                everything they have learned to a mesmerized audience – with
                traditional kathak dances as well as choreographies to modern
                pieces relevant to recent times and social dynamic.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
