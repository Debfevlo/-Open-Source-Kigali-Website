import AboutUs from "../components/LandingPage/AboutUs"
import ContributionSection from "../components/LandingPage/ContributionSection"
import Explore from "../components/LandingPage/Explore"
import HeroSection from "../components/LandingPage/HeroSection"
import ProjectSection from "../components/LandingPage/ProjectSection"





const HomePage = () => {
  return (
    <div >
        <HeroSection/>
        <AboutUs/>
        <Explore/>
        <ContributionSection/>
        <ProjectSection/>
        
    </div>
  )
}

export default HomePage