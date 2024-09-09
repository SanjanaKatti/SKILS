import NavigationBar from "@/modules/HomePage/Components/NavigationBar";
import CoverPic from "@/modules/HomePage/Components/CoverPic";
import HomepageCards from "@/modules/HomePage/Components/HomepageCards";
import HomepageContent from "@/modules/HomePage/Components/HomepageContent";
import HomepageGallery from "@/modules/HomePage/Components/HomepageGallery";
import Achievements from "@/modules/HomePage/Components/Achievements";
import FolSub from "@/modules/HomePage/Components/FolSub";
import Footer from "@/modules/HomePage/Components/Footer";
import MessageForm from "@/modules/HomePage/Components/MessageForm";
import React from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";

const WorldMap = dynamic(
  () => import("@/modules/HomePage/Components/WorldMap"),
  {
    ssr: false,
  }
);

function Home() {
  return (
    <div className="bg-black">
      <NavigationBar currentPage="Home" />
      <CoverPic />
      <HomepageContent />
      <HomepageCards />
      <HomepageGallery />
      <Achievements />
      <FolSub />
      <MessageForm />
      <WorldMap />
      <Footer />
    </div>
  );
}

export default Home;

// Bor Prodigy figma challenge :
// 7 Day
// https://prodigycollege.com/7-day-ux-ui-design-challenge-fb/

// 21 days
// https://prodigycollege.com/challenge-figma-21/
