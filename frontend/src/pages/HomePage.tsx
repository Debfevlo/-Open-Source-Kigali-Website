import AboutUs from "../components/LandingPage/AboutUs"
import ContributionSection from "../components/LandingPage/ContributionSection"
import Explore from "../components/LandingPage/Explore"
import HeroSection from "../components/LandingPage/HeroSection"





const HomePage = () => {
  return (
    <div >
        <HeroSection/>
        <AboutUs/>
        <Explore/>
        <ContributionSection/>
    </div>
  )
}

export default HomePage