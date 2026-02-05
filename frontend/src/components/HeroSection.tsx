import PrimaryButton from "./PrimaryButton"
import SecondaryButton from "./SecondaryButton"
import StatsUI from "./StatsUI"

const HeroSection = () => {
  return (
    <section className="relative h-screen">
      
      <div className="absolute inset-0 bg-[url(/heroImage.jpg)] bg-cover bg-center -z-10" />
      <div className="absolute inset-0 bg-black/20 z-0"></div>

      <div className=" z-10   h-full pt-40  md:px-20 space-y-6">
       <h1 className="text-5xl leading-12 text-white font-bold">Empowering Rwanda to Build the <br /> Future of Open Source</h1>
       <p className="text-white font-medium">OSK unites developers, designers, and tech enthusiasts to contribute to open-<br/>source projects locally and globally. Join us in turning the next billion users into the <br/> next billion creators.</p>
       <div className="flex gap-6">
        <PrimaryButton text="Contribute to OSK"/>
        <SecondaryButton text="Join the Community"/>
       </div>
        <StatsUI/>
      </div>
    </section>
  )
}

export default HeroSection
