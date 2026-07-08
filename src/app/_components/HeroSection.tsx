import BookingBar from "./BookingBar";
import HeroContent from "./HeroContent";
const HeroSection = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-screen w-full object-cover"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55" />

      <HeroContent />

      <BookingBar />
    </section>
  );
};

export default HeroSection;
