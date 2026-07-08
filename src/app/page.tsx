import AircraftSection from "./_components/AircraftSection";
import FeaturesSection from "./_components/FeaturesSection";
import HeroSection from "./_components/HeroSection";
import Navbar from "./_components/layout/NavBar";
import ShowcaseSection from "./_components/ShowcaseSection";

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ShowcaseSection />
        <AircraftSection />
      </main>
    </>
  );
};

export default Home;
