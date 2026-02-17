import AboutUs from "../components/LandingPage/AboutUs"
import Explore from "../components/LandingPage/Explore"
import HeroSection from "../components/LandingPage/HeroSection"
import ContributionCard from '../components/LandingPage/ContributionCard'




const HomePage = () => {
  return (
    <div >
        <HeroSection/>
        <AboutUs/>
        <Explore/>
        <ContributionCard/>
    </div>
  )
}

export default HomePage