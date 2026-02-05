import peopleImg from '../assets/images/People.jpg'


const AboutUs: React.FC = () => {
  return (
    <section className=" py-20 px-4">
      <div className="max-w-7xl  mx-auto py-4 flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2">
          <p className="text-base font-bold text-primary-colour mb-2">About Us</p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Empowering Rwanda through Open Source.
          </h2>

          <p className="text-gray-700 mb-6">
            Open Source Kigali (OSK) is a community of developers, designers,
            and tech enthusiasts working together to empower Rwandans to
            contribute to open-source projects locally and globally.
          </p>

          <button className="inline-flex items-center gap-2 px-6 py-3 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition">
            Learn More →
          </button>
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
  );
};

export default AboutUs;
