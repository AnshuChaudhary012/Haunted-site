import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import MintSection from "../components/MintSection";
import CardsSection from "../components/CardsSection";
import RoadmapSection from "../components/RoadmapSection";
import SimpleTextSection from "../components/SimpleTextSection";
import FaqSection from "../components/FaqSection";
import TeamSection from "../components/TeamSection";
import Footer from "../components/Footer";
import bgTop from "../assets/images/bg-top.png";

export default function Home() {
  return (
    <div className="font-primary text-large bg-[#000A1A] text-white relative overflow-x-hidden min-h-screen">
      {/* Background ambient glowing spheres */}
      <div className="rounded-full absolute size-84.25 blur-[150px] bg-blue top-[19%] left-[22%] -z-10 pointer-events-none" />
      <div className="rounded-full absolute size-84.25 blur-[150px] bg-blue top-[24%] right-[-0%] w-30 pointer-events-none" />
      <div className="rounded-full absolute size-84.25 blur-[150px] bg-blue top-[53%] left-[-0%] w-30 pointer-events-none" />
      <div className="rounded-full absolute size-84.25 blur-[150px] bg-blue top-[67%] right-[-0%] w-30 pointer-events-none" />
      <div className="rounded-full absolute size-84.25 blur-[150px] bg-blue  top-[19%] right-[67%] w-30 pointer-events-none" />
      

      {/* Top Banner with Background Image */}
      <div
        style={{ backgroundImage: `url(${bgTop})` }}
        className="bg-position-[center_top] sm:px-5 bg-cover w-full min-h-0 lg:min-h-270"
      >
        <Navbar />
        <Hero />
      </div>
      <MintSection />
      <CardsSection />
      <RoadmapSection />
      <SimpleTextSection />
      <FaqSection />
      <TeamSection />
      <Footer />
    </div>
  );
}
