import { useState } from "react";
import { NavLink } from "react-router";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  ArrowUpRight,
  ChevronRight,
  Filter,
  Play,
  Mic,
  Zap,
  Code2,
  Globe,
  CheckCircle2,
  Bell,
  ChevronLeft,
} from "lucide-react";
import EyebrowLabel from "../UI/EyebrowLable";




type EventStatus   = "upcoming" | "live"   | "past";
type EventType     = "hackathon" | "workshop" | "meetup" | "session" | "talk";
type FilterType    = EventType   | "all";

interface OSKEvent {
  id:          number;
  type:        EventType;
  status:      EventStatus;
  title:       string;
  tagline:     string;
  description: string;
  date:        string;
  dateShort:   string;
  day:         number;
  month:       string;
  time:        string;
  location:    string;
  mode:        "in-person" | "virtual" | "hybrid";
  attendees:   number;
  capacity:    number;
  speakers:    string[];
  tags:        string[];
  featured:    boolean;
  recap?:      string;
}

// Data 

const TYPE_META: Record<EventType, {
  label:   string;
  icon:    React.ReactNode;
  bg:      string;
  text:    string;
  border:  string;
}> = {
  hackathon: {
    label:  "Hackathon",
    icon:   <Zap     size={12} />,
    bg:     "bg-[#e8f1ff]",
    text:   "text-[#2b7fff]",
    border: "border-[#c5d9ff]",
  },
  workshop: {
    label:  "Workshop",
    icon:   <Code2   size={12} />,
    bg:     "bg-violet-50",
    text:   "text-violet-600",
    border: "border-violet-200",
  },
  meetup: {
    label:  "Meetup",
    icon:   <Users   size={12} />,
    bg:     "bg-emerald-50",
    text:   "text-emerald-600",
    border: "border-emerald-200",
  },
  session: {
    label:  "Tech Session",
    icon:   <Mic     size={12} />,
    bg:     "bg-orange-50",
    text:   "text-orange-600",
    border: "border-orange-200",
  },
  talk: {
    label:  "Talk",
    icon:   <Globe   size={12} />,
    bg:     "bg-rose-50",
    text:   "text-rose-600",
    border: "border-rose-200",
  },
};



const events: OSKEvent[] = [
  {
    id:          1,
    type:        "hackathon",
    status:      "upcoming",
    title:       "OSK Build Challenge — Q3 2025",
    tagline:     "48 hours. Real problems. Real code.",
    description: "Our biggest event of the year. Teams of 2–5 tackle real societal challenges in Rwanda using open-source tools. Mentors on standby. Cash prizes for the top three teams. All skill levels welcome.",
    date:        "July 26–27, 2025",
    dateShort:   "Jul 26–27",
    day:         26,
    month:       "JUL",
    time:        "8:00 AM – 6:00 PM (both days)",
    location:    "Kigali Innovation City, Rwanda",
    mode:        "in-person",
    attendees:   78,
    capacity:    120,
    speakers:    ["Didas Mbarushimana", "Guest Mentor — TBA", "Guest Mentor — TBA"],
    tags:        ["hackathon", "open source", "prizes", "team"],
    featured:    true,
    recap:       undefined,
  },
  {
    id:          2,
    type:        "session",
    status:      "upcoming",
    title:       "Wednesday Tech Session — APIs & Authentication",
    tagline:     "Build a secure Node.js API from scratch.",
    description: "This week's live coding session covers REST API design, JWT authentication, and deploying to Vercel. Bring your laptop. We'll code together.",
    date:        "July 9, 2025",
    dateShort:   "Jul 9",
    day:         9,
    month:       "JUL",
    time:        "7:00 PM – 8:30 PM",
    location:    "Discord — #tech-session",
    mode:        "virtual",
    attendees:   34,
    capacity:    unlimited(),
    speakers:    ["Tech Lead"],
    tags:        ["node.js", "api", "auth", "live coding"],
    featured:    false,
  },
  {
    id:          3,
    type:        "meetup",
    status:      "upcoming",
    title:       "July Monthly Meetup",
    tagline:     "Projects, people, and real conversations.",
    description: "Showcase what you've built this month. Hear from maintainers. Meet new contributors. Light drinks. Good people. No slides required.",
    date:        "July 5, 2025",
    dateShort:   "Jul 5",
    day:         5,
    month:       "JUL",
    time:        "3:00 PM – 5:30 PM",
    location:    "Norrsken Kigali",
    mode:        "in-person",
    attendees:   51,
    capacity:    80,
    speakers:    ["Open mic — all contributors welcome"],
    tags:        ["meetup", "networking", "showcase"],
    featured:    false,
  },
  {
    id:          4,
    type:        "workshop",
    status:      "upcoming",
    title:       "Figma for Open Source Designers",
    tagline:     "Design systems, components, and your first design PR.",
    description: "Clarisse walks through how designers contribute to open-source projects using Figma — from picking up an issue to handing off assets to a developer.",
    date:        "July 12, 2025",
    dateShort:   "Jul 12",
    day:         12,
    month:       "JUL",
    time:        "10:00 AM – 12:00 PM",
    location:    "Discord — #workshop",
    mode:        "virtual",
    attendees:   22,
    capacity:    50,
    speakers:    ["Clarisse Iradukunda"],
    tags:        ["design", "figma", "ux", "beginner"],
    featured:    false,
  },
  {
    id:          5,
    type:        "session",
    status:      "past",
    title:       "Wednesday Session — Git Rebase Deep Dive",
    tagline:     "Interactive history rewriting with confidence.",
    description: "A live walkthrough of git rebase, interactive rebase, and squashing commits on real OSK project history. Recording available.",
    date:        "June 25, 2025",
    dateShort:   "Jun 25",
    day:         25,
    month:       "JUN",
    time:        "7:00 PM – 8:30 PM",
    location:    "Discord",
    mode:        "virtual",
    attendees:   47,
    capacity:    unlimited(),
    speakers:    ["Jean-Paul Hakizimana"],
    tags:        ["git", "rebase", "version control"],
    featured:    false,
    recap:       "Watch replay",
  },
  {
    id:          6,
    type:        "meetup",
    status:      "past",
    title:       "June Monthly Meetup",
    tagline:     "The AfyaConnect launch and Q2 recap.",
    description: "We officially shipped AfyaConnect to production. 60+ people in the room for the demo. One of the best sessions we've had.",
    date:        "June 7, 2025",
    dateShort:   "Jun 7",
    day:         7,
    month:       "JUN",
    time:        "3:00 PM – 5:30 PM",
    location:    "Norrsken Kigali",
    mode:        "in-person",
    attendees:   62,
    capacity:    80,
    speakers:    ["Full community"],
    tags:        ["meetup", "launch", "afyaconnect"],
    featured:    false,
    recap:       "Read recap",
  },
];

function unlimited(): number { return Infinity; }

const filterTypes: { key: FilterType; label: string }[] = [
  { key: "all",       label: "All events"  },
  { key: "hackathon", label: "Hackathons"  },
  { key: "workshop",  label: "Workshops"   },
  { key: "meetup",    label: "Meetups"     },
  { key: "session",   label: "Sessions"    },
  { key: "talk",      label: "Talks"       },
];

// ─── Sub-components 

const TypeBadge = ({ type }: { type: EventType }) => {
  const m = TYPE_META[type];
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold border ${m.bg} ${m.text} ${m.border}`}>
      {m.icon} {m.label}
    </span>
  );
};

const ModeBadge = ({ mode }: { mode: OSKEvent["mode"] }) => {
  const styles = {
    "in-person": "bg-[#e8f1ff] text-[#2b7fff] border-[#c5d9ff]",
    "virtual":   "bg-gray-100 text-gray-600 border-gray-200",
    "hybrid":    "bg-violet-50 text-violet-600 border-violet-200",
  };
  const labels = { "in-person": "In-person", "virtual": "Virtual", "hybrid": "Hybrid" };
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold border ${styles[mode]}`}>
      {mode === "virtual" ? <Globe size={10} /> : <MapPin size={10} />}
      {labels[mode]}
    </span>
  );
};

const AttendeeBar = ({ filled, capacity }: { filled: number; capacity: number }) => {
  if (capacity === Infinity) return null;
  const pct = Math.min(100, Math.round((filled / capacity) * 100));
  const color = pct >= 90 ? "bg-red-400" : pct >= 70 ? "bg-amber-400" : "bg-[#2b7fff]";
  return (
    <div>
      <div className="flex justify-between text-xs text-gray-400 mb-1">
        <span>{filled} registered</span>
        <span>{capacity - filled} spots left</span>
      </div>
      <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
        <div className={`h-full ${color} rounded-full transition-all`} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
};

// ─── Featured Card ─────────────────────────────────────────────────────────────

const FeaturedCard = ({ event }: { event: OSKEvent }) => (
  <div
    className="relative rounded-3xl overflow-hidden mb-8 bg-background-colour"
    
  >
    {/* Background pattern */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.07) 1px, transparent 0)",
        backgroundSize: "32px 32px",
      }}
    />
    {/* Glow orbs */}
    <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full pointer-events-none"
      style={{ background: "radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%)" }} />
    <div className="absolute -bottom-16 left-1/3 w-64 h-64 rounded-full pointer-events-none"
      style={{ background: "radial-gradient(circle, rgba(43,127,255,0.4) 0%, transparent 70%)" }} />

    <div className="relative p-8 md:p-12">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">

        {/* Left */}
        <div className="flex-1">
          {/* Header row */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/15 border border-white/25 text-white text-xs font-bold">
              <Zap size={11} /> Featured Event
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 text-white/80 text-xs font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#93bbff]" />
              {event.date}
            </span>
            <ModeBadge mode={event.mode} />
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-none tracking-tight mb-3">
            {event.title}
          </h2>
          <p className="text-[#93bbff] font-semibold text-base mb-5">{event.tagline}</p>
          <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-xl mb-8">
            {event.description}
          </p>

          {/* Meta grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
            {[
              { icon: <Clock   size={15} />, label: "Time",     value: event.time     },
              { icon: <MapPin  size={15} />, label: "Location", value: event.location },
              { icon: <Users   size={15} />, label: "Registered",value: `${event.attendees} / ${event.capacity}` },
            ].map((m) => (
              <div key={m.label} className="bg-white/10 rounded-2xl px-4 py-3">
                <div className="flex items-center gap-1.5 text-[#93bbff] text-xs mb-1">
                  {m.icon} {m.label}
                </div>
                <p className="text-white text-sm font-semibold leading-snug">{m.value}</p>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3">
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-colour rounded-full text-sm font-black hover:bg-[#e8f1ff] transition-colors hover:cursor-pointer">
              Register now <ArrowUpRight size={15} />
            </button>
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-white/15 border border-white/30 text-white rounded-full text-sm font-semibold hover:bg-white/25 transition-colors hover:cursor-pointer">
              Learn more
            </button>
          </div>
        </div>

        {/* Right — countdown / speakers */}
        <div className="shrink-0 w-full lg:w-64">
          {/* Speakers */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/15">
            <p className="text-[#93bbff] text-xs font-bold uppercase tracking-wider mb-4">Speakers</p>
            {event.speakers.map((s, i) => (
              <div key={i} className="flex items-center gap-3 mb-3 last:mb-0">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-primary-colour text-xs font-black shrink-0"
                  style={{ background: "rgba(255,255,255,0.9)" }}
                >
                  {s.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                </div>
                <p className="text-white text-xs font-semibold">{s}</p>
              </div>
            ))}
          </div>

          {/* Fill bar */}
          <div className="mt-4 bg-white/10 rounded-2xl p-4 border border-white/15">
            <p className="text-[#93bbff] text-xs font-bold mb-3">
              {event.capacity - event.attendees} spots remaining
            </p>
            <div className="h-2 w-full rounded-full bg-white/20 overflow-hidden">
              <div
                className="h-full rounded-full bg-white"
                style={{ width: `${(event.attendees / event.capacity) * 100}%` }}
              />
            </div>
            <p className="text-white/50 text-xs mt-1.5">
              {event.attendees} of {event.capacity} registered
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// ─── Event Card ────────────────────────────────────────────────────────────────

const EventCard = ({ event }: { event: OSKEvent }) => {
  const isPast = event.status === "past";
  return (
    <div className={`bg-white rounded-2xl border overflow-hidden flex flex-col hover:shadow-lg transition-all duration-300 group ${isPast ? "border-gray-100 opacity-80" : "border-[#c5d9ff] hover:border-[#5b9fff]"}`}>

      {/* Top color strip */}
      <div
        className="h-1 w-full"
        style={{
          background: isPast
            ? "#e5e7eb"
            : `linear-gradient(90deg, #2b7fff, #5b9fff)`,
        }}
      />

      <div className="p-5 flex flex-col flex-1">
        {/* Date box + badges */}
        <div className="flex items-start justify-between gap-3 mb-4">
          {/* Calendar date block */}
          <div
            className={`shrink-0 w-14 h-14 rounded-2xl flex flex-col items-center justify-center text-center ${isPast ? "bg-gray-100" : "bg-[#e8f1ff]"}`}
          >
            <span className={`text-xs font-black uppercase tracking-wider ${isPast ? "text-gray-400" : "text-primary-colour"}`}>
              {event.month}
            </span>
            <span className={`text-2xl font-black leading-none ${isPast ? "text-gray-500" : "text-[#1a6fef]"}`}>
              {event.day}
            </span>
          </div>

          {/* Badges */}
          <div className="flex flex-col items-end gap-1.5">
            <TypeBadge type={event.type} />
            <ModeBadge mode={event.mode} />
          </div>
        </div>

        {/* Title */}
        <h3 className={`font-black text-lg leading-snug mb-1 transition-colors duration-200 ${isPast ? "text-gray-600" : "text-gray-900 group-hover:text-primary-colour"}`}>
          {event.title}
        </h3>
        <p className="text-[#5b9fff] text-sm font-semibold mb-3">{event.tagline}</p>
        <p className="text-gray-500 text-base leading-relaxed mb-4 flex-1">{event.description}</p>

        {/* Info row */}
        <div className="flex flex-col gap-1.5 mb-4 text-sm text-gray-400">
          <span className="flex items-center gap-1.5"><Clock  size={11} className="text-[#5b9fff]" /> {event.time}</span>
          <span className="flex items-center gap-1.5"><MapPin size={11} className="text-[#5b9fff]" /> {event.location}</span>
        </div>

        {/* Attendee bar (upcoming only) */}
        {!isPast && event.capacity !== Infinity && (
          <div className="mb-4">
            <AttendeeBar filled={event.attendees} capacity={event.capacity} />
          </div>
        )}

        {/* CTA */}
        {isPast ? (
          event.recap ? (
            <button className="flex items-center gap-1.5 text-base font-bold text-primary-colour hover:text-brand-800 transition-colors hover:cursor-pointer">
              <Play size={12} /> {event.recap}
            </button>
          ) : (
            <span className="text-xs text-gray-400 italic">No recording available</span>
          )
        ) : (
          <button
            className="w-full py-2.5 rounded-xl text-sm font-bold text-white transition-colors hover:cursor-pointer"
            style={{ background: "#2b7fff" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#1a6fef")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#2b7fff")}
          >
            Register →
          </button>
        )}
      </div>
    </div>
  );
};

// ─── Mini Calendar ─────────────────────────────────────────────────────────────

const MiniCalendar = ({ events }: { events: OSKEvent[] }) => {
  const eventDays = events
    .filter((e) => e.month === "JUL" && e.status !== "past")
    .map((e) => e.day);

  const days   = Array.from({ length: 31 }, (_, i) => i + 1);
  const offset = 2; // July 2025 starts on Tuesday (offset 2)

  return (
    <div className="bg-white rounded-2xl border border-[#c5d9ff] p-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <button className="w-7 h-7 rounded-full border border-[#c5d9ff] flex items-center justify-center text-primary-colour hover:bg-[#e8f1ff] transition-colors">
          <ChevronLeft size={14} />
        </button>
        <p className="text-sm font-black text-gray-900">July 2025</p>
        <button className="w-7 h-7 rounded-full border border-[#c5d9ff] flex items-center justify-center text-primary-colour hover:bg-[#e8f1ff] transition-colors">
          <ChevronRight size={14} />
        </button>
      </div>

      {/* Day labels */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {["Su","Mo","Tu","We","Th","Fr","Sa"].map((d) => (
          <div key={d} className="text-center text-xs font-bold text-gray-400">{d}</div>
        ))}
      </div>

      {/* Day cells */}
      <div className="grid grid-cols-7 gap-1">
        {/* Empty offset cells */}
        {Array.from({ length: offset }).map((_, i) => <div key={`e-${i}`} />)}

        {days.map((day) => {
          const hasEvent = eventDays.includes(day);
          const isToday  = day === 26; // demo
          return (
            <div
              key={day}
              className={`h-7 w-7 mx-auto rounded-full flex items-center justify-center text-xs font-semibold relative cursor-default transition-colors ${
                isToday
                  ? "text-white font-black"
                  : hasEvent
                  ? "text-primary-colour font-bold hover:bg-[#e8f1ff]"
                  : "text-gray-400 hover:bg-gray-50"
              }`}
              style={isToday ? { background: "#2b7fff" } : {}}
            >
              {day}
              {hasEvent && !isToday && (
                <span
                  className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                  style={{ background: "#2b7fff" }}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="mt-4 pt-4 border-t border-[#e8f1ff] flex items-center gap-3 text-xs text-gray-400">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full" style={{ background: "#2b7fff" }} />
          Event day
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-gray-200" />
          No events
        </span>
      </div>
    </div>
  );
};

// ─── Page ──────────────────────────────────────────────────────────────────────

const Events = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [showPast,     setShowPast]     = useState(false);

  const upcoming = events.filter((e) => e.status !== "past" && !e.featured);
  const past     = events.filter((e) => e.status === "past");
  const featured = events.find((e) => e.featured)!;

  const filterEvents = (list: OSKEvent[]) =>
    activeFilter === "all" ? list : list.filter((e) => e.type === activeFilter);

  const upcomingFiltered = filterEvents(upcoming);

  return (
    <>
      

      {/* ── 1. HERO ──────────────────────────────────────────────────────────── */}
      <section
        className="pt-32 pb-16 px-6 md:px-20 relative overflow-hidden"
        style={{ background: "#f0f6ff" }}
      >
        {/* Dot grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(43,127,255,0.08) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* Glow */}
        <div
          className="absolute top-0 right-0 w-125 h-125 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(43,127,255,0.1) 0%, transparent 70%)" }}
        />

        <div className="relative max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-12">

            {/* Left copy */}
            <div className="max-w-2xl">
              <EyebrowLabel text="Events & Sessions" align="left"/>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-brand-950 leading-none tracking-tight mb-5">
                Where the
                <br />
                <span style={{ color: "#2b7fff" }}>community</span>
                <br />
                shows up.
              </h1>

              <p className="text-text-body text-base md:text-lg leading-relaxed max-w-lg">
                Weekly sessions, monthly meetups, and quarterly hackathons.
                Every event is open to all skill levels — and all of them are free.
              </p>
            </div>

            {/* Right — stats + calendar */}
            <div className="flex flex-col gap-4 shrink-0 w-full lg:w-72">
              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-2">
                {[
                  { n: events.filter((e) => e.status !== "past").length, label: "Upcoming" },
                  { n: "52",  label: "This year"  },
                  { n: "100+", label: "Per event" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl p-4 text-center border"
                    style={{ background: "#e8f1ff", borderColor: "#c5d9ff" }}
                  >
                    <p className="text-xl font-black" style={{ color: "#2b7fff" }}>{s.n}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* Mini calendar */}
              <MiniCalendar events={events} />
            </div>
          </div>

          {/* Filter tabs */}
          <div
            className="flex gap-2 flex-wrap p-1.5 rounded-2xl border w-fit"
            style={{ background: "#e8f1ff", borderColor: "#c5d9ff" }}
          >
            {filterTypes.map((f) => (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className="px-4 py-2 rounded-xl text-sm font-bold transition-all duration-200 hover:cursor-pointer hover:text-base"
                style={
                  activeFilter === f.key
                    ? { background: "#2b7fff", color: "#fff" }
                    : { color: "#5b9fff", background: "transparent" }
                }
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. FEATURED EVENT ────────────────────────────────────────────────── */}
      <section className="px-6 md:px-20 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <EyebrowLabel text=" Next big event" align="left"/>
          
          <FeaturedCard event={featured} />
        </div>
      </section>

      {/* ── 3. UPCOMING EVENTS ───────────────────────────────────────────────── */}
      <section className="px-6 md:px-20 py-12" style={{ background: "#f0f6ff" }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <EyebrowLabel text="Coming up" align="left"/>
              <h2 className="text-2xl sm:text-3xl font-black text-brand-950">
                Upcoming events
              </h2>
            </div>
            <NavLink
              to="/community"
              className="hidden sm:inline-flex items-center gap-1.5 text-base font-bold transition-colors"
              style={{ color: "#2b7fff" }}
            >
              See schedule <ChevronRight size={13} />
            </NavLink>
          </div>

          {upcomingFiltered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 ">
              {upcomingFiltered.map((e) => <EventCard key={e.id} event={e} />)}
            </div>
          ) : (
            <div className="text-center py-20 text-gray-400">
              <Calendar size={36} className="mx-auto mb-4 opacity-30" />
              <p className="font-semibold text-gray-500">No events match this filter.</p>
              <button
                onClick={() => setActiveFilter("all")}
                className="mt-4 px-5 py-2 rounded-full border text-sm font-semibold transition-colors hover:cursor-pointer"
                style={{ borderColor: "#c5d9ff", color: "#2b7fff" }}
              >
                Clear filter
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── 4. NOTIFY ME STRIP  */}
      <section
        className="px-6 md:px-20 py-10 border-y"
        style={{ background: "#e8f1ff", borderColor: "#c5d9ff" }}
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: "#2b7fff" }}
            >
              <Bell size={18} className="text-white" />
            </div>
            <div>
              <p className="font-black text-brand-950 text-base mb-0.5">Never miss an event.</p>
              <p className="text-gray-500 text-sm">
                Get notified on Discord and WhatsApp before every session, meetup, and hackathon.
              </p>
            </div>
          </div>
          <div className="flex gap-3 shrink-0">
            <button
              className="px-5 py-2.5 rounded-full text-white text-sm font-bold transition-colors hover:cursor-pointer"
              style={{ background: "#2b7fff" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#1a6fef")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#2b7fff")}
            >
              Join Discord
            </button>
            <button
              className="px-5 py-2.5 rounded-full text-sm font-bold border transition-colors hover:cursor-pointer"
              style={{ borderColor: "#2b7fff", color: "#2b7fff" }}
            >
              WhatsApp group
            </button>
          </div>
        </div>
      </section>

      {/* ── 5. PAST EVENTS */}
      <section className="px-6 md:px-20 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <EyebrowLabel text="Archive" align="left"/>
              <h2 className="text-2xl sm:text-3xl font-black text-brand-950">Past events</h2>
            </div>
            <button
              onClick={() => setShowPast((p) => !p)}
              className="inline-flex items-center gap-1.5 text-base font-bold transition-colors"
              style={{ color: "#2b7fff" }}
            >
              <Filter size={12} /> {showPast ? "Hide" : "Show all"}
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {(showPast ? past : past.slice(0, 3)).map((e) => (
              <EventCard key={e.id} event={e} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. PROPOSE AN EVENT ──────────────────────────────────────────────── */}
      <section
        className="px-6 md:px-20 py-20 relative overflow-hidden bg-background-colour"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
        <div
          className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-150 h-75 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(255,255,255,0.06) 0%, transparent 70%)" }}
        />

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div>
            <EyebrowLabel text="Open to proposals" align="left"/>

            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-5">
              Have an idea for
              <br />
              an OSK event?
            </h2>

            <p className="text-[#93bbff] text-base leading-relaxed mb-8">
              We run 50+ events a year. Many of the best ones were proposed by
              community members — not the leadership team. If you want to run a
              workshop, organize a talk, or propose a hackathon theme, we want to hear it.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: <Code2 size={15} />, label: "Technical workshops" },
                { icon: <Mic   size={15} />, label: "Guest speaker talks"  },
                { icon: <Users size={15} />, label: "Community meetups"   },
                { icon: <Zap   size={15} />, label: "Themed hackathons"   },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2.5 bg-white/10 rounded-xl px-3 py-2.5">
                  <span className="text-[#93bbff]">{item.icon}</span>
                  <span className="text-white text-xs font-semibold">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — proposal card */}
          <div className="bg-white rounded-2xl p-7">
            <h3 className="text-lg font-black text-brand-950 mb-2">Submit a proposal</h3>
            <p className="text-text-black text-base leading-relaxed mb-6">
              No formal process. Send us a few lines about your idea and we'll take it from there.
            </p>

            {/* Checklist */}
            <div className="space-y-2.5 mb-6">
              {[
                "A topic or theme you want to teach or explore",
                "Whether you'd run it or want help facilitating",
                "Virtual, in-person, or either",
                "Your rough availability",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                  <CheckCircle2 size={15} className="shrink-0 mt-0.5" style={{ color: "#2b7fff" }} />
                  {item}
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-2">
              <a
                href="mailto:opensourcekigali@gmail.com?subject=Event Proposal"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-white text-sm font-bold transition-colors"
                style={{ background: "#2b7fff" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#1a6fef")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#2b7fff")}
              >
                Send proposal <ArrowUpRight size={14} />
              </a>
              <NavLink
                to="/community"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border text-sm font-semibold transition-colors"
                style={{ borderColor: "#c5d9ff", color: "#2b7fff" }}
              >
                Or suggest it in Discord
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Events;
