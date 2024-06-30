import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";
import NavigationBar from "@/modules/HomePage/Components/NavigationBar";
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
      <NavigationBar currentPage="About" />
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-6xl text-red-500 font-bold text-center m-14">
          {" "}
          ABOUT THE ARTIST
        </h1>
        <div className="flex flex-row">
          <div className="flex flex-row mx-20">
            <button onClick={prevImgAbt}>
              <FaChevronLeft />
            </button>
            <img src={images[currentImgAbt]} alt="image" className="w-full" />
            <button onClick={nextImgAbt}>
              <FaChevronRight />
            </button>
          </div>
          <div className="text-thin mr-20">
            <p className="mb-6 font-thin">
              Shruti is a disciple of Pandit Rajendra Gangani ji, the
              illustrious master and leading light of Jaipur gharana.
            </p>
            <p className="mb-6 font-thin">
              She began her dance journey in 1997 when she was 7 years old,
              enamored by the beauty, grace, and poise of Kathak. Through her
              formative years, her Gurus were the doyens of Benaras and Lucknow
              gharanas, Guru Pta. Maneesha Sathe and her daughter, Guru
              Shambhavi Dandekar. With their mentorship she earned Gandharva
              Mahavidyalaya’s Nritya Visharad (2009) and Nritya Alankar (2012)
              with an all India rank 1. Certain of her commitment to Kathak, she
              also pursued a master’s degree in performing arts from the Lalit
              Kala Kendra, University of Pune, and was awarded the Pandita
              Rohini Bhate Gold Medal (2014).{" "}
            </p>
            <p className="font-thin">
              Shruti has performed on multiple stages and events all over India
              and has received many accolades and awards. Most recently, she was
              awarded the Kathak Navonmesh Nritya Sadhana Puraskar by Dr. Sujata
              Natu and Gaanvardhan in Pune (2019).
            </p>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-6xl text-red-500 font-bold text-center mt-28 mb-16">
          ACHIEVEMENTS
        </h1>
        <div className="border border-slate-500 mx-20 my-8 px-10 py-4 font-thin">
          <ul class="list-disc">
            <li>“Rabindra Puraskar” by the Upasana Foundation, Pune (2015)</li>
          </ul>
        </div>
        <div className="border border-slate-500 mx-20 my-8 px-10 py-4 font-thin">
          <ul class="list-disc">
            <li>
              “Pt. Ranganath Bendre Award” for standing first All over India in
              the post graduate level NRITYA ALANKAR examination conducted by
              Akhil Bharatiya Gandharva Mahavidyalaya Mandal, Mumbai (2014)
            </li>
          </ul>
        </div>
        <div className="border border-slate-500 mx-20 my-8 px-10 py-4 font-thin">
          <ul class="list-disc">
            <li>
              Third place in the West Zone Inter University Youth Festival,
              Shivaji University, Kolhapur (2013)
            </li>
          </ul>
        </div>
        <div className="border border-slate-500 mx-20 my-8 px-10 py-4 font-thin">
          <ul class="list-disc">
            <li>
              First place at IIT Powai's Cultural Festival MOOD INDIGO, event
              “Nrityangan”, National Level Solo Classical Dance Competition
              (2012)
            </li>
          </ul>
        </div>
        <div className="border border-slate-500 mx-20 my-8 px-10 py-4 font-thin">
          <ul class="list-disc">
            <li>
              “Lt. Pt. Lachchu Maharaj Award” by the Prerna Foundation, Pune
              (2010)
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h1 className="text-6xl text-red-500 font-bold text-center mt-28 mb-16">
          WHAT WE DO
        </h1>
        <div className="flex flex-row mx-20">
          <div className="w-1/2 ml-40 flex flex-col">
            <div className="border border-red-900">
              <iframe
                width="500"
                height="315"
                src="https://www.youtube.com/embed/RFCGbQ6nKqc"
              ></iframe>
            </div>
            <div className="border border-red-900">
              <iframe
                width="500"
                height="315"
                src="https://www.youtube.com/embed/pS4ors16XmY&t"
              ></iframe>
            </div>
          </div>
          <div className="bg-red-900 w-1/2 mr-40 text-white font-light">
            <p className="mx-10 mt-32 mb-10">
              The goal of SKILS is the holistic development of students into
              artistes and the best versions of themselves. Being a registered
              teacher of the Akhil Bharatiya Gandharva Mahavidyalaya, Mumbai,
              Shruti also trains her students for examinations conducted by
              them. Alongside dance, students are also taught the process of
              choreography, stage presence and performance skills.{" "}
            </p>
            <p className="m-10">
              Our mission through SKILS is to make Kathak more relatable and
              more accessible to today's students and audience. SKILS' annual
              programme Avant Garde is a step in that direction. It is a
              platform where students have the stage to dance and present
              everything they have learned to a mesmerized audience - with
              traditional kathak dances as well as choreographies to modern
              pieces relevant to recent times and social dynamic.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
