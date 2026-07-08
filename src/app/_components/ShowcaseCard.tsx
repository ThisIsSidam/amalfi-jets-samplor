import Image from "next/image";
import { AppShowcase } from "../_data/showcase";

const ShowcaseCard = ({ showcase }: { showcase: AppShowcase }) => {
  return (
    <div className="flex flex-col rounded-3xl bg-zinc-900 p-12 pb-0">
      <h3 className="mb-4 text-xl font-medium text-gray-100">
        {showcase.title}
      </h3>

      <p className="mb-2 text-lg leading-8 text-zinc-400">
        {showcase.description}
      </p>

      <div className="mt-auto">
        <Image
          src={showcase.imageUrl}
          alt={showcase.title}
          width={500}
          height={900}
          className="mx-auto"
        />
      </div>
    </div>
  );
};

export default ShowcaseCard;
