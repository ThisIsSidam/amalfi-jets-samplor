"use client";

const ShowcaseSectionHeader = () => {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mx-8 my-12">
      <h1 className="text-gray-200 text-5xl font-semibold">
        The Amalfi Jets App
      </h1>
      <div className="flex gap-2">
        <button
          className="bg-white text-black px-4 py-2 rounded-3xl transition-all duration-200 ease-out hover:scale-105"
          onClick={() => {}}
        >
          Download App
        </button>

        <button
          className="bg-transparent border border-white text-white px-4 py-2 rounded-3xl transition-all duration-200 ease-out hover:scale-105"
          onClick={() => {}}
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default ShowcaseSectionHeader;
