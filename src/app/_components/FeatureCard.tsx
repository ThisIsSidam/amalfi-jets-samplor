import Image from "next/image";
import { FeatureData } from "../_data/features";

const FeatureCard = ({ title, imageUrl, description }: FeatureData) => {
  return (
    <div className="rounded-3xl bg-white flex flex-col gap-4 sm:flex-row sm:justify-between h-62.5 sm:h-107.5 lg:h-170">
      <Image
        src={imageUrl}
        alt={title}
        width={1200}
        height={800}
        quality={75}
        className="flex-10 w-full h-full sm:h-auto sm:w-1/2 rounded-3xl"
      />
      <div className="flex-5 flex-col gap-2 m-8 lg:m-12">
        <h3 className="text-black text-2xl font-medium">{title}</h3>
        <p className="text-gray-600 text-md mt-4">{description}</p>
        <button className="bg-gray-200 text-black font-medium px-4 py-2 mt-8 rounded-3xl self-start">
          Book a flight
        </button>
      </div>
    </div>
  );
};

export default FeatureCard;
