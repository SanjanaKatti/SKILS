import NavigationBar from "@/modules/HomePage/Components/NavigationBar";
import CoverPic from "@/modules/HomePage/Components/CoverPic";
import HomepageCards from "@/modules/HomePage/Components/HomepageCards";
import HomepageContent from "@/modules/HomePage/Components/HomepageContent";
import Gallery from "@/modules/HomePage/Components/Gallery";
import Achievements from "@/modules/HomePage/Components/Achievements";
import FolSub from "@/modules/HomePage/Components/FolSub";
import Footer from "@/modules/HomePage/Components/Footer";
import MessageForm from "@/modules/HomePage/Components/MessageForm";
function Home() {
  return (
    <div className="bg-black">
      <NavigationBar />
      <CoverPic />
      <HomepageContent />
      <HomepageCards />
      <Gallery />
      <Achievements />
      <FolSub />
      {/* <MessageForm /> */}
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
