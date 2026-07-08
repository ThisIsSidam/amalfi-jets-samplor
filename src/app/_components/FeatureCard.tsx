import Image from "next/image";
import { FeatureData } from "../_data/features";

const FeatureCard = ({ title, imageUrl, description }: FeatureData) => {
  return (
    <div className="rounded-3xl bg-white flex flex-col gap-4 sm:flex-row sm:justify-between h-62.5 sm:h-107.5 lg:h-140  mx-8">
      <Image
        src={imageUrl}
        alt={title}
        width={1200}
        height={800}
        quality={75}
        className="flex w-full h-full sm:h-auto sm:w-1/2 rounded-3xl"
      />
      <div className="flex flex-col gap-2 m-8 lg:m-12">
        <h3 className="text-black text-xl font-bold">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
