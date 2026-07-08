import { appShowcases } from "../_data/showcase";
import ShowcaseCard from "./ShowcaseCard";
import ShowcaseSectionHeader from "./ShowcaseSectionHeader";

const ShowcaseSection = () => {
  return (
    <section className="bg-black py-36">
      <div className="mx-auto max-w-350 px-8">
        <ShowcaseSectionHeader />

        <div className="grid gap-6 lg:grid-cols-3 mt-16">
          {appShowcases.map((showcase) => (
            <ShowcaseCard key={showcase.title} showcase={showcase} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
