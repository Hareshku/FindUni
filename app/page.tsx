import Header from "./Header";
import Banner from "./Banner";
import About from "./About";
import MagicLab from "./MagicLab";
import OurMission from "./OurMission";
import Contact from "./Contact";

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <About />
      <MagicLab />
      <OurMission />
      {/* <Volunteer /> */}
      <Contact />
    </div>
  );
}
