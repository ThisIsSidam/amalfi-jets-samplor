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
    <div className="bg-gray-100 py-4">
      <FeaturesSectionHeader />
      <Carousel
        opts={{
          align: "center",
          containScroll: "trimSnaps",
        }}
        className="w-full mt-8"
      >
        <CarouselContent className="flex gap-4">
          <div className="basis-[14vw] shrink-0" />
          {featureCardData.map((feature, index) => (
            <CarouselItem
              key={index}
              className="pl-5 basis-[85%] max-w-275 lg:basis-[78%]"
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
    </div>
  );
};

export default FeaturesSection;
