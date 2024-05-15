import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";
import NavigationBar from "../HomePageComponents/NavigationBar";
const About = () => {
  const [currentImgAbt, setCurrentImgAbt] = useState(0);
  const images = [
    "/Image1.jpeg",
    "/Image2.jpeg",
    "/Image3.jpeg",
    "/Image4.jpeg",
  ];
  const prevImgAbt = () => {
    currentImgAbt == 0
      ? setCurrentImgAbt(3)
      : setCurrentImgAbt(currentImgAbt - 1);
  };
  const nextImgAbt = () => {
    currentImgAbt == 3
      ? setCurrentImgAbt(0)
      : setCurrentImgAbt(currentImgAbt + 1);
  };
  return (
    <div>
      <NavigationBar />
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-6xl text-red-500 font-bold text-center m-8">
          {" "}
          ABOUT THE ARTIST
        </h1>
        <div className="flex flex-row">
          <button onClick={prevImgAbt}>
            <FaChevronLeft />
          </button>
          <img src={images[currentImgAbt]} alt="image" className="w-1/3" />
          <button onClick={nextImgAbt}>
            <FaChevronRight />
          </button>
          <div className="m-10 text-light">
            Shruti is a disciple of Pandit Rajendra Gangani ji, the illustrious
            master and leading light of Jaipur gharana.
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-6xl text-red-500 font-bold text-center m-8">
          ACHIEVEMENTS
        </h1>
        <div className="border border-slate-500 mx-20 my-8 px-10 py-4">
          <ul class="list-disc">
            <li>“Rabindra Puraskar” by the Upasana Foundation, Pune (2015)</li>
          </ul>
        </div>
        <div className="border border-slate-500 mx-20 my-8 px-10 py-4">
          <ul class="list-disc">
            <li>
              “Pt. Ranganath Bendre Award” for standing first All over India in
              the post graduate level NRITYA ALANKAR examination conducted by
              Akhil Bharatiya Gandharva Mahavidyalaya Mandal, Mumbai (2014)
            </li>
          </ul>
        </div>
        <div className="border border-slate-500 mx-20 my-8 px-10 py-4">
          <ul class="list-disc">
            <li>
              Third place in the West Zone Inter University Youth Festival,
              Shivaji University, Kolhapur (2013)
            </li>
          </ul>
        </div>
        <div className="border border-slate-500 mx-20 my-8 px-10 py-4">
          <ul class="list-disc">
            <li>
              First place at IIT Powai's Cultural Festival MOOD INDIGO, event
              “Nrityangan”, National Level Solo Classical Dance Competition
              (2012)
            </li>
          </ul>
        </div>
        <div className="border border-slate-500 mx-20 my-8 px-10 py-4">
          <ul class="list-disc">
            <li>
              “Lt. Pt. Lachchu Maharaj Award” by the Prerna Foundation, Pune
              (2010)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default About;
