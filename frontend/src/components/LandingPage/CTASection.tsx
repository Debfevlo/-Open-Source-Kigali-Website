import { NavLink } from "react-router";
import { GitPullRequest, UserPlus, GitMerge, Zap, ArrowRight } from "lucide-react";

interface ActivityItem {
  id: number;
  icon: React.ReactNode;
  iconBg: string;
  text: string;
  time: string;
}

const activity: ActivityItem[] = [
  {
    id: 1,
    icon: <GitMerge size={13} />,
    iconBg: "bg-green-500",
    text: "Amina merged PR #42 into EduTrack Rwanda",
    time: "2 min ago",
  },
  {
    id: 2,
    icon: <UserPlus size={13} />,
    iconBg: "bg-blue-500",
    text: "Jean-Paul joined as a new contributor",
    time: "11 min ago",
  },
  {
    id: 3,
    icon: <GitPullRequest size={13} />,
    iconBg: "bg-purple-500",
    text: "Clarisse opened issue #17 on AfyaConnect",
    time: "34 min ago",
  },
  {
    id: 4,
    icon: <Zap size={13} />,
    iconBg: "bg-yellow-500",
    text: "OSK Hackathon Q3 — registration is now open",
    time: "1 hr ago",
  },
  {
    id: 5,
    icon: <GitMerge size={13} />,
    iconBg: "bg-green-500",
    text: "Emile merged PR #38 into OpenRwanda Map",
    time: "2 hr ago",
  },
];

const stats = [
  { value: "100+", label: "Contributors" },
  { value: "600+", label: "Pull Requests" },
  { value: "10", label: "Active Projects" },
];

const CTASection = () => {
  return (
    <section
      className="relative overflow-hidden py-24 px-4 md:px-20"
      style={{
        background: "#0a0f1e",
        backgroundSize: "28px 28px",
      }}
    >
      {/* Glow blobs */}
      <div
        className="absolute top-0 left-0 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.14) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(99,102,241,0.11) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT: Copy */}
          <div>
            {/* Live badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-brand-800 bg-brand-900">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-brand-200 text-xs font-medium tracking-wide uppercase">
                Community is live · Join 100+ contributors
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-50 leading-tight mb-6">
              Stop{" "}
              <span className="text-text-supporting line-through decoration-brand-400">
                learning.
              </span>
              <br />
              Start{" "}
              <span className="text-primary-colour">building.</span>
            </h2>

            <p className="text-text-diabled text-base md:text-lg leading-relaxed mb-10 max-w-md">
              Real skills come from real contributions. Open Source Kigali connects
              you to live projects, active mentors, and a community of builders
              shaping Rwanda's tech future.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <NavLink
                to="/Login"
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-full transition-colors duration-200 text-sm sm:text-base"
              >
                Join the Community
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </NavLink>
              <NavLink
                to="/projects"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 text-white/70 hover:border-white/50 hover:text-white font-medium rounded-full transition-colors duration-200 text-sm sm:text-base"
              >
                View Open Issues
              </NavLink>
            </div>

            {/* Stat pills */}
            <div className="flex flex-wrap gap-3">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="px-4 py-2 rounded-full border border-white/10 bg-white/5"
                >
                  <span className="text-white font-bold text-sm">{s.value}</span>
                  <span className="text-gray-500 text-sm ml-1.5">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Activity Card */}
          <div className="relative">
            <div
              className="rounded-2xl overflow-hidden border border-white/10"
              style={{
                background: "#111827",
                boxShadow: "0 0 0 1px rgba(59,130,246,0.1), 0 32px 64px rgba(0,0,0,0.5)",
              }}
            >
              {/* Mac-style header bar */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/8 bg-white/3">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-gray-500 text-xs font-mono">live activity</span>
                </div>
              </div>

              {/* Activity Feed */}
              <ul className="divide-y divide-white/5">
                {activity.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-start gap-3 px-5 py-4 transition-colors duration-150 hover:bg-white/3"
                  >
                    <div
                      className={`mt-0.5 w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-white ${item.iconBg}`}
                    >
                      {item.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-gray-300 text-sm leading-snug">{item.text}</p>
                      <p className="text-gray-600 text-xs mt-0.5">{item.time}</p>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Card footer */}
              <div className="px-5 py-3.5 border-t border-white/8 bg-white/2 flex items-center justify-between">
                <span className="text-gray-600 text-xs font-mono">
                  github · opensourcekigali
                </span>
                <NavLink
                  to="/Login"
                  className="text-blue-400 hover:text-blue-300 text-xs font-medium transition-colors"
                >
                  View all activity →
                </NavLink>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTASection;
