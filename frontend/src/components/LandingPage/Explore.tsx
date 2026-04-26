import { NavLink } from "react-router";
import groupImg from '../../assets/images/group2.png'
import PrimaryButton from "../../UI/PrimaryButton";
import SecondaryButton from "../../UI/SecondaryButton";

const Explore = () => {
  return (
<section className="bg-[#FFF7F5] py-20 px-4 md:px-20">
    <div className="flex flex-wrap justify-center md:justify-center items-center mb-16 gap-4 md:gap-12">

        <PrimaryButton to='/community'>
          Connect with the Community
        </PrimaryButton>
         <SecondaryButton to='/projects'>
          Contribute to Projects
         </SecondaryButton>
        <SecondaryButton to='resources'>
          Learn with the community
        </SecondaryButton>
</div>


      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        <div className="space-y-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 max-w-3xl mx-auto leading-tight">
            Explore how you can connect, contribute and grow with us.
          </h2>

        
          <p className="text-base md:text-lg text-gray-500 mb-6">
           Join a vibrant community of developers, designers and tech enthusiasts.
           Connect, collaborate, and build meaningful open-source projects together.
          Meet like-minded creators, share ideas, and grow through open source while
          creating solutions with local and global impact.
          </p>

        <SecondaryButton to='/community'>
          Learn More →
        </SecondaryButton>
        </div>

        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={groupImg}
              alt="Community collaboration"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Explore