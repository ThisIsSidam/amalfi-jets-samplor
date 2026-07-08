import { Button } from "@/components/ui/button";

const HeroContent = () => {
  return (
    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-7xl font-medium leading-none text-gray-200">
        Exploring the World With You
      </h1>

      <Button
        variant="outline"
        className="mt-12 px-4 py-5 rounded-full border-white bg-transparent text-white hover:bg-white hover:text-black text-md"
      >
        Our Programs
      </Button>
    </div>
  );
};

export default HeroContent;
