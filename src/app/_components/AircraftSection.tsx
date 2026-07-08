"use client";

import { Button } from "@base-ui/react/button";
import Image from "next/image";

const AircraftSection = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-16 lg:pt-40">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 text-center">
        <p className="mb-4 text-2xl font-medium text-zinc-500">
          3,500 aircraft across 170+ countries
        </p>

        <h2 className="max-w-5xl text-3xl pt-4 font-medium leading-none tracking-tight sm:text-6xl lg:text-7xl">
          High-Quality
          <br />
          Aircraft, Anywhere
        </h2>

        <div className="mt-10 z-20 flex flex-wrap items-center justify-center gap-4">
          <Button
            className="bg-black text-white px-4 py-2 rounded-3xl"
            onClick={() => {}}
          >
            Book a flight
          </Button>

          <Button
            className="bg-transparent border border-black text-black px-4 py-2 rounded-3xl"
            onClick={() => {}}
          >
            Explore aircraft
          </Button>
        </div>
      </div>

      <div className="relative -mt-12 h-128 w-full lg:h-140">
        <Image
          src="/images/aircraft-bg.jpg"
          alt="Private jet"
          fill
          priority
          className="object-cover object-center"
        />

        {/* White fade from top */}
        <div className="absolute inset-0 bg-linear-to-b from-white via-white/30 to-trasparent" />
      </div>
    </section>
  );
};

export default AircraftSection;
