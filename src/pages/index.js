import NavigationBar from "./HomePageComponents/NavigationBar";
import CoverPic from "./HomePageComponents/CoverPic";
import HomepageCards from "./HomePageComponents/HomepageCards";
import HomepageContent from "./HomePageComponents/HomepageContent";
import Gallery from "./HomePageComponents/Gallery";
import Achievements from "./HomePageComponents/Achievements";
import FolSub from "./HomePageComponents/FolSub";
import Footer from "./HomePageComponents/Footer";
import MessageForm from "./HomePageComponents/MessageForm";
function Home(){
    return(
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