"use client";

const FeaturesSectionHeader = () => {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mx-8 my-12 lg:mx-75">
      <h1 className="text-black text-4xl font-semibold">
        What Sets Amalfi Apart
      </h1>
      <div className="flex gap-2">
        <button
          className="bg-black text-white px-4 py-2 rounded-3xl transition-all duration-200 ease-out hover:scale-105"
          onClick={() => {}}
        >
          Amalfi Jets Experience
        </button>

        <button
          className="bg-transparent border border-black text-black px-4 py-2 rounded-3xl transition-all duration-200 ease-out hover:scale-105"
          onClick={() => {}}
        >
          Watch Video
        </button>
      </div>
    </div>
  );
};

export default FeaturesSectionHeader;
