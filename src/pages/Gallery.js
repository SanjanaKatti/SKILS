import React from "react";
import { useState } from "react";
import NavigationBar from "@/modules/HomePage/Components/NavigationBar";

const Gallery = () => {
  const eventImages = ["/Concord-1.jpg", "/Concord-2.jpg", "/KrishnaVedh.jpg"];
  const [selectedDanceGallery, setSelectedDanceGallery] = useState("");
  const eventsAg6 = [
    "/AG6/AAG61.jpeg",
    "/AG6/AG62.jpeg",
    "/AG6/AG63.jpeg",
    "/AG6/AG64.jpeg",
    "/AG6/AG65.jpeg",
    "/AG6/AG66.jpeg",
    "/AG6/AG67.jpeg",
    "/AG6/AG68.jpeg",
    "/AG6/AG69.jpeg",
  ];
  const eventsAg5 = [
    "/AG5/AG51.jpeg",
    "/AG5/AG52.jpeg",
    "/AG5/AG53.jpeg",
    "/AG5/AG54.jpeg",
    "/AG5/AG55.jpeg",
    "/AG5/AG56.jpeg",
    "/AG5/AG57.jpeg",
    "/AG5/AG58.jpeg",
    "/AG5/AG59.jpeg",
    "/AG5/AG510.jpeg",
  ];
  const eventsAg4 = [
    "/AG4/Ag41.jpeg",
    "/AG4/Ag42.jpeg",
    "/AG4/Ag43.jpeg",
    "/AG4/Ag44.jpeg",
    "/AG4/Ag45.jpeg",
    "/AG4/Ag46.jpeg",
    "/AG4/Ag47.jpeg",
    "/AG4/Ag48.jpeg",
    "/AG4/Ag49.jpeg",
    "/AG4/Ag410.jpeg",
    "/AG4/Ag411.jpeg",
  ];
  const eventsAg3 = [
    "/AG3/Ag31.jpeg",
    "/AG3/Ag32.jpeg",
    "/AG3/Ag33.jpeg",
    "/AG3/Ag34.jpeg",
    "/AG3/Ag35.jpeg",
    "/AG3/Ag36.jpeg",
    "/AG3/Ag37.jpeg",
    "/AG3/Ag38.jpeg",
    "/AG3/Ag39.jpeg",
    "/AG3/Ag310.jpeg",
  ];
  const eventsAg2 = [
    "/AG2/AG21.jpeg",
    "/AG2/AG22.jpeg",
    "/AG2/AG23.jpeg",
    "/AG2/AG24.jpeg",
    "/AG2/AG25.jpeg",
    "/AG2/AG26.jpeg",
  ];
  const eventsAg1 = [
    "/AG1/AG11.jpeg",
    "/AG1/AG12.jpeg",
    "/AG1/AG13.jpeg",
    "/AG1/AG14.jpeg",
    "/AG1/AG15.jpeg",
  ];
  const [selectedAg, setSelectedAg] = useState("");
  const textStyleMain = {
    fontSize: "60px",
    textTransform: "uppercase",
    letterSpacing: "2px",
  };
  const textStyleSub = {
    fontSize: "20px",
    fontWeight: "300",
  };
  const danceGallery = ["All", "Concord", "KrishnaVedh"];
  const danceGalleryAg = ["AG6", "AG5", "AG4", "AG3", "AG2", "AG1"];
  const handleClick = (event) => {
    setSelectedDanceGallery(event);
  };
  const handleAgClick = (event) => {
    setSelectedAg(event);
  };

  return (
    <div className="flex flex-col">
      <NavigationBar currentPage="Gallery" />
      <div
        style={textStyleMain}
        className="font-bold text-center text-red-500 pt-36 pb-10"
      >
        DANCE GALLERY
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row justify-center items-center">
          {danceGallery.map((event, index) => (
            <button
              key={index}
              style={textStyleSub}
              className={`px-[14px] py-[7px] ${
                selectedDanceGallery === event
                  ? "bg-red-600"
                  : "hover:bg-red-600"
              }`}
              onClick={() => handleClick(event)}
            >
              {event}
            </button>
          ))}
        </div>
        <div className="mt-8">
          {selectedDanceGallery === "All" && (
            <div className="flex flex-row">
              <div className="h-96 w-1/3">
                <img
                  src={eventImages[0]}
                  alt="concord1"
                  className="h-full w-full m-2 object-cover"
                />
              </div>
              <div className="h-96 w-1/3">
                <img
                  src={eventImages[1]}
                  alt="concord2"
                  className="h-full w-full m-2 object-cover"
                />
              </div>
              <div className="h-96 w-1/3">
                <img
                  src={eventImages[2]}
                  alt="krishnavedh"
                  className="h-full w-full m-2 object-cover"
                />
              </div>
            </div>
          )}
          {selectedDanceGallery === "Concord" && (
            <div className="flex flex-row">
              <div className="w-1/3">
                <img
                  src={eventImages[0]}
                  alt="concord1"
                  className="w-full h-96 m-2"
                />
              </div>
              <div className="w-1/3">
                <img
                  src={eventImages[1]}
                  alt="concord2"
                  className="w-full h-96 m-2"
                />
              </div>
            </div>
          )}
          {selectedDanceGallery === "KrishnaVedh" && (
            <div className="w-1/3 flex flex-row">
              <img
                src={eventImages[2]}
                alt="krishnavedh"
                className="w-full h-96 m-2"
              />
            </div>
          )}
        </div>
      </div>
      <div style={textStyleMain} className="font-bold text-center pt-6 pb-10">
        AVANT GARDE
      </div>
      <div className="flex flex-col mt-8">
        <div className="flex flex-row justify-center items-center">
          {danceGalleryAg.map((event, index) => (
            <button
              key={index}
              style={textStyleSub}
              className={`px-[14px] py-[7px] ${
                selectedAg === event ? "bg-red-600" : "hover:bg-red-600"
              }`}
              onClick={() => handleAgClick(event)}
            >
              {event}
            </button>
          ))}
        </div>
        <div className="mt-8">
          {selectedAg === "AG6" && (
            <div className="flex flex-wrap">
              {eventsAg6.map((image, index) => (
                <div key={index} className="w-1/2 p-2">
                  <img src={image} alt={`AG6${index}`} />
                </div>
              ))}
            </div>
          )}
          {selectedAg === "AG5" && (
            <div className="flex flex-wrap">
              {eventsAg5.map((image, index) => (
                <div key={index} className="w-1/2 p-2">
                  <img src={image} alt={`AG5${index}`} />
                </div>
              ))}
            </div>
          )}
          {selectedAg === "AG4" && (
            <div className="flex flex-wrap">
              {eventsAg4.map((image, index) => (
                <div key={index} className="w-1/2 p-2">
                  <img src={image} alt={`AG4${index}`} />
                </div>
              ))}
            </div>
          )}
          {selectedAg === "AG3" && (
            <div className="flex flex-wrap">
              {eventsAg3.map((image, index) => (
                <div key={index} className="w-1/2 p-2">
                  <img src={image} alt={`AG3${index}`} />
                </div>
              ))}
            </div>
          )}
          {selectedAg === "AG2" && (
            <div className="flex flex-wrap">
              {eventsAg2.map((image, index) => (
                <div key={index} className="w-1/2 p-2">
                  <img src={image} alt={`AG2${index}`} />
                </div>
              ))}
            </div>
          )}
          {selectedAg === "AG1" && (
            <div className="flex flex-wrap">
              {eventsAg1.map((image, index) => (
                <div key={index} className="w-1/2 p-2">
                  <img src={image} alt={`AG1${index}`} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
