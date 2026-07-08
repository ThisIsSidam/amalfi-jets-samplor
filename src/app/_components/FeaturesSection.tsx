import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { featureCardData } from "../_data/features";
import FeatureCard from "./FeatureCard";
import FeaturesSectionHeader from "./FeaturesSectionHeader";

const FeaturesSection = () => {
  return (
    <section className="bg-gray-100 py-4 pb-28 lg:pb-36">
      <FeaturesSectionHeader />
      <Carousel
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
    </section>
  );
};

export default FeaturesSection;
