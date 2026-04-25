import { NavLink } from "react-router";
import { Calendar, Clock, MapPin } from "lucide-react";

type EventType = "hackathon" | "workshop" | "meetup" | "session";

interface Event {
  id: number;
  type: EventType;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  tag: string;
}

const typeStyles: Record<EventType, string> = {
  hackathon: "bg-blue-100 text-blue-600",
  workshop: "bg-green-100 text-green-600",
  meetup: "bg-purple-100 text-purple-600",
  session: "bg-orange-100 text-orange-600",
};

const events: Event[] = [
  {
    id: 1,
    type: "hackathon",
    title: "OSK Quarterly Hackathon — Build for Rwanda",
    date: "July 26–27, 2025",
    time: "8:00 AM – 6:00 PM",
    location: "Kigali Innovation City, Rwanda",
    description:
      "A 48-hour open source build challenge where teams tackle real societal problems. Open to all skill levels — developers, designers, and writers welcome.",
    tag: "Hackathon",
  },
  {
    id: 2,
    type: "workshop",
    title: "Git & GitHub for Beginners",
    date: "July 12, 2025",
    time: "10:00 AM – 1:00 PM",
    location: "Virtual (Discord)",
    description:
      "A hands-on workshop covering version control basics, making your first pull request, and navigating open-source contribution workflows.",
    tag: "Workshop",
  },
  {
    id: 3,
    type: "meetup",
    title: "Monthly Community Meetup — July Edition",
    date: "July 5, 2025",
    time: "3:00 PM – 5:30 PM",
    location: "Norrsken Kigali",
    description:
      "Connect with fellow contributors, showcase what you've built, and hear updates from project maintainers and the leadership team.",
    tag: "Meetup",
  },
  {
    id: 4,
    type: "session",
    title: "Weekly Technical Session — Code Review & Contributions",
    date: "Every Wednesday",
    time: "7:00 PM – 8:30 PM",
    location: "Virtual (Discord)",
    description:
      "Recurring coding session where contributors work on open issues, get code reviewed live, and receive mentorship from maintainers.",
    tag: "Weekly Session",
  },
];

const Event = () => {
  return (
    <section className="py-20 px-4 md:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-wrap justify-between items-center mb-12 gap-4">
          <div>
          <div className="flex justify-items-start mb-5">
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary-colour/40 bg-primary-colour/10 text-primary-colour text-xs font-semibold tracking-widest uppercase">
            Community Event
          </span>
        </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
              Upcoming Events & Activities
            </h2>
          </div>
          <NavLink
            to="/events"
            className="text-blue-500 hover:underline text-sm sm:text-base"
          >
            View All Events
          </NavLink>
        </div>

        {/* Featured Event */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-8 border border-gray-100">
          <div className="md:flex">
            <div className="md:w-2/3 p-6 sm:p-8 md:p-10">
              <span
                className={`text-xs font-semibold px-3 py-1 rounded-full ${typeStyles[events[0].type]}`}
              >
                {events[0].tag}
              </span>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mt-4 mb-3">
                {events[0].title}
              </h3>
              <p className="text-gray-500 text-sm sm:text-base mb-6">
                {events[0].description}
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-8">
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} className="text-blue-500" />
                  {events[0].date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={14} className="text-blue-500" />
                  {events[0].time}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} className="text-blue-500" />
                  {events[0].location}
                </span>
              </div>
              <div className="flex flex-wrap gap-3">
                <NavLink
                  to="/events"
                  className="px-6 py-3 bg-blue-500 text-white rounded-full text-sm font-medium hover:bg-blue-600 transition"
                >
                  Register Now
                </NavLink>
                <NavLink
                  to="/events"
                  className="px-6 py-3 border border-blue-500 text-blue-500 rounded-full text-sm font-medium hover:bg-blue-50 transition"
                >
                  Learn More
                </NavLink>
              </div>
            </div>
            <div className="md:w-1/3 bg-blue-500 flex flex-col items-center justify-center p-10 text-white text-center">
              <p className="text-6xl font-bold">48h</p>
              <p className="mt-2 text-lg font-medium opacity-90">Build Challenge</p>
              <p className="mt-4 text-sm opacity-75">Open to all skill levels</p>
            </div>
          </div>
        </div>

        {/* Other Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.slice(1).map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col hover:shadow-md transition-shadow duration-300"
            >
              <span
                className={`text-xs font-semibold px-3 py-1 rounded-full w-fit ${typeStyles[event.type]}`}
              >
                {event.tag}
              </span>
              <h4 className="text-base sm:text-lg font-semibold text-gray-900 mt-4 mb-2">
                {event.title}
              </h4>
              <p className="text-gray-500 text-sm flex-1 mb-4">{event.description}</p>
              <div className="flex flex-col gap-1.5 text-xs text-gray-400">
                <span className="flex items-center gap-1.5">
                  <Calendar size={12} className="text-blue-400" />
                  {event.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={12} className="text-blue-400" />
                  {event.time}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={12} className="text-blue-400" />
                  {event.location}
                </span>
              </div>
              <NavLink
                to="/events"
                className="mt-5 text-sm text-blue-500 font-medium hover:underline"
              >
                RSVP →
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Event;
