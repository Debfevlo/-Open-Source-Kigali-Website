import { NavLink } from "react-router-dom";

import StatsUI from "./StatsUI";

const HeroSection = () => {
  return (
    <section className="relative w-full">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url(/heroImage.jpg)] bg-cover bg-center -z-10" />
      <div className="absolute inset-0 bg-black/20 -z-5"></div>

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
  <div className=" sm:w-auto inline-flex items-center justify-center bg-primary-colour  px-6 py-4 rounded-full text-white text-base">
    <NavLink to="/Login" className="text-center w-full sm:w-auto">
      Contribute to OSK
    </NavLink>
  </div>

  {/* Secondary Button */}
  <div className=" sm:w-auto inline-flex items-center gap-2 px-6 py-3 border border-primary-colour text-primary-colour rounded-full hover:bg-primary-colour hover:text-white transition text-center">
    <NavLink to="/Login" className="w-full sm:w-auto">
      Join the community
    </NavLink>
  </div>
</div>



        {/* Stats inside the hero */}
        <StatsUI />
      </div>
    </section>
  );
};

export default HeroSection;
