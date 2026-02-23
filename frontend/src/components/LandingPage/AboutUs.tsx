import { NavLink } from "react-router-dom"
import peopleImg from '../../assets/images/People.png'

const AboutUs = () => {
  return (
    <section className="py-16 md:py-28 px-4">
      <div className="max-w-7xl  mx-auto py-4 flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2">
          <p className="text-base font-bold text-primary-colour mb-2">About Us</p>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 max-w-3xl mx-auto leading-tight mb-4">
            Empowering Rwanda through Open Source.
          </h2>

          <p className="text-base md:text-lg text-gray-500 mb-6">
            Open Source Kigali (OSK) is a community of developers, designers,
            and tech enthusiasts working together to empower Rwandans to
            contribute to open-source projects locally and globally.
          </p>

        <div className="inline-flex items-center gap-2 px-6 py-3 border border-primary-colour text-primary-colour rounded-full hover:bg-primary-colour hover:text-white transition">
          <NavLink to="/Login">Learn More →</NavLink>
        </div>
        
        </div>

    
        <div className="w-full md:w-1/2">
          <img
            src={peopleImg}
            alt="Team collaboration"
            className="w-full rounded-lg object-cover"
          />
        </div>

      </div>
    </section>
  )
}

export default AboutUs