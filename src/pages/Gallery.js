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
  // Other event arrays here...

  const [selectedAg, setSelectedAg] = useState("");

  const textStyleMain = "text-4xl md:text-5xl font-bold uppercase text-red-500";
  const textStyleSub = "text-base md:text-lg font-light";

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
      <div className={`${textStyleMain} text-center py-20`}>Dance Gallery</div>
      <div className="flex flex-wrap justify-center gap-4">
        {danceGallery.map((event, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded ${
              selectedDanceGallery === event ? "bg-red-600 text-white" : "bg-gray-200"
            } hover:bg-red-600 hover:text-white`}
            onClick={() => handleClick(event)}
          >
            {event}
          </button>
        ))}
      </div>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {selectedDanceGallery === "All" &&
          eventImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`event-${index}`}
              className="w-full h-auto object-cover rounded shadow-md"
            />
          ))}
           {selectedDanceGallery === "Concord" && (
            <div className="flex flex-row">
              <div className="w-1/3">
                <img
                  src={eventImages[0]}
                  alt="concord1"
                  className="w-full h-auto object-cover rounded shadow-md"
                />
              </div>
              <div className="w-1/3">
                <img
                  src={eventImages[1]}
                  alt="concord2"
                 className="w-full h-auto object-cover rounded shadow-md"
                />
              </div>
            </div>
          )}
          {selectedDanceGallery === "KrishnaVedh" && (
            <div className="w-1/3 flex flex-row">
              <img
                src={eventImages[2]}
                alt="krishnavedh"
                className="w-full h-auto object-cover rounded shadow-md"
              />
            </div>
          )}
      </div>
      <div className={`${textStyleMain} text-center py-10`}>Avant Garde</div>
      <div className="flex flex-wrap justify-center gap-4">
        {danceGalleryAg.map((event, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded ${
              selectedAg === event ? "bg-red-600 text-white" : "bg-gray-200"
            } hover:bg-red-600 hover:text-white`}
            onClick={() => handleAgClick(event)}
          >
            {event}
          </button>
        ))}
      </div>
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
        {selectedAg === "AG6" &&
          eventsAg6.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`AG6-${index}`}
              className="w-full h-auto object-cover rounded shadow-md"
            />
          ))}
        {selectedAg === "AG5" &&
          eventsAg5.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`AG5-${index}`}
              className="w-full h-auto object-cover rounded shadow-md"
            />
        ))}
        {selectedAg === "AG4" &&
          eventsAg4.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`AG4-${index}`}
              className="w-full h-auto object-cover rounded shadow-md"
            />
          ))}
          {selectedAg === "AG3" &&
          eventsAg3.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`AG3-${index}`}
              className="w-full h-auto object-cover rounded shadow-md"
            />
          ))}
          {selectedAg === "AG2" &&
          eventsAg2.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`AG2-${index}`}
              className="w-full h-auto object-cover rounded shadow-md"
            />
          ))}
          {selectedAg === "AG1" &&
          eventsAg1.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`AG1-${index}`}
              className="w-full h-auto object-cover rounded shadow-md"
            />
          ))}
      </div>
    </div>
  );
};

export default Gallery;
