import { NavLink } from "react-router";
import peopleImg from '../assets/images/People.png'
import groupImg from '../assets/images/group2.png'

import { ArrowUpRight, Github, Twitter, Linkedin, Instagram, Facebook } from "lucide-react";

// ─── Data

const stats = [
  { value: "100+", label: "Active Contributors" },
  { value: "10", label: "Projects Shipped" },
  { value: "600+", label: "Pull Requests Merged" },
];

const story_points = [
  {
    number: "01",
    title: "6 years of intense research",
    body: "Rwanda has real talent. The gap was never skill — it was access to mentors, meaningful projects, and a community that made contribution feel possible.",
  },
  {
    number: "02",
    title: "Local impact, global standards",
    body: "We build real tools for real problems. Every project we ship is held to the same bar as anything you'd find on GitHub's trending page.",
  },
  {
    number: "03",
    title: "Open collaboration",
    body: "No gatekeeping. No closed rooms. Weekly sessions, code reviews, and PRs reviewed by people who actually know what they're doing.",
  },
];

const values = [
  {
    number: "01",
    title: "Contribution over Consumption",
    body: "We don't just watch tutorials and call it learning. We ship. We open PRs. We leave codebases better than we found them.",
  },
  {
    number: "02",
    title: "Local Impact First",
    body: "Rwanda has real problems. We build real tools. The best way to prove that African developers can compete globally is to first solve for the people around us.",
  },
  {
    number: "03",
    title: "Open Collaboration",
    body: "No gatekeeping. No closed rooms. If you've built something good, we want to see it. If you're struggling, we want to help.",
  },
  {
    number: "04",
    title: "Consistency over Hype",
    body: "We show up every week, not just when it's exciting. The Wednesday sessions, the code reviews, the slow PRs — that's where the real growth happens.",
  },
  {
    number: "05",
    title: "Learning by Doing",
    body: "You will not learn to swim by reading about water. Pick up an issue. Break something. Fix it. That's the curriculum.",
  },
];

const team = [
  {
    name: "Didas Mbarushimana Daniel",
    role: "COMMUNITY LEAD",
    initials: "DD",
    bg: "bg-blue-500",
    links: { twitter: "#", instagram: "#", facebook: "#", linkedin: "#" },
    featured: true,
  },
  {
    name: "Operations Lead",
    role: "OPERATIONS",
    initials: "OL",
    bg: "bg-emerald-500",
    links: { twitter: "#", instagram: "#", facebook: "#", linkedin: "#" },
  },
  {
    name: "Tech Lead",
    role: "TECHNICAL DIRECTION",
    initials: "TL",
    bg: "bg-violet-500",
    links: { twitter: "#", instagram: "#", facebook: "#", linkedin: "#" },
  },
  {
    name: "Community Manager",
    role: "COMMUNITY & ONBOARDING",
    initials: "CM",
    bg: "bg-amber-500",
    links: { twitter: "#", instagram: "#", facebook: "#", linkedin: "#" },
  },
  {
    name: "Content Lead",
    role: "CONTENT & COMMS",
    initials: "CL",
    bg: "bg-rose-500",
    links: { twitter: "#", instagram: "#", facebook: "#", linkedin: "#" },
  },
  {
    name: "Partnerships Lead",
    role: "PARTNERSHIPS",
    initials: "PL",
    bg: "bg-cyan-500",
    links: { twitter: "#", instagram: "#", facebook: "#", linkedin: "#" },
  },
];

// Floating dot decoration — purely decorative blobs like in the reference
const Dot = ({ color, size, style }) => (
  <div
    className={`absolute rounded-full ${color} ${size}`}
    style={{ opacity: 0.85, ...style }}
  />
);

const About = () => {
  return (
    <div className="font-sans">

      {/* ── HERO ──────────────────────────────────────────────────────────────── */}
      <section className="relative bg-white overflow-hidden pt-16 pb-0">

        {/* Floating dots — matching reference image aesthetic */}
        <Dot color="bg-blue-500" size="w-3 h-3" style={{ top: "18%", left: "8%" }} />
        <Dot color="bg-green-400" size="w-2.5 h-2.5" style={{ top: "30%", left: "40%" }} />
        <Dot color="bg-yellow-400" size="w-4 h-4" style={{ top: "55%", right: "22%" }} />
        <Dot color="bg-blue-400" size="w-2 h-2" style={{ top: "65%", left: "55%" }} />
        <Dot color="bg-pink-400" size="w-3 h-3" style={{ top: "80%", right: "38%" }} />
        <Dot color="bg-purple-400" size="w-2 h-2" style={{ top: "20%", right: "30%" }} />

        <div className="max-w-5xl mx-auto px-6 md:px-20 text-center relative z-10 py-16">
          {/* Nav crumb */}
          <div className="flex justify-center mb-5">
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary-colour/40 bg-primary-colour/10 text-primary-colour text-xs font-semibold tracking-widest uppercase">
              About Open Source Kigali
            </span>
          </div>
          {/* Headline */}
          <h1 className="text-3xl md:text-5xl font-black text-text-heading leading-tight mb-8">
            We're building the open<br />source movement in Rwanda.
          </h1>

          {/* CTA row */}
          <div className="flex flex-wrap  gap-4 md:gap-6 justify-center md:justify-center mt-6 mb-14">
            {/* Primary Button */}
            <div className=" sm:w-auto inline-flex items-center justify-center bg-primary-colour  px-6 py-4 rounded-full text-white text-base">
              <NavLink to="/Login" className="text-center w-full sm:w-auto">
                Join the community
              </NavLink>
            </div>

            {/* Secondary Button */}
            <div className=" sm:w-auto inline-flex items-center gap-2 px-6 py-3 border border-primary-colour text-primary-colour rounded-full hover:bg-primary-colour hover:text-white transition text-center">
              <NavLink to="/Login" className="w-full sm:w-auto">
                View Projects
              </NavLink>
            </div>
          </div>

          {/* Hero image — team group or community illustration */}
          <div className="w-full">
            <img
              src={peopleImg}
              alt="Team collaboration"
              className="w-full rounded-lg object-cover"
            />
          </div>
        </div>

        <div className="border-b border-gray-100 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-20 flex flex-wrap items-center justify-center gap-10 py-4">
            {stats.map((s) => (
              <div key={s.label} className="flex items-center gap-3 text-center">
                <span className="font-black text-primary-colour text-3xl md:text-4xl">
                  {s.value}
                </span>
                <span className="text-text-body text-base uppercase">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR STORY */}
      <section className="py-24 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div className="relative">
            <Dot color="bg-blue-500" size="w-2.5 h-2.5" style={{ top: "10%", left: "-16px" }} />
            <Dot color="bg-pink-400" size="w-4 h-4" style={{ bottom: "20%", right: "10%" }} />

            <div className="flex md:justify-items-start mb-5">
              <span className="inline-block px-4 py-1.5 rounded-full border border-primary-colour/40 bg-primary-colour/10 text-primary-colour text-xs font-semibold tracking-widest uppercase">
                Our Story
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-brand-950  mb-6">
              We're building the economic
              infrastructure for open source
              in Rwanda.
            </h2>

            <div className="flex items-start gap-4 mt-8">
              {/* Decorative half-circle like in the reference */}
              <div className="w-12 h-12 shrink-0 rounded-full border-4 border-blue-500 border-r-transparent border-b-transparent rotate-45 mt-1" />
              <p className="text-text-body text-base leading-relaxed">
                A living place for curiosity and collaboration, meeting and meaning.
                The heart of a community where developers ship real things together.
              </p>
            </div>
          </div>

          {/* Right — numbered story points */}
          <div className="flex flex-col divide-y divide-gray-100">
            {story_points.map((sp) => (
              <div key={sp.number} className="py-6 first:pt-0 last:pb-0">
                <div className="flex gap-4">
                  <span className="text-blue-500 font-black text-base w-8 shrink-0">{sp.number}.</span>
                  <div>
                    <p className="font-bold text-brand-950 text-xl mb-1">{sp.title}</p>
                    <p className="text-text-body text-sm md:text-base leading-relaxed">{sp.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR VISION */}
      <section className="py-24 px-6 md:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: team preview cards — replacing the photo in the reference */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={groupImg}
                alt="Community collaboration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: vision text */}
          <div className="relative">
            <Dot color="bg-yellow-400" size="w-4 h-4" style={{ top: "-12px", right: "20%" }} />
            <Dot color="bg-pink-400" size="w-3 h-3" style={{ bottom: "10%", left: "-8px" }} />

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-brand-950 mb-6 leading-snug">
              Our Vision
            </h2>
            <div className="space-y-4 text-gray-500 text-sm md:text-base leading-relaxed">
              <p>
                We believe Rwanda will look different after a generation of developers
                who learned by shipping — not by watching. Just as open source transformed
                the global tech industry, we believe it can transform ours.
              </p>
              <p>
                We foresee a thriving ecosystem where contributors from Kigali are
                building tools used worldwide, where a student's first PR opens doors
                to global opportunities, and where "made in Rwanda" is a mark of quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES  */}
      <section className="py-24 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <div className="flex justify-items-start mb-5">
                <span className="inline-block px-4 py-1.5 rounded-full border border-primary-colour/40 bg-primary-colour/10 text-primary-colour text-xs font-semibold tracking-widest uppercase">
                  What We Stand For
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-brand-950">
                Five things we don't negotiate on.
              </h2>
            </div>
            <p className="text-text-body text-base md:text-lg md:font-medium max-w-xs   md:block text-start">
              These aren't values we put on a wall. They're the ones that show up in how we run sessions, review PRs, and treat new members.
            </p>
          </div>

          <div className="divide-y divide-gray-100">
            {values.map((v) => (
              <div
                key={v.number}
                className="group py-8 grid grid-cols-12 gap-6 items-start hover:bg-gray-50 hover:-mx-6 hover:px-6 rounded-xl transition-all duration-200 cursor-default"
              >
                <span className="col-span-2 md:col-span-1 text-gray-200 font-black text-2xl group-hover:text-blue-500 transition-colors font-mono">
                  {v.number}
                </span>
                <div className="col-span-10 md:col-span-11 grid md:grid-cols-2 gap-2 md:gap-12 items-baseline">
                  <h3 className="text-base md:text-xl font-bold text-brand-950">{v.title}</h3>
                  <p className="text-text-body text-sm md:text-base leading-relaxed">{v.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEADING TEAM */}
      <section className="py-24 px-6 md:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <div className="flex justify-items-center mb-5">
                <span className="inline-block px-4 py-1.5 rounded-full border border-primary-colour/40 bg-primary-colour/10 text-primary-colour text-xs font-semibold tracking-widest uppercase">
                  The People
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-brand-950">
                Leading, Strong<br />Creative Team
              </h2>
            </div>
            <p className="text-text-body text-base md:text-lg md:font-medium max-w-xs   md:block text-start">
              OSK is led by a volunteer team of contributors who spend their own time making the community better for everyone else.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((m) => (
              <div
                key={m.initials}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow duration-200 group"
              >
                {/* Avatar area */}
                <div className={`${m.bg} h-48 flex items-center justify-center relative overflow-hidden`}>
                  <span className="text-white font-black text-7xl opacity-20">{m.initials}</span>
                  {m.featured && (
                    <span className="absolute top-3 right-3 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Lead
                    </span>
                  )}
                </div>
                {/* Info */}
                <div className="p-5">
                  <p className="font-black text-gray-900 text-base">{m.name}</p>
                  <p className="text-blue-500 text-xs font-bold tracking-widest mt-0.5 mb-4">{m.role}</p>
                  <div className="flex gap-2">
                    {[
                      { Icon: Twitter, href: m.links.twitter },
                      { Icon: Instagram, href: m.links.instagram },
                      { Icon: Facebook, href: m.links.facebook },
                      { Icon: Linkedin, href: m.links.linkedin },
                    ].map(({ Icon, href }, i) => (
                      <a
                        key={i}
                        href={href}
                        className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-blue-500 hover:text-blue-500 transition"
                      >
                        <Icon size={12} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA */}
      <section className="py-24 px-6 md:px-20 bg-background-colour relative overflow-hidden ">
        <Dot color="bg-blue-500" size="w-48 h-48" style={{ top: "-24px", right: "-24px", opacity: 0.08 }} />
        <Dot color="bg-blue-400" size="w-32 h-32" style={{ bottom: "-16px", left: "10%", opacity: 0.06 }} />

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-10 relative z-10">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
              Your first PR<br />
              <span className="text-blue-400">is one click away.</span>
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 -shrink-0">
            <NavLink
              to="/Login"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-full transition text-sm"
            >
              Join the Community <ArrowUpRight size={15} />
            </NavLink>
            <NavLink
              to="/projects"
              className="inline-flex items-center justify-center px-7 py-3.5 border border-white/20 text-white/70 hover:border-white/50 hover:text-white rounded-full transition text-sm"
            >
              Browse Projects
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
