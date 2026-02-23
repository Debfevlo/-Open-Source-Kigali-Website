import { Link } from "react-router";
import map from '../../assets/images/Map.jpg'
import smartDevices from '../../assets/images/smart devices.jpg'
import youth from '../../assets/images/Youth meetup.jpg'
import people from '../../assets/images/People.png'

const ProjectSection = () => {
    const projects = [

        {   id:1,
            image: youth,
            title:'Kigali Community Hub',
            description:'An open-source platform that helps tech communities in Kigali showcase events, projects, and opportunities in one place.It brings together developers, designers, and tech enthusiasts by making it easy to discover meetups, open-source initiatives, and collaboration opportunities.',
            buttons:[
                {label:'Contribute', type:'primary'},
                {label:'View Project', type:'secondary'}
            ]

        },
        {   id:2,
            image: people,
            title:'EduTrack Rwanda',
            description:'A student performance and attendance tracking system designed for schools and learning communities across Rwanda.',
            buttons:[
                {label:'Contribute', type:'primary'},
                {label:'View Project', type:'secondary'}
            ]

        },
        {   id:3,
            image: smartDevices,
            title:'AfyaConnect',
            description:'An open-source health information portal that connects communities with verified health resources and local support centers.',
            buttons:[
                {label:'Contribute', type:'primary'},
                {label:'View Project', type:'secondary'}
            ]

        },
        {   id:4,
            image: map,
            title:'OpenRwanda Map',
            description:'A collaborative mapping project that highlights tech hubs, coworking spaces, and innovation centers across Rwanda.',
            buttons:[
                {label:'Contribute', type:'primary'},
                {label:'View Project', type:'secondary'}
            ]

        },
    ]
  return (
    <section className="py-20 px-4 md:px-20 ">
        <div className="flex justify-between flex-wrap items-center mb-8 gap-4 ">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">Featured Open Source Project</h2>
            <Link to='' className="text-blue-500 hover:underline text-sm sm:text-base">
                View All Projects
            </Link>
        </div>

         {/* Featured Project */}
         <div className="relative w-full bg-gray-50 rounded-lg overflow-hidden shadow-lg mb-12 md:flex md:items-stretch">

        {/* Featured Image */}
        <div className="md:w-1/2 h-64 sm:h-80 md:h-auto relative">
          <img
            src={projects[0].image}
            alt={projects[0].title}
            className="w-full h-full object-cover md:rounded-r-lg"
          />
          {/* Dark overlay for text contrast on mobile */}
          <div className="absolute inset-0 md:hidden bg-black opacity-25"></div>
        </div>
         {/* Text Overlay */}
        <div className="md:w-1/2 p-6 sm:p-8 md:p-10 flex flex-col justify-center bg-white md:bg-transparent z-10">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4">
            {projects[0].title}
          </h3>
          <p className="text-gray-700 mb-4 sm:mb-6 md:mb-8 text-sm sm:text-base md:text-lg">
            {projects[0].description}
          </p>
          <div className="flex gap-3 sm:gap-4 flex-wrap">
            {projects[0].buttons.map((btn, idx) => (
              <button
                key={idx}
                className={`px-6 sm:px-8 py-2 sm:py-3  font-medium text-sm sm:text-base rounded-full hover:cursor-pointer ${
                  btn.type === "primary"
                    ? "bg-blue-500 text-white hover:bg-blue-600"
                    : "border border-blue-500 text-blue-500 hover:bg-blue-50"
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Other Projects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.slice(1).map((project) => (
          <div
            key={project.id}
            className="bg-gray-50 rounded-lg shadow-md overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300"
          >
            <div className="h-48 sm:h-56 md:h-48 w-full relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between">
              <h4 className="font-semibold mb-3 sm:mb-4 text-base sm:text-lg">{project.title}</h4>
              <p className="text-gray-600 text-sm sm:text-base mb-4">{project.description}</p>
              <div className="flex gap-3 sm:gap-4 flex-wrap">
                {project.buttons.map((btn, idx) => (
                  <button
                    key={idx}
                    className={`px-4 sm:px-6 py-3 rounded-full font-medium text-sm sm:text-base flex-1 hover:cursor-pointer ${
                      btn.type === "primary"
                        ? "bg-blue-500 text-white hover:bg-blue-600"
                        : "border border-blue-500 text-blue-500 hover:bg-blue-50"
                    }`}
                  >
                    {btn.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProjectSection