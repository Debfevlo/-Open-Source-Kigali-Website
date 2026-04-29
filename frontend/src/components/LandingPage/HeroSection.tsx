

import StatsUI from "./StatsUI";
import PrimaryButton from "../../UI/PrimaryButton";
import SecondaryButton from "../../UI/SecondaryButton";

const HeroSection = () => {
  return (
    <section className="relative w-full">
      {/* Background Image */}
      <div
  className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('/HeroImage.jpeg')",
  }}
/>

<div className="absolute inset-0 -z-10 bg-black/40" />

      {/* Content */}
      <div className=" z-10 h-full pt-24 md:pt-32 md:px-20 space-y-8 md:space-y-18 ">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-snug sm:leading-normal md:leading-tight text-white font-bold">
          Empowering Rwanda to Build{" "}
          <span className="inline md:block">Future of Open Source</span>
        </h1>

        <p className="text-white font-medium text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl">
          OSK unites developers, designers, and tech enthusiasts to contribute to
          open-source projects locally and globally. Join us in turning the next
          billion users into the next billion creators.
        </p>


        {/* Hero section Buttons */}
  <div className="flex flex-wrap  gap-4 md:gap-6 justify-center md:justify-start mt-6">
  {/* Primary Button */}
 
    <PrimaryButton to="/" className="text-lg ">
      Join the community
    </PrimaryButton>
  

  {/* Secondary Button */}
  <SecondaryButton to="/about" className="text-base">
    Know More About Us
  </SecondaryButton>
</div>



        {/* Stats inside the hero */}
        <StatsUI />
      </div>
    </section>
  );
};

export default HeroSection;
