import InfoCard from "@ui/InfoCard";
import { cardData, ExperiencesData } from "@/Data/aboutMeData";
import ExperiencesCard from "@ui/ExperiencesCard";
function AboutMe() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <span className="text-blue-500 font-bold block tracking-widest text-sm md:text-base mb-4">
          GET TO KNOW MORE
        </span>
        <h1 className="text-6xl md:text-6xl font-extrabold mb-8 pb-2 relative inline-block group [.light_&]:text-gray-900">
          About Me
          <span className="absolute  -bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300 group-hover:w-full "></span>
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Text Card */}
        <div className="relative group ">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-gray-900 ring-1 ring-gray-900/5 rounded-2xl leading-none flex items-top justify-start space-x-6 [.light_&]:bg-gray-100 [.light_&]:ring-gray-200">
            <div className="p-8 md:p-10 text-gray-300 text-lg leading-relaxed [.light_&]:text-gray-700">
              <p className="mb-6 text-2xl">
                I am a Computer Science graduate with practical experience in
                full-stack web development. I work on both frontend and backend,
                building responsive user interfaces with React and developing
                RESTful APIs and backend logic using Node.js and Express.
              </p>
              <p className="mb-6 text-2xl">
                I developed a complete hospital management system that includes
                authentication, role-based access, appointment scheduling, and
                patient records, simulating real-world workflows.
              </p>
              <p className="mb-6 text-2xl">
                I am currently looking for an opportunity as a junior developer
                where I can apply my skills, improve further, and contribute to
                real projects.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Info Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {cardData.map((card, index) => (
            <InfoCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
      <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-6">
        {ExperiencesData.map((item, index) => (
          <ExperiencesCard key={index} num={item.num} title={item.title} />
        ))}
      </div>
    </div>
  );
}
export default AboutMe;
