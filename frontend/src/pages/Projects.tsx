import { useState } from "react";
import { NavLink } from "react-router";
import {
  Github,
  ArrowUpRight,
  GitPullRequest,
  Users,
  AlertCircle,
  Star,
  GitFork,
  Search,
  Filter,
  ExternalLink,
  Code2,
  Zap,
  CheckCircle2,
  Clock,
} from "lucide-react";
import youth from "../assets/images/Youth meetup.jpg";
import people from "../assets/images/People.png";
import smart from "../assets/images/smart devices.jpg";
import map from "../assets/images/Map.jpg";

// ─── Types

type ProjectStatus = "active" | "seeking" | "maintenance" | "new";
type ProjectCategory = "all" | "platform" | "health" | "education" | "maps" | "tools";

interface Issue {
  id: number;
  title: string;
  label: "good first issue" | "help wanted" | "bug" | "enhancement";
  project: string;
  difficulty: "beginner" | "intermediate" | "advanced";
}

interface Project {
  id: number;
  slug: string;
  status: ProjectStatus;
  category: ProjectCategory;
  image: string;
  title: string;
  tagline: string;
  description: string;
  techStack: string[];
  stats: {
    contributors: number;
    prs: number;
    openIssues: number;
    stars: number;
    forks: number;
  };
  featured: boolean;
  language: string;
  langColor: string;
  lastActivity: string;
  maintainer: string;
}

// ─── Data

const STATUS_META: Record<ProjectStatus, { label: string; badgeBg: string; badgeText: string; badgeBorder: string; dot: string }> = {
  active: { label: "Active", badgeBg: "bg-green-50", badgeText: "text-green-700", badgeBorder: "border-green-200", dot: "bg-green-500" },
  seeking: { label: "Seeking Contributors", badgeBg: "bg-blue-50", badgeText: "text-blue-600", badgeBorder: "border-blue-200", dot: "bg-blue-500" },
  maintenance: { label: "Maintenance", badgeBg: "bg-amber-50", badgeText: "text-amber-700", badgeBorder: "border-amber-200", dot: "bg-amber-400" },
  new: { label: "New", badgeBg: "bg-violet-50", badgeText: "text-violet-700", badgeBorder: "border-violet-200", dot: "bg-violet-500" },
};

const CATEGORY_FILTERS: { key: ProjectCategory; label: string }[] = [
  { key: "all", label: "All Projects" },
  { key: "platform", label: "Platform" },
  { key: "health", label: "Health" },
  { key: "education", label: "Education" },
  { key: "maps", label: "Maps & Data" },
  { key: "tools", label: "Dev Tools" },
];

const projects: Project[] = [
  {
    id: 1,
    slug: "kigali-community-hub",
    status: "active",
    category: "platform",
    image: youth,
    title: "Kigali Community Hub",
    tagline: "The front door for Kigali's tech scene.",
    description: "An open-source platform that helps tech communities in Kigali showcase events, projects, and opportunities in one place. Brings together developers, designers, and tech enthusiasts by making it easy to discover meetups, open-source initiatives, and collaboration opportunities.",
    techStack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    stats: { contributors: 18, prs: 94, openIssues: 12, stars: 43, forks: 11 },
    featured: true,
    language: "TypeScript",
    langColor: "#3178c6",
    lastActivity: "2 hours ago",
    maintainer: "DD",
  },
  {
    id: 2,
    slug: "edutrack-rwanda",
    status: "seeking",
    category: "education",
    image: people,
    title: "EduTrack Rwanda",
    tagline: "Attendance & performance tracking for Rwandan schools.",
    description: "A student performance and attendance tracking system designed for schools and learning communities across Rwanda. Built with low-bandwidth environments in mind — works offline-first.",
    techStack: ["React", "Python", "Django", "SQLite", "PWA"],
    stats: { contributors: 9, prs: 41, openIssues: 8, stars: 27, forks: 6 },
    featured: false,
    language: "Python",
    langColor: "#3572A5",
    lastActivity: "1 day ago",
    maintainer: "JH",
  },
  {
    id: 3,
    slug: "afyaconnect",
    status: "active",
    category: "health",
    image: smart,
    title: "AfyaConnect",
    tagline: "Verified health resources, one tap away.",
    description: "An open-source health information portal that connects communities with verified health resources and local support centers. Supports English, French, and Kinyarwanda.",
    techStack: ["Next.js", "Supabase", "Tailwind CSS", "i18n"],
    stats: { contributors: 14, prs: 67, openIssues: 5, stars: 38, forks: 9 },
    featured: false,
    language: "JavaScript",
    langColor: "#f1e05a",
    lastActivity: "3 hours ago",
    maintainer: "AU",
  },
  {
    id: 4,
    slug: "openrwanda-map",
    status: "new",
    category: "maps",
    image: map,
    title: "OpenRwanda Map",
    tagline: "Mapping Rwanda's tech ecosystem, together.",
    description: "A collaborative mapping project that highlights tech hubs, coworking spaces, and innovation centers across Rwanda. Built on OpenStreetMap, fully open and community-edited.",
    techStack: ["Leaflet.js", "React", "OpenStreetMap", "GeoJSON"],
    stats: { contributors: 6, prs: 18, openIssues: 14, stars: 19, forks: 4 },
    featured: false,
    language: "JavaScript",
    langColor: "#f1e05a",
    lastActivity: "5 days ago",
    maintainer: "EN",
  },
  {
    id: 5,
    slug: "osk-cli",
    status: "seeking",
    category: "tools",
    image: youth,
    title: "OSK CLI",
    tagline: "Contribute to OSK projects from your terminal.",
    description: "A command-line tool that lets contributors browse open issues, fork projects, and set up dev environments in one command. Reduces the barrier to a first contribution dramatically.",
    techStack: ["Node.js", "Commander.js", "Inquirer", "GitHub API"],
    stats: { contributors: 4, prs: 12, openIssues: 9, stars: 14, forks: 2 },
    featured: false,
    language: "JavaScript",
    langColor: "#f1e05a",
    lastActivity: "2 days ago",
    maintainer: "TL",
  },
  {
    id: 6,
    slug: "rwanda-jobs-board",
    status: "maintenance",
    category: "platform",
    image: people,
    title: "Rwanda Jobs Board",
    tagline: "Tech jobs in Rwanda. Open source. No middleman.",
    description: "An open-source job board focused on tech roles in Rwanda. Companies post directly; the community helps vet and surfaces relevant opportunities to contributors.",
    techStack: ["Astro", "Prisma", "PostgreSQL", "Vercel"],
    stats: { contributors: 7, prs: 29, openIssues: 3, stars: 31, forks: 7 },
    featured: false,
    language: "TypeScript",
    langColor: "#3178c6",
    lastActivity: "1 week ago",
    maintainer: "CM",
  },
];

const goodFirstIssues: Issue[] = [
  { id: 1, title: "Add dark mode toggle to the navbar", label: "good first issue", project: "Kigali Community Hub", difficulty: "beginner" },
  { id: 2, title: "Translate onboarding copy to Kinyarwanda", label: "good first issue", project: "AfyaConnect", difficulty: "beginner" },
  { id: 3, title: "Fix attendance export to CSV — wrong headers", label: "bug", project: "EduTrack Rwanda", difficulty: "beginner" },
  { id: 4, title: "Add 'copy link' button to event cards", label: "enhancement", project: "Kigali Community Hub", difficulty: "beginner" },
  { id: 5, title: "Write README for the CLI setup guide", label: "good first issue", project: "OSK CLI", difficulty: "beginner" },
  { id: 6, title: "Add marker clustering to the map view", label: "help wanted", project: "OpenRwanda Map", difficulty: "intermediate" },
];

const LABEL_STYLES: Record<Issue["label"], string> = {
  "good first issue": "bg-green-50 text-green-700 border border-green-200",
  "help wanted": "bg-blue-50 text-blue-600 border border-blue-200",
  "bug": "bg-red-50 text-red-600 border border-red-200",
  "enhancement": "bg-violet-50 text-violet-700 border border-violet-200",
};

const DIFFICULTY_STYLES: Record<Issue["difficulty"], string> = {
  beginner: "text-green-600",
  intermediate: "text-amber-600",
  advanced: "text-red-500",
};

// ─── Sub-components 

const StatusBadge = ({ status }: { status: ProjectStatus }) => {
  const m = STATUS_META[status];
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${m.badgeBg} ${m.badgeText} ${m.badgeBorder}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${m.dot}`} />
      {m.label}
    </span>
  );
};

const TechPill = ({ tech }: { tech: string }) => (
  <span className="px-2.5 py-1 rounded-full bg-gray-100 border border-gray-200 text-gray-500 text-xs font-mono font-medium">
    {tech}
  </span>
);

const LangDot = ({ color, name }: { color: string; name: string }) => (
  <div className="flex items-center gap-1.5">
    <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: color }} />
    <span className="text-xs text-gray-400 font-medium">{name}</span>
  </div>
);

// ─── Featured Project Card

const FeaturedCard = ({ project }: { project: Project }) => (
  <div className="relative rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm mb-6 group">
    <div className="md:flex md:items-stretch">

      {/* Image */}
      <div className="md:w-2/5 h-56 sm:h-72 md:h-auto relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, transparent, rgba(0,0,0,0.08))" }}
        />
        <div className="absolute top-4 left-4">
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-white text-xs font-bold"
            style={{ backgroundColor: "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)" }}
          >
            <Star size={11} className="text-amber-400" />
            Featured Project
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="md:w-3/5 p-6 sm:p-8 md:p-10 flex flex-col justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <StatusBadge status={project.status} />
            <span className="text-gray-300 text-xs">·</span>
            <LangDot color={project.langColor} name={project.language} />
            <span className="text-gray-300 text-xs">·</span>
            <span className="text-xs text-gray-400 flex items-center gap-1">
              <Clock size={11} /> {project.lastActivity}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight mb-2">
            {project.title}
          </h3>
          <p className="text-blue-500 font-semibold text-sm mb-4">{project.tagline}</p>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-6">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.map((t) => <TechPill key={t} tech={t} />)}
          </div>
        </div>

        <div>
          {/* Stats */}
          <div className="flex flex-wrap gap-5 text-sm text-gray-500 mb-6 pb-6 border-b border-gray-100">
            <span className="flex items-center gap-1.5">
              <Users size={14} className="text-blue-400" />
              <strong className="text-gray-900 font-bold">{project.stats.contributors}</strong> contributors
            </span>
            <span className="flex items-center gap-1.5">
              <GitPullRequest size={14} className="text-blue-400" />
              <strong className="text-gray-900 font-bold">{project.stats.prs}</strong> PRs merged
            </span>
            <span className="flex items-center gap-1.5">
              <AlertCircle size={14} className="text-orange-400" />
              <strong className="text-gray-900 font-bold">{project.stats.openIssues}</strong> open issues
            </span>
            <span className="flex items-center gap-1.5">
              <Star size={14} className="text-amber-400" />
              <strong className="text-gray-900 font-bold">{project.stats.stars}</strong>
            </span>
            <span className="flex items-center gap-1.5">
              <GitFork size={14} className="text-gray-400" />
              <strong className="text-gray-900 font-bold">{project.stats.forks}</strong>
            </span>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3">
            <NavLink
              to={`/projects/${project.slug}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold rounded-full transition-colors"
            >
              View Project <ArrowUpRight size={14} />
            </NavLink>
            <a
              href={`https://github.com/opensourcekigali/${project.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-200 text-gray-700 hover:border-gray-400 hover:text-gray-900 text-sm font-semibold rounded-full transition-colors"
            >
              <Github size={14} /> Contribute
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// ─── Project Card ─────────────────────────────────────────────────────────────

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="bg-white rounded-2xl border border-gray-200 flex flex-col group hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 overflow-hidden">

    {/* Image */}
    <div className="h-44 overflow-hidden relative">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute top-3 left-3">
        <StatusBadge status={project.status} />
      </div>
    </div>

    {/* Body */}
    <div className="p-5 flex flex-col flex-1">
      <div className="flex items-center gap-3 mb-3">
        <LangDot color={project.langColor} name={project.language} />
        <span className="text-gray-300 text-xs">·</span>
        <span className="text-xs text-gray-400 flex items-center gap-1">
          <Clock size={10} /> {project.lastActivity}
        </span>
      </div>

      <h4 className="font-black text-gray-900 text-lg tracking-tight mb-1">{project.title}</h4>
      <p className="text-blue-500 text-xs font-semibold mb-3">{project.tagline}</p>
      <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.techStack.slice(0, 3).map((t) => <TechPill key={t} tech={t} />)}
        {project.techStack.length > 3 && (
          <span className="px-2.5 py-1 text-xs text-gray-400 font-mono">
            +{project.techStack.length - 3}
          </span>
        )}
      </div>

      {/* Stats */}
      <div className="flex items-center gap-4 text-xs text-gray-500 mb-5 pb-4 border-b border-gray-100">
        <span className="flex items-center gap-1">
          <Users size={12} className="text-blue-400" />
          <strong className="text-gray-900">{project.stats.contributors}</strong>
        </span>
        <span className="flex items-center gap-1">
          <GitPullRequest size={12} className="text-blue-400" />
          <strong className="text-gray-900">{project.stats.prs}</strong>
        </span>
        <span className="flex items-center gap-1">
          <AlertCircle size={12} className="text-orange-400" />
          <strong className="text-gray-900">{project.stats.openIssues}</strong> open
        </span>
        <span className="flex items-center gap-1 ml-auto">
          <Star size={12} className="text-amber-400" />
          <strong className="text-gray-900">{project.stats.stars}</strong>
        </span>
      </div>

      {/* Buttons */}
      <div className="flex gap-2">
        <NavLink
          to={`/projects/${project.slug}`}
          className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-blue-500 hover:bg-blue-600 text-white text-xs font-semibold rounded-full transition-colors"
        >
          View Project
        </NavLink>
        <a
          href={`https://github.com/opensourcekigali/${project.slug}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:text-gray-700 hover:border-gray-400 transition-colors"
          aria-label="GitHub"
        >
          <Github size={15} />
        </a>
      </div>
    </div>
  </div>
);

// ─── Issue Row ────────────────────────────────────────────────────────────────

const IssueRow = ({ issue }: { issue: Issue }) => (
  <div className="flex items-start gap-4 py-4 border-b border-gray-100 last:border-0 group hover:bg-gray-50 -mx-5 px-5 rounded-lg transition-colors duration-150 cursor-pointer">
    <div className="w-5 h-5 rounded-full border-2 border-gray-200 bg-white flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:border-blue-400 transition-colors">
      <AlertCircle size={11} className="text-gray-300 group-hover:text-blue-400 transition-colors" />
    </div>
    <div className="flex-1 min-w-0">
      <p className="text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition-colors leading-snug mb-1.5">
        {issue.title}
      </p>
      <div className="flex flex-wrap items-center gap-2">
        <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${LABEL_STYLES[issue.label]}`}>
          {issue.label}
        </span>
        <span className="text-gray-300 text-xs">·</span>
        <span className="text-xs text-gray-400 font-mono">{issue.project}</span>
        <span className="text-gray-300 text-xs">·</span>
        <span className={`text-xs font-semibold ${DIFFICULTY_STYLES[issue.difficulty]}`}>
          {issue.difficulty}
        </span>
      </div>
    </div>
    <ExternalLink size={14} className="text-gray-300 group-hover:text-blue-400 transition-colors mt-0.5 flex-shrink-0" />
  </div>
);

// ─── Page ─────────────────────────────────────────────────────────────────────

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const [activeStatus, setActiveStatus] = useState<ProjectStatus | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");

  const featured = projects.find((p) => p.featured)!;
  const rest = projects.filter((p) => !p.featured);

  const filtered = rest.filter((p) => {
    const matchCat = activeCategory === "all" || p.category === activeCategory;
    const matchStatus = activeStatus === "all" || p.status === activeStatus;
    const matchSearch = !searchQuery ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchCat && matchStatus && matchSearch;
  });

  return (
    <>
      {/* ── 1. HERO ──────────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-0 px-6 md:px-20 bg-[#FFFBF7] relative overflow-hidden">

        <div className="relative max-w-7xl mx-auto">
          <div className="flex justify-items-center mb-8">
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary-colour/40 bg-primary-colour/10 text-primary-colour text-xs font-semibold tracking-widest uppercase">
              Clear the Confusion
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-10 mb-16">
  
  {/* LEFT SIDE: TEXT */}
  <div>
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-none tracking-tight text-brand-950 mb-5">
      Real projects.
      <br />
      <span className="text-blue-500">Real code.</span>
      <br />
      <span className="text-brand-950">Ready for your PR.</span>
    </h1>

    <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-xl mt-12">
      Every project here solves a real problem in Rwanda or beyond.
      Pick one, claim an issue, and ship something you can point to.
    </p>
  </div>

  {/* RIGHT SIDE: STATS */}
  <div
    className="grid grid-cols-3 shrink-0 rounded-2xl overflow-hidden"
    style={{ border: "1px solid #1f2937" }}
  >
    {[
      { n: projects.length, label: "Projects" },
      { n: projects.reduce((a, p) => a + p.stats.openIssues, 0), label: "Open Issues" },
      { n: projects.reduce((a, p) => a + p.stats.contributors, 0), label: "Contributors" },
    ].map((s, i) => (
      <div
        key={s.label}
        className="px-7 py-5 text-center bg-gray-900"
        style={{ borderRight: i < 2 ? "1px solid #1f2937" : "none" }}
      >
        <p className="text-2xl font-black text-white">{s.n}</p>
        <p className="text-xs text-gray-500 mt-1">{s.label}</p>
      </div>
    ))}
  </div>

</div>

{/* Filters bar (unchanged) */}
<div className="flex flex-col sm:flex-row gap-3">
  
  {/* Search */}
  <div className="relative flex-1 max-w-sm">
    <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500" />
    <input
      type="text"
      placeholder="Search projects or tech stack..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="w-full pl-9 pr-4 py-2.5 rounded-full text-white text-sm bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500 transition-colors placeholder-gray-500"
    />
  </div>

  {/* Status pills */}
  <div className="flex items-center gap-1.5 flex-wrap">
    <Filter size={13} className="text-gray-500 shrink-0" />
    {(["all", "active", "seeking", "new", "maintenance"] as const).map((s) => (
      <button
        key={s}
        onClick={() => setActiveStatus(s)}
        className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors duration-200 capitalize ${
          activeStatus === s
            ? "bg-blue-500 text-white"
            : "bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700 border border-gray-700"
        }`}
      >
        {s === "all" ? "All" : STATUS_META[s as ProjectStatus]?.label ?? s}
      </button>
    ))}
  </div>

</div>

          {/* Category tabs */}
          <div className="flex gap-0 mt-8 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
            {CATEGORY_FILTERS.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-5 py-3 text-sm font-semibold whitespace-nowrap border-b-2 transition-colors duration-200 ${activeCategory === cat.key
                    ? "border-blue-500 text-blue-400"
                    : "border-transparent text-gray-500 hover:text-gray-300"
                  }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. PROJECT LIST ──────────────────────────────────────────────────── */}
      <section className="py-12 px-6 md:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">

          {activeCategory === "all" && activeStatus === "all" && !searchQuery && (
            <FeaturedCard project={featured} />
          )}

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((p) => <ProjectCard key={p.id} project={p} />)}
            </div>
          ) : (
            <div className="text-center py-24">
              <Code2 size={36} className="mx-auto mb-4 text-gray-300" />
              <p className="font-semibold text-gray-500">No projects match that filter.</p>
              <p className="text-sm mt-1 text-gray-400">Try clearing the search or switching categories.</p>
              <button
                onClick={() => { setActiveCategory("all"); setActiveStatus("all"); setSearchQuery(""); }}
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-300 text-gray-600 hover:border-gray-500 text-sm font-semibold rounded-full transition-colors mt-6"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── 3. GOOD FIRST ISSUES ─────────────────────────────────────────────── */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

          {/* Left */}
          <div className="lg:col-span-2">
            <p className="text-blue-500 text-xs font-bold uppercase tracking-widest mb-3">
              Good First Issues
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 leading-snug mb-4">
              Start here
              <br />
              if you're new.
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-6">
              These issues are specifically labelled for people making their first
              open-source contribution. They're scoped, documented, and have a
              maintainer ready to review your PR within 48 hours.
            </p>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-green-50 border border-green-100">
              <CheckCircle2 size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
              <p className="text-green-800 text-xs leading-relaxed">
                <strong>No experience needed.</strong> Every issue marked "good first issue"
                has been written so a beginner can understand what needs to be done.
              </p>
            </div>
            <a
              href="https://github.com/opensourcekigali"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 hover:bg-gray-700 text-white text-sm font-semibold rounded-full transition-colors mt-6"
            >
              <Github size={14} /> View all issues on GitHub
            </a>
          </div>

          {/* Right: issue list */}
          <div className="lg:col-span-3 bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
            <div className="flex items-center justify-between mb-2 pb-3 border-b border-gray-100">
              <p className="text-sm font-bold text-gray-900">Open Issues</p>
              <span className="text-xs font-mono text-gray-400">{goodFirstIssues.length} issues</span>
            </div>
            {goodFirstIssues.map((issue) => (
              <IssueRow key={issue.id} issue={issue} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. PROPOSE A PROJECT ─────────────────────────────────────────────── */}
      <section className="py-20 px-6 md:px-20 bg-gray-950 relative overflow-hidden">

        {/* Dot grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div
          className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(59,130,246,0.09) 0%, transparent 70%)" }}
        />

        <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">

          <div className="max-w-xl">
            {/* Live badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-800 border border-gray-700 text-gray-400 text-xs font-semibold mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Always accepting new ideas
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-snug mb-4">
              Got a project idea that
              <br />
              <span className="text-blue-400">solves something real?</span>
            </h2>
            <p className="text-gray-400 text-base leading-relaxed">
              OSK incubates open-source projects that address genuine challenges in Rwanda and
              Africa. If you have an idea, a prototype, or even just a problem statement —
              bring it to the community. We'll help you build a team around it.
            </p>
          </div>

          {/* Checklist card */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-7 min-w-72 flex-shrink-0">
            <p className="text-white font-bold text-sm mb-5">What a good proposal needs:</p>
            <div className="space-y-3">
              {[
                "A real problem that exists in Rwanda or Africa",
                "A rough idea of how software can help",
                "Willingness to be the first maintainer",
                "At least one other person to co-build with",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Zap size={13} className="text-blue-400 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-400 text-sm leading-snug">{item}</p>
                </div>
              ))}
            </div>
            <a
              href="mailto:opensourcekigali@gmail.com?subject=Project Proposal"
              className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold rounded-full transition-colors mt-7"
            >
              Submit a Proposal <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
