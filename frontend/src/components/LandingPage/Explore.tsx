import { NavLink } from 'react-router-dom'
import groupImg from '../../assets/images/group2.png'

const Explore = () => {
  return (
<section className="bg-[#FFF7F5] py-20 px-4 md:px-20">
    <div className="flex flex-wrap justify-center md:justify-center items-center mb-16 gap-4 md:gap-12">

        <div className="w-full sm:w-auto px-4 sm:px-6 py-3 sm:py-4 rounded-full bg-blue-500 text-white text-sm font-medium hover:cursor-pointer transition">
          <NavLink to="/Login">Connect with the Community</NavLink>
        </div>
         <div className="w-full sm:w-auto px-4 sm:px-6 py-3 sm:py-4 rounded-full border border-blue-400 text-blue-500 text-sm font-medium hover:cursor-pointer hover:bg-blue-500 hover:text-white transition">
          <NavLink to="/Login">Contribute to Projects</NavLink>
        </div>
        <div className="w-full sm:w-auto px-4 sm:px-6 py-3 sm:py-4 rounded-full border border-blue-400 text-blue-500 text-sm font-medium hover:cursor-pointer hover:bg-blue-500 hover:text-white transition">
          <NavLink to="/Login">Learn with the community</NavLink>
        </div>

</div>


      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 max-w-3xl mx-auto leading-tight">
            Explore how you can connect, contribute and grow with us.
          </h2>

        
          <p className="text-base md:text-lg text-gray-500 mb-6">
           Join a vibrant community of developers, designers and tech enthusiasts.
           Connect, collaborate, and build meaningful open-source projects together.
          Meet like-minded creators, share ideas, and grow through open source while
          creating solutions with local and global impact.
          </p>

         <div className="inline-flex items-center gap-2 px-6 py-3 border border-primary-colour text-primary-colour rounded-full hover:bg-primary-colour hover:text-white transition">
          <NavLink to="/Login">Learn More →</NavLink>
        </div>
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