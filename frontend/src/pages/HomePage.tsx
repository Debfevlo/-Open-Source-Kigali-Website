import AboutUs from "../components/LandingPage/AboutUs"
import ContributionSection from "../components/LandingPage/ContributionSection"
import Explore from "../components/LandingPage/Explore"
import HeroSection from "../components/LandingPage/HeroSection"
import ProjectSection from "../components/LandingPage/ProjectSection"
import Event from "../components/LandingPage/Event"
import TestimonialsSection from "../components/LandingPage/Testimonial"
import CTASection from "../components/LandingPage/CTASection"
import FAQSection from "../components/LandingPage/FAQ"





const HomePage = () => {
  return (
    <div >
        <HeroSection/>
        <AboutUs/>
        <Explore/>
        <ContributionSection/>
        <ProjectSection/>
        <Event/>
        <TestimonialsSection/>
        <FAQSection/>
        <CTASection/>
        
    </div>
  )
}

export default HomePage