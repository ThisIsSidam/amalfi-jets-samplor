"use client";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { featureCardData } from "../_data/features";
import FeatureCard from "./FeatureCard";
import FeaturesSectionHeader from "./FeaturesSectionHeader";

const FeaturesSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    onSelect();

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section className="bg-gray-100 py-28 lg:py-36">
      <FeaturesSectionHeader />
      <Carousel
        setApi={setApi}
        opts={{
          align: "center",
          containScroll: "trimSnaps",
        }}
        className="w-full mt-16"
      >
        <CarouselContent className="flex gap-1">
          <div className="basis-[14vw] shrink-0" />
          {featureCardData.map((feature, index) => (
            <CarouselItem
              key={index}
              className="pl-5 basis-[80%] max-w-300 lg:basis-[80%]"
            >
              <FeatureCard
                title={feature.title}
                imageUrl={feature.imageUrl}
                description={feature.description}
              />
            </CarouselItem>
          ))}
          <div className="basis-[14vw] shrink-0" />
        </CarouselContent>
      </Carousel>

      <div className="mt-8 flex justify-center gap-3">
        {featureCardData.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`h-3 w-3 rounded-full transition-colors ${
              current === index
                ? "bg-gray-700"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
