
import Carousel from "./Carousel";

const ContributionSection = () => {
  return (
    <section className="py-20 px-4 md:px-20 text-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 max-w-3xl mx-auto leading-tight">
        Ways you can get involved and shape the open source community
      </h2>
      <p className="mt-6 text-base md:text-lg text-gray-500 max-w-2xl mx-auto mb-12">
        Whether you code, design, write, or mentor, there’s a place for you in
        the open source community. Explore opportunities to contribute, grow
        your skills, and make meaningful impact.
      </p>

      <Carousel />
    </section>
  );
};

export default ContributionSection;
