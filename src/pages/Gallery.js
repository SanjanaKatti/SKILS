import React from "react";
import { useState } from "react";
import NavigationBar from "@/modules/HomePage/Components/NavigationBar";

const Gallery = () => {
  const eventImages = ["/Concord-1.jpg", "/Concord-2.jpg", "/KrishnaVedh.jpg"];
  const [selectedDanceGallery, setSelectedDanceGallery] = useState("");
  const eventsAg = [
    "/AG6/AAG61.jpeg",
    "/AG6/AG62.jpeg",
    "/AG6/AG63.jpeg",
    "/AG6/AG64.jpeg",
    "/AG6/AG65.jpeg",
    "/AG6/AG66.jpeg",
    "/AG6/AG67.jpeg",
    "/AG6/AG68.jpeg",
    "/AG6/AG69.jpeg",
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
    "/AG2/AG21.jpeg",
    "/AG2/AG22.jpeg",
    "/AG2/AG23.jpeg",
    "/AG2/AG24.jpeg",
    "/AG2/AG25.jpeg",
    "/AG2/AG26.jpeg",
    "/AG1/AG11.jpeg",
    "/AG1/AG12.jpeg",
    "/AG1/AG13.jpeg",
    "/AG1/AG14.jpeg",
    "/AG1/AG15.jpeg",
  ];
  const [selectedAg, setSelectedAg] = useState("");
  const textStyleMain = {
    color: "#FF264A",
    fontFamily: '"Oswald", Sans-serif',
    fontSize: "60px",
    textTransform: "uppercase",
    letterSpacing: "2px",
  };
  const textStyleSub = {
    fontFamily: '"Oswald", Sans-serif',
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
      <div style={textStyleMain} className="font-bold text-center pt-40 pb-10">
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
            <div className="flex flex-row bg-red-500">
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
            <div className="flex flex-col">
              <div className="flex flex-row">
                <div className="w-1/2">
                  <img
                    src={eventsAg[0]}
                    alt="ag61"
                    className="w-full h-96 m-2"
                  />
                </div>
                <div className="w-1/2">
                  <img
                    src={eventsAg[1]}
                    alt="ag62"
                    className="w-full h-96 m-2"
                  />
                </div>
              </div>
              <div className="flex flex-row">
                <div className="w-1/2">
                  <img
                    src={eventsAg[2]}
                    alt="ag63"
                    className="w-full h-96 m-2"
                  />
                </div>
                <div className="w-1/2">
                  <img
                    src={eventsAg[3]}
                    alt="ag64"
                    className="w-full h-96 m-2"
                  />
                </div>
              </div>
              <div className="flex flex-row">
                <div className="w-1/2">
                  <img
                    src={eventsAg[4]}
                    alt="ag65"
                    className="w-full h-96 m-2"
                  />
                </div>
                <div className="w-1/2">
                  <img
                    src={eventsAg[5]}
                    alt="ag66"
                    className="w-full h-96 m-2"
                  />
                </div>
              </div>
              <div className="flex flex-row">
                <div className="w-1/2">
                  <img
                    src={eventsAg[6]}
                    alt="ag67"
                    className="w-full h-96 m-2"
                  />
                </div>
                <div className="w-1/2">
                  <img
                    src={eventsAg[7]}
                    alt="ag68"
                    className="w-full h-96 m-2"
                  />
                </div>
              </div>
              <div className="flex flex-row">
                <div className="w-1/2">
                  <img
                    src={eventsAg[8]}
                    alt="ag69"
                    className="w-full h-96 m-2"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-8">
        {selectedAg === "AG5" && (
          <div className="flex flex-col">
            <div className="flex flex-row">
              <div className="w-1/2">
                <img src={eventsAg[9]} alt="ag51" className="w-full h-96 m-2" />
              </div>
              <div className="w-1/2">
                <img
                  src={eventsAg[10]}
                  alt="ag52"
                  className="w-full h-96 m-2"
                />
              </div>
            </div>
            <div className="flex flex-row">
              <div className="w-1/2">
                <img
                  src={eventsAg[11]}
                  alt="ag53"
                  className="w-full h-96 m-2"
                />
              </div>
              <div className="w-1/2">
                <img
                  src={eventsAg[12]}
                  alt="ag54"
                  className="w-full h-96 m-2"
                />
              </div>
            </div>
            <div className="flex flex-row">
              <div className="w-1/2">
                <img
                  src={eventsAg[13]}
                  alt="ag55"
                  className="w-full h-96 m-2"
                />
              </div>
              <div className="w-1/2">
                <img
                  src={eventsAg[14]}
                  alt="ag56"
                  className="w-full h-96 m-2"
                />
              </div>
            </div>
            <div className="flex flex-row">
              <div className="w-1/2">
                <img
                  src={eventsAg[15]}
                  alt="ag57"
                  className="w-full h-96 m-2"
                />
              </div>
              <div className="w-1/2">
                <img
                  src={eventsAg[16]}
                  alt="ag58"
                  className="w-full h-96 m-2"
                />
              </div>
            </div>
            <div className="flex flex-row">
              <div className="w-1/2">
                <img
                  src={eventsAg[17]}
                  alt="ag59"
                  className="w-full h-96 m-2"
                />
              </div>
              <div className="w-1/2">
                <img
                  src={eventsAg[18]}
                  alt="ag510"
                  className="w-full h-96 m-2"
                />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="mt-8">
        {selectedAg === "AG4" && (
          <div className="flex flex-col">
            <div className="flex flex-row">
              <div className="w-1/2">
                <img
                  src={eventsAg[19]}
                  alt="ag41"
                  className="w-full h-96 m-2"
                />
              </div>
              <div className="w-1/2">
                <img
                  src={eventsAg[20]}
                  alt="ag42"
                  className="w-full h-96 m-2"
                />
              </div>
            </div>
            <div className="flex flex-row">
              <div className="w-1/2">
                <img
                  src={eventsAg[21]}
                  alt="ag43"
                  className="w-full h-96 m-2"
                />
              </div>
              <div className="w-1/2">
                <img
                  src={eventsAg[22]}
                  alt="ag44"
                  className="w-full h-96 m-2"
                />
              </div>
            </div>
            <div className="flex flex-row">
              <div className="w-1/2">
                <img
                  src={eventsAg[23]}
                  alt="ag45"
                  className="w-full h-96 m-2"
                />
              </div>
              <div className="w-1/2">
                <img
                  src={eventsAg[24]}
                  alt="ag46"
                  className="w-full h-96 m-2"
                />
              </div>
            </div>
            <div className="flex flex-row">
              <div className="w-1/2">
                <img
                  src={eventsAg[25]}
                  alt="ag47"
                  className="w-full h-96 m-2"
                />
              </div>
              <div className="w-1/2">
                <img
                  src={eventsAg[26]}
                  alt="ag48"
                  className="w-full h-96 m-2"
                />
              </div>
            </div>
            <div className="flex flex-row">
              <div className="w-1/2">
                <img
                  src={eventsAg[27]}
                  alt="ag49"
                  className="w-full h-96 m-2"
                />
              </div>
              <div className="w-1/2">
                <img
                  src={eventsAg[28]}
                  alt="ag410"
                  className="w-full h-96 m-2"
                />
              </div>
            </div>
            <div className="flex flex-row">
              <div className="w-1/2">
                <img
                  src={eventsAg[29]}
                  alt="ag411"
                  className="w-full h-96 m-2"
                />
              </div>
            </div>
          </div>
        )}
        ;
      </div>
      <div className="mt-8">
        {selectedAg === "AG3" && (
          <div className="flex flex-col">
            <div className="flex flex-row">
              <div className="w-1/2">
                <img
                  src={eventsAg[30]}
                  alt="ag31"
                  className="w-full h-96 m-2"
                />
              </div>
              <div className="w-1/2">
                <img
                  src={eventsAg[31]}
                  alt="ag32"
                  className="w-full h-96 m-2"
                />
              </div>
            </div>
            <div className="flex flex-row">
              <div className="w-1/2">
                <img
                  src={eventsAg[32]}
                  alt="ag33"
                  className="w-full h-96 m-2"
                />
              </div>
              <div className="w-1/2">
                <img
                  src={eventsAg[33]}
                  alt="ag34"
                  className="w-full h-96 m-2"
                />
              </div>
            </div>
            <div className="flex flex-row">
              <div className="w-1/2">
                <img
                  src={eventsAg[34]}
                  alt="ag35"
                  className="w-full h-96 m-2"
                />
              </div>
              <div className="w-1/2">
                <img
                  src={eventsAg[35]}
                  alt="ag36"
                  className="w-full h-96 m-2"
                />
              </div>
            </div>
            <div className="flex flex-row">
              <div className="w-1/2">
                <img
                  src={eventsAg[36]}
                  alt="ag37"
                  className="w-full h-96 m-2"
                />
              </div>
              <div className="w-1/2">
                <img
                  src={eventsAg[37]}
                  alt="ag38"
                  className="w-full h-96 m-2"
                />
              </div>
            </div>
            <div className="flex flex-row">
              <div className="w-1/2">
                <img
                  src={eventsAg[38]}
                  alt="ag39"
                  className="w-full h-96 m-2"
                />
              </div>
              <div className="w-1/2">
                <img
                  src={eventsAg[39]}
                  alt="ag310"
                  className="w-full h-96 m-2"
                />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="mt-8">
        {selectedAg === "AG2" && (
          <div className="flex flex-col">
            <div className="flex flex-row">
              <div className="w-1/2">
                <img
                  src={eventsAg[40]}
                  alt="ag21"
                  className="w-full h-96 m-2"
                />
              </div>
              <div className="w-1/2">
                <img
                  src={eventsAg[41]}
                  alt="ag22"
                  className="w-full h-96 m-2"
                />
              </div>
            </div>
            <div className="flex flex-row">
              <div className="w-1/2">
                <img
                  src={eventsAg[42]}
                  alt="ag23"
                  className="w-full h-96 m-2"
                />
              </div>
              <div className="w-1/2">
                <img
                  src={eventsAg[43]}
                  alt="ag24"
                  className="w-full h-96 m-2"
                />
              </div>
            </div>
            <div className="flex flex-row">
              <div className="w-1/2">
                <img
                  src={eventsAg[44]}
                  alt="ag25"
                  className="w-full h-96 m-2"
                />
              </div>
              <div className="w-1/2">
                <img
                  src={eventsAg[45]}
                  alt="ag26"
                  className="w-full h-96 m-2"
                />
              </div>
            </div>
          </div>
        )}
        ;
      </div>
      <div className="mt-8">
        {selectedAg === "AG1" && (
          <div className="flex flex-col">
            <div className="flex flex-row">
              <div className="w-1/2">
                <img
                  src={eventsAg[46]}
                  alt="ag11"
                  className="w-full h-96 m-2"
                />
              </div>
              <div className="w-1/2">
                <img
                  src={eventsAg[47]}
                  alt="ag12"
                  className="w-full h-96 m-2"
                />
              </div>
            </div>
            <div className="flex flex-row">
              <div className="w-1/2">
                <img
                  src={eventsAg[48]}
                  alt="ag13"
                  className="w-full h-96 m-2"
                />
              </div>
              <div className="w-1/2">
                <img
                  src={eventsAg[49]}
                  alt="ag14"
                  className="w-full h-96 m-2"
                />
              </div>
            </div>
            <div className="flex flex-row">
              <div className="w-1/2">
                <img
                  src={eventsAg[50]}
                  alt="ag15"
                  className="w-full h-96 m-2"
                />
              </div>
            </div>
          </div>
        )}
        ;
      </div>
    </div>
  );
};

export default Gallery;
