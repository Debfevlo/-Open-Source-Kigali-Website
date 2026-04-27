
import { NavLink } from "react-router";
import {
  Github,
  MessageCircle,
  Linkedin,
  Twitter,
  ArrowUpRight,
  Hash,
  Users,
  Shield,
  
} from "lucide-react";


// ─── Data

const stats = [
  { value: "100+", label: "Members", sub: "and growing" },
  { value: "52", label: "Sessions held", sub: "every Wednesday" },
  { value: "600+", label: "Pull requests", sub: "merged on GitHub" },
  { value: "10", label: "Live projects", sub: "open to contribute" },
];

const channels = [
  { name: "general", emoji: "💬", desc: "Day-to-day talk, intros, memes, everything.", members: 98, active: true },
  { name: "code-review", emoji: "🔍", desc: "Post your PRs. Get honest, helpful feedback.", members: 74, active: true },
  { name: "good-first-issues", emoji: "🟢", desc: "Curated issues for people just getting started.", members: 61, active: false },
  { name: "opportunities", emoji: "📌", desc: "Jobs, internships, grants, and collabs shared here first.", members: 89, active: true },
  { name: "project-updates", emoji: "📦", desc: "Maintainers post progress. Contributors stay in the loop.", members: 55, active: false },
  { name: "design-collab", emoji: "🎨", desc: "Figma links, UI feedback, design systems discussions.", members: 42, active: false },
  { name: "events", emoji: "📅", desc: "Hackathons, meetups, workshops — everything calendar-worthy.", members: 77, active: true },
  { name: "off-topic", emoji: "☕", desc: "Because not everything has to be about code.", members: 93, active: false },
];





const guidelines = [
  { rule: "Respect everyone, always. Experience level is not a ranking." },
  { rule: "Ask dumb questions. There are no dumb questions in #general." },
  { rule: "Give feedback on code, not people. Be direct, not unkind." },
  { rule: "Share opportunities. If it's good for you, share it — someone else needs it too." },
  { rule: "Show up. You don't have to be perfect, but you have to be present." },
  { rule: "Violations of safety or respect get you removed. No negotiation." },
];

const socialPlatforms = [
  {
    icon: <MessageCircle size={22} />,
    name: "Discord",
    handle: "OSK Community",
    desc: "Main hub for daily chat, sessions, and support",
    color: "bg-indigo-500",
    link: "#",
    cta: "Join Server",
  },
  {
    icon: <Github size={22} />,
    name: "GitHub",
    handle: "opensourcekigali",
    desc: "All projects, issues, and pull requests live here",
    color: "bg-gray-900",
    link: "#",
    cta: "View Org",
  },
  {
    icon: <Linkedin size={22} />,
    name: "LinkedIn",
    handle: "Open Source Kigali",
    desc: "Professional updates, member features, and opportunities",
    color: "bg-blue-600",
    link: "#",
    cta: "Follow",
  },
  {
    icon: <Twitter size={22} />,
    name: "X / Twitter",
    handle: "@OSKigali",
    desc: "Quick updates, event announcements, and thread drops",
    color: "bg-gray-800",
    link: "#",
    cta: "Follow",
  },
];


const Community = () => {
  

  return (
    <>
      {/* ── 1. HERO  */}
      <section className="pt-32 pb-20 px-6 md:px-20 bg-[#FFFBF7] relative overflow-hidden">
        {/* Subtle warm grid */}
        <div

        />

        <div className="relative max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">

            {/* Left */}
            <div className="max-w-2xl">
              {/* Live badge */}
              <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full bg-green-100 border border-green-200">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-green-700 text-xs font-semibold">Community is live</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-brand-950 leading-none tracking-tight mb-6">
                This is where
                <br />
                <span className="text-blue-500">builders</span> come
                <br />
                to find{" "}
                <span className="relative inline-block">
                  <span>their people.</span>
                  {/* Hand-drawn underline effect */}
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    height="8"
                    viewBox="0 0 200 8"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M2 6 C40 2, 80 7, 120 4 C160 1, 190 6, 198 5"
                      stroke="#3b82f6"
                      strokeWidth="2.5"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>

              <p className="text-text-body text-base md:text-lg leading-relaxed max-w-lg">
                OSK is not a Slack channel you forget about. It's a weekly rhythm
                of sessions, PRs, and real conversations between people trying to
                build things that matter in Rwanda.
              </p>
            </div>

            {/* Right — stat strip */}
            <div className="grid grid-cols-2 gap-3 lg:min-w-[320px]">
              {stats.map((s) => (
                <div key={s.label} className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
                  <p className="text-3xl font-black text-gray-950 leading-none mb-1">{s.value}</p>
                  <p className="text-gray-800 text-sm font-semibold">{s.label}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{s.sub}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll hint */}
          <div className="mt-16 flex items-center flex-wrap gap-3">
            <div className="flex -space-x-2">
              {["DD", "AU", "JH", "CI", "EN"].map((ini, i) => (
                <div
                  key={ini}
                  className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                  style={{ background: ["#3b82f6", "#10b981", "#8b5cf6", "#f59e0b", "#ef4444"][i], zIndex: 5 - i }}
                >
                  {ini}
                </div>
              ))}
            </div>
            <p className="text-gray-500 text-sm">
              <span className="font-semibold text-gray-900">100+ people</span> already building — come meet them.
            </p>
            <NavLink
              to="/Login"
              className="ml-auto inline-flex  gap-1.5 px-5 py-2.5 bg-blue-500 hover:bg-blue-400 text-white text-sm font-semibold rounded-full transition-colors  items-center"
            >
              Join the Community Now <ArrowUpRight size={14} />
            </NavLink>
          </div>
        </div>
      </section>

      {/* WHERE WE HANG */}
      <section className="py-24 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="flex justify-items-center mb-5">
                <span className="inline-block px-4 py-1.5 rounded-full border border-primary-colour/40 bg-primary-colour/10 text-primary-colour text-xs font-semibold tracking-widest uppercase">
                  The Channels
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-950 leading-tight">
                Where the real talk happens.
              </h2>
            </div>

            <p className="text-text-body text-sm md:text-base max-w-sm md:text-right leading-relaxed">
              We use Discord and WhatsApp. These are the channels you'll actually use every day.
            </p>
          </div>

          {/* Channel Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {channels.map((ch) => (
              <div
                key={ch.name}
                className="group rounded-2xl border border-gray-100 bg-white p-5
                     hover:border-gray-200 hover:shadow-md hover:-translate-y-1
                     transition-all duration-300 cursor-default"
              >
                {/* Header Row */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">{ch.emoji}</span>

                  <div className="flex items-center gap-1.5 flex-1 min-w-0">
                    <Hash size={13} className="text-text-body shrink-0" />
                    <span className="font-mono text-base font-semibold text-gray-900 truncate">
                      {ch.name}
                    </span>
                  </div>

                  {ch.active && (
                    <span
                      className="w-2.5 h-2.5 rounded-full bg-green-400 shrink-0
                           shadow-sm animate-pulse"
                      title="Active now"
                    />
                  )}
                </div>

                {/* Description */}
                <p className="text-text-body text-sm leading-relaxed mb-4">
                  {ch.desc}
                </p>

                {/* Footer */}
                <div className="flex items-center gap-1 text-text-supporting">
                  <Users size={14} />
                  <span className="text-xs">{ch.members}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Platform Links */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {socialPlatforms.map((p) => (
              <a
                key={p.name}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 p-5 rounded-2xl
                     bg-gray-50 hover:bg-white hover:shadow-md
                     border border-transparent hover:border-gray-100
                     transition-all duration-300"
              >
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center text-white shrink-0
                        shadow-sm group-hover:scale-105 transition-transform ${p.color}`}
                >
                  {p.icon}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <p className="font-semibold text-gray-900 text-base group-hover:text-gray-700 transition-colors">
                      {p.name}
                    </p>

                    <ArrowUpRight
                      size={14}
                      className="text-gray-400 group-hover:text-gray-700 transition-colors"
                    />
                  </div>

                  <p className="text-text-supporting text-sm font-mono truncate mb-1">
                    {p.handle}
                  </p>

                  <p className="text-gray-400 text-xs leading-snug">
                    {p.desc}
                  </p>
                </div>
              </a>
            ))}
          </div>

        </div>
      </section>

      

      {/* ── 5. COMMUNITY GUIDELINES */}
      <section className="py-24 px-6 md:px-20 bg-gray-950">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-blue-400 mb-3">
              How we treat each other
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
              Six rules.
              <br />
              <span className="text-gray-500">No fine print.</span>
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-8">
              OSK is only as good as the people in it. These aren't policies written by a
              lawyer — they're the norms that have made this community a place people
              actually want to spend time.
            </p>
            <div className="flex items-center gap-3">
              <Shield size={16} className="text-blue-400 shrink-0" />
              <p className="text-gray-500 text-sm">
                Violations are handled by the moderation team. Repeat offences result in removal.
              </p>
            </div>
          </div>

          {/* Right — rules */}
          <div className="space-y-3">
            {guidelines.map((g, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-white/5 border border-white/8 rounded-xl px-5 py-4 hover:bg-white/8 transition-colors duration-200"
              >
                <span className="text-gray-600 font-mono text-sm shrink-0 mt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-gray-300 text-sm leading-relaxed">{g.rule}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. BOTTOM CTA */}
      <section className="py-24 px-6 md:px-20 bg-[#FFFBF7]">
        <div className="max-w-7xl mx-auto">
          {/* Big centered statement */}
          <div className="text-center max-w-3xl mx-auto mb-14">
             <div className="flex justify-center mb-5">
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary-colour/40 bg-primary-colour/10 text-primary-colour text-xs font-semibold tracking-widest uppercase">
            You Have made it this Far
          </span>
        </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-950 leading-tight mb-6">
              The community tab won't close itself.
            </h2>
            <p className="text-text-body text-base md:text-lg leading-relaxed">
              You've read enough. The next step isn't another page — it's joining the Discord,
              saying hi in #general, and finding your first issue. Takes 10 minutes.
            </p>
          </div>

          {/* Two big action cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
            <NavLink
              to="/Login"
              className="group flex flex-col items-start p-7 bg-blue-500 hover:bg-blue-400 rounded-2xl text-white transition-colors duration-200"
            >
              <MessageCircle size={28} className="mb-4" />
              <p className="font-black text-xl mb-1">Join Discord</p>
              <p className="text-blue-100 text-sm mb-6 leading-snug">
                Where the sessions happen and the community lives.
              </p>
              <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold group-hover:gap-2.5 transition-all">
                Open server <ArrowUpRight size={14} />
              </span>
            </NavLink>

            <NavLink
              to="/projects"
              className="group flex flex-col items-start p-7 bg-gray-950 hover:bg-gray-800 rounded-2xl text-white transition-colors duration-200"
            >
              <Github size={28} className="mb-4" />
              <p className="font-black text-xl mb-1">Browse Projects</p>
              <p className="text-gray-400 text-sm mb-6 leading-snug">
                10 live repos. Find one that fits your skills.
              </p>
              <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold group-hover:gap-2.5 transition-all text-gray-300">
                View GitHub <ArrowUpRight size={14} />
              </span>
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default Community;
